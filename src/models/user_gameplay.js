const {Model,DataTypes} = require('sequelize');

class UserGamePlay extends Model{
    static init(sequelize){
        super.init({
            createdAt: {
                field: 'created_at',
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updated_at',
            },
             nome:{
                type: DataTypes.STRING,
                field: 'nome',
            }
        },
        {
            sequelize,
            freezeTableName: true,
            tableName: 'game_play_users',
        })
    }

}

module.exports = UserGamePlay;
