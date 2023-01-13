import almattersDb from "../dao/almattersDAO.js";

export default class postCtrl{
    static async postapiFeeds(obj){
        try{
            await almattersDb.postFeed(obj)
            // console.log(userlists);
            
        }
        catch{
            console.log("Can't post data");
        }
    }
}