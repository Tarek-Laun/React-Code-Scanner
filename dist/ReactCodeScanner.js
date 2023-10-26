"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const library_1 = require("@zxing/library");
const react_webcam_1 = __importDefault(require("react-webcam"));
function ReactCodeScanner(props) {
    const camref = (0, react_1.useRef)(null);
    var width = 1280;
    var height = 720;
    if (props.width != undefined) {
        width = props.width;
    }
    if (props.height != undefined) {
        height = props.height;
    }
    const videoConstraints = {
        width: width,
        height: height,
        facingMode: "environment"
    };
    const scan = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        console.log("Scan");
        const codeReader = new library_1.BrowserMultiFormatReader();
        const imagesrc = (_a = camref === null || camref === void 0 ? void 0 : camref.current) === null || _a === void 0 ? void 0 : _a.getScreenshot();
        if (imagesrc) {
            codeReader.decodeFromImage(undefined, imagesrc).then((result) => {
                props.onScan(null, result);
            })
                .catch((error) => {
                props.onScan(error, null);
            });
        }
    });
    react_1.default.useEffect(() => {
        setInterval(scan, 1000);
    });
    return (react_1.default.createElement(react_webcam_1.default, { audio: false, height: height, width: width, ref: camref, screenshotFormat: "image/jpeg", videoConstraints: videoConstraints }));
}
exports.default = ReactCodeScanner;
