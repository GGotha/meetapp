const { User } = require("../models");

class UserController {
  async store(req, res) {
    const { email, name, password } = req.body;

    if (await User.findOne({ where: { email } })) {
      return res
        .status(200)
        .json({ status: "error", msg: "Email já cadastrado" });
    }

    try {
      const criarUsuario = await User.create({
        name: name,
        email: email,
        password: password
      });

      return res.send({
        status: "success",
        msg: "Usuário criado"
      });
    } catch (err) {
      return res.status(200).send({ status: "error", msg: "erro interno" });
    }
  }
}

module.exports = new UserController();
