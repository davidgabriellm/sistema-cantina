import 'dotenv/config';

export default {
  dialect: 'postgres',

  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),

  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  dialectOptions: {
    ssl: true,
  },

  define: {
    timestamps: process.env.DB_TIMESTAMPS === 'true',
    underscored: process.env.DB_UNDERSCORED === 'true',
    underscoredAll: process.env.DB_UNDERSCORED_ALL === 'true',
  },
};
