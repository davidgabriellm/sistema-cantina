import Cliente from "../models/Cliente.js";
import jwt from "jsonwebtoken";

import authConfig from "../../config/auth.js"

class SessaoController {
  async create(req, res) {
    const { email, senha } = req.body;

    const cliente = await Cliente.findOne({
      where: { email },
    });

    if (!cliente) {
      return res.status(401).json({ error: "User not found" });
    }

    if (!(await cliente.checkPassword(senha))) {
      return res.status(401).json({ error: "Password not match" });
    }

    const { id, nome } = cliente;

    return res.json({
      cliente: {
        id,
        nome,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessaoController();