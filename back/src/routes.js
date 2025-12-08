import { Router } from "express";
import SessaoController from "./app/controllers/SessaoController.js";
import ClienteController from "./app/controllers/ClienteController.js"
import PedidoController from "./app/controllers/PedidoController.js";
import ProdutoController from "./app/controllers/ProdutoController.js";

const routes = new Router();

routes.post("/sessions", SessaoController.create);
routes.post("/users", ClienteController.register);
routes.get("/me", ClienteController.me);

routes.post("/pedidos", PedidoController.create);
routes.get("/pedidos", PedidoController.listar);
routes.put("/pedidos/:id/pagar", PedidoController.pagar);
routes.put("/pedidos/:id/cancelar", PedidoController.cancelar);

routes.post("/produtos", ProdutoController.store);
routes.get("/produtos", ProdutoController.index);
routes.get("/produtos/:id", ProdutoController.show);
routes.put("/produtos/:id", ProdutoController.update);
routes.patch("/produtos/:id/ativo", ProdutoController.toggleAtivo);
routes.delete("/produtos/:id", ProdutoController.delete);


export default routes;