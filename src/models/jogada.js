const {Model,DataTypes} = require('sequelize');

class Jogada extends Model{
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
            tempo: {
                type: DataTypes.STRING,
                field: 'tempo',
            },
            chute: {
                type: DataTypes.INTEGER,
                field: 'chute',
            },
        },
        {
            sequelize,
            freezeTableName: true,
            tableName: 'jogadas',
        })
    }

    static associate(model){
        this.belongsTo(model.UserGamePlay,{foreignKey:'user_gameplay_id',as:'user_gameplay'});
    }
}

module.exports = Jogada;
