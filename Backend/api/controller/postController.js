import almattersDb from "../dao/almattersDAO.js";

export default class postFeedCtrl{
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