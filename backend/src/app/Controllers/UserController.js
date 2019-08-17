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
  // async updatePass(req, res) {
  //   const { password, confirmPassword } = req.body;

  //   const user = await User.findOne({
  //     where: { password_hash }
  //   });

  //   if (!(await checkPassword(password))) {
  //     return res.status(400).json({ error: "alo" });
  //   }
  // }
}

module.exports = new UserController();
