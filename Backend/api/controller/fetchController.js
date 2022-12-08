import almattersDb from "../dao/almattersDAO.js";

export default class usersDetailsCtrl{
    static async getapiFeeds(){
        try{
            const feedslists=await almattersDb.getFeed()
            // console.log(userlists);
            return feedslists
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }
}