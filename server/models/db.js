const path = require('path');
if (!global.hasOwnProperty("models")) {
    var Sequelize = require("sequelize"),
        sequelize = null;
    // 
    const dburl = process.env.DATABASE_URL || 'postgres://jiocfpyuuukrba:21d6fb2addf625529938c26377794b684065e9b9fa46263a4a3cba7cfa371441@ec2-34-192-210-139.compute-1.amazonaws.com:5432/d1fu94r7q9e787'

    sequelize = new Sequelize(dburl, {
        ssl: true,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    });

    global.models = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        DailyWords: require(path.join(__dirname, 'DailyWords'))(sequelize, Sequelize.DataTypes),
    };
}
module.exports = global.models;
