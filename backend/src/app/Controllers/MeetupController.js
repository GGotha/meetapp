const { User } = require("../models");
const { Meetup } = require("../models");
const moment = require("moment");

class MeetupController {
  async store(req, res) {
    const { titulo, descricao, localizacao, imagem, date } = req.body;

    const getInfoUser = await User.findOne({
      where: { id: req.userId },
      raw: true
    });

    const { id } = getInfoUser;

    const addMeetupBD = await Meetup.create({
      user_id: id,
      titulo,
      descricao,
      localizacao,
      imagem,
      data: date
    });

    return res.json({
      addMeetupBD
    });
  }
  async list(req, res) {
    const getMeetupsUser = await Meetup.findAll({
      where: { user_id: req.userId },
      attributes: ["id", "titulo", "descricao", "localizacao", "imagem", "data"]
    });

    return res.json({
      getMeetupsUser
    });
  }
}

module.exports = new MeetupController();
