"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productos_1 = require("./productos");
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var path = __importStar(require("path"));
var SocketIO = __importStar(require("socket.io"));
var fs = __importStar(require("fs"));
var __dirname = path.resolve();
var app = (0, express_1.default)();
var port = 8080;
app.engine('hbs', (0, express_handlebars_1.default)({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials/'
}));
app.set('views', './views'); // directorio de plantillas
app.set('view engine', 'hbs'); // engine de plantillas
app.use(express_1.default.static('public'));
var router = express_1.default.Router();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", router);
var listado;
var server = app.listen(port, function () {
    console.info("Servidor listo en el puerto " + port);
    listado = new productos_1.Productos();
});
var io = new SocketIO.Server(server);
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
router.get("/productos/listar", function (req, res) {
    var prod = listado.listarTodosLosProductos();
    prod.length ? res.json(prod) : res.json({ error: 'no hay productos cargados' });
});
router.get("/productos/listar/:id", function (req, res) {
    var id = req.params.id;
    var prod = listado.listarProducto(Number(id));
    prod ? res.json(prod) : res.json({ "error": "producto no encontrado" });
});
router.post("/productos/guardar", function (req, res) {
    var producto = req.body;
    listado.guardarProducto(producto);
    io.sockets.emit('cargarLista', listado.listarTodosLosProductos());
    res.redirect('/');
});
router.put('/productos/actualizar/:id', function (req, res) {
});
router.delete('/productos/borrar/:id', function (req, res) {
});
app.get("/productos/vista", function (req, res) {
    var prod = listado.listarTodosLosProductos();
    res.render('main', { products: prod });
});
server.on("error", function (error) {
    console.error("error " + error);
});
io.on('connection', function (socket) { return __awaiter(void 0, void 0, void 0, function () {
    var messageFile, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('¡Nuevo cliente conectado!');
                socket.emit('cargarLista', listado.listarTodosLosProductos());
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fs.promises.readFile('./messages.txt', 'utf-8')];
            case 2:
                messageFile = _a.sent();
                io.sockets.emit('messages', JSON.parse(messageFile));
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                return [3 /*break*/, 4];
            case 4:
                socket.on('new-message', function (data) {
                    return __awaiter(this, void 0, void 0, function () {
                        var messageFile, messageObj, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    data.time = Date();
                                    return [4 /*yield*/, fs.promises.readFile('./messages.txt', 'utf-8')];
                                case 1:
                                    messageFile = _a.sent();
                                    messageObj = JSON.parse(messageFile);
                                    messageObj.push(data);
                                    return [4 /*yield*/, fs.promises.writeFile('./messages.txt', JSON.stringify(messageObj, null, '\t'))];
                                case 2:
                                    _a.sent();
                                    io.sockets.emit('messages', messageObj);
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_2 = _a.sent();
                                    console.log('error new-message');
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                });
                return [2 /*return*/];
        }
    });
}); });
