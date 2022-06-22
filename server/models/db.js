const path = require('path');
if (!global.hasOwnProperty("models")) {
    var Sequelize = require("sequelize"),
        sequelize = null;
    // 
    const dburl = process.env.DATABASE_URL || 'postgres://vrwlaycfzbsbvw:564ba93261340b818ea3efb7a9eee2e7c8cd12dc93f099a9119da71f3d1b3daf@ec2-34-227-120-79.compute-1.amazonaws.com:5432/dakudebs0kkgq8'

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
