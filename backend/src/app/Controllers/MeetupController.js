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

    try {
      const addMeetupBD = await Meetup.create({
        user_id: id,
        titulo,
        descricao,
        localizacao,
        imagem,
        data: date
      });

      return res.json({
        status: "success",
        msg: "Meetup criada com sucesso",
        addMeetupBD
      });
    } catch (error) {
      return res.json({
        status: "error",
        msg: "Ocorreu um erro interno, por favor, tente novamente mais tarde"
      });
    }
  }
  async list(req, res) {
    try {
      const getMeetupsUser = await Meetup.findAll({
        where: { user_id: req.userId },
        attributes: [
          "id",
          "titulo",
          "descricao",
          "localizacao",
          "imagem",
          "data"
        ]
      });

      return res.json({
        status: "success",
        msg: "Meetups encontradas com sucesso",
        getMeetupsUser
      });
    } catch (error) {
      return res.json({
        status: "error",
        msg: "Ocorreu um erro interno, por favor, tente novamente mais tarde"
      });
    }
  }
  async listById(req, res) {
    const idMeetup = req.params.id;

    try {
      const getAllInfoUser = await User.findOne({
        where: { id: req.userId },
        raw: true
      });

      const { id: idCliente } = getAllInfoUser;

      const getArtigoById = await Meetup.findOne({
        where: { user_id: idCliente, id: idMeetup },
        raw: true
      });

      const { titulo, descricao, localizacao, imagem, data } = getArtigoById;

      return res.send({
        status: "success",
        msg: "Meetup Encontrada",
        titulo,
        descricao,
        localizacao,
        imagem,
        data
      });
    } catch (error) {
      return res.status(200).send({
        status: "error",
        msg: "Erro ao encontrar meetup, tente novamente mais tarde"
      });
    }
  }
}

module.exports = new MeetupController();
