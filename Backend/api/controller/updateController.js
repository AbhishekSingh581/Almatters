import almattersDb from "../dao/almattersDAO.js";

export default class updateFeed{
    static async likeUpdateApi(obj){
        try{
            // console.log(obj);
            await almattersDb.updateLikes(obj)
            // console.log(userlists);
            
        }
        catch{
            console.log("Can't post data");
        }
    }
}