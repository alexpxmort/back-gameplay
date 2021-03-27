/**
 * Controller para ser usado nas rotas de criação de jogada e recuperação
 */

const Util = require('../utils/util');
const UserGameplay = require('../models/user_gameplay');
const Jogada = require('../models/jogada');
const yup   =require('yup')



module.exports = {
    async teste(req,res){
        return await res.json({msg:'Route teste works!',error:false});
    },
    async createJogada(req,res){
        let {nome,chutes,data} = req.body;

        let dataExists = Object.keys(data).length > 0

        if(dataExists){
            nome  = data.nome
            chutes = data.chutes
        }

       const schema =  yup.object().shape({
           nome:yup.string().min(1).required(),
           chutes:yup.array().required()
       });

       let valid  = true
        if(dataExists){
          valid  = await schema.isValid(data)          
        }else{
            valid  = await schema.isValid(req.body)    
        }

        if(!valid){
            return res.status(400).json({msg:'Dados inválidos',error:true});
         }

        let user = await UserGameplay.create({nome});

        user = Util.formatObject(user);

        chutes.forEach(async (val)=>{
            let jogadas = await Jogada.create({tempo:val.tempo,chute:val.chute,user_gameplay_id:user.id})
        })

        return res.status(200).json({'msg':'Jogadas criadas com Sucesso!',error:false});
    },
    async getallJogadas(req,res){
        let jogadas =  await Jogada.findAll({
            include:[
                {
                    association:'user_gameplay',
                }
            ],
               
        });

        jogadas = Util.formatObject(jogadas);


        return res.status(200).json({'jogadas':jogadas,error:false})
    }
}


