/**
 * Classe que faz o parse para JSON dos obejtos do banco
 */

class Util{
    formatObject (obj){
      return JSON.parse(JSON.stringify(obj));
   }
   
}

module.exports = new Util();