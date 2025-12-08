export default {
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};