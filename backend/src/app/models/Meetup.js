module.exports = (sequelize, DataTypes) => {
  const Meetup = sequelize.define(
    "Meetup",
    {
      user_id: DataTypes.INTEGER,
      titulo: DataTypes.STRING,
      descricao: DataTypes.TEXT,
      localizacao: DataTypes.STRING,
      imagem: DataTypes.STRING,
      data: DataTypes.DATE,
      hora: DataTypes.TIME
    },
    {
      tableName: "meetups"
    }
  );

  return Meetup;
};
