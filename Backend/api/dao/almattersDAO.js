import { query } from "express"

let almattersUsers

export default class almattersDb{
    static async injectDB(conn){
        if(almattersUsers) return almattersUsers
        try{
            almattersUsers=conn.db(process.env.MENTORSHAL_NS)
            console.log("connected to collection");
        }
        catch(e){
            console.error("error")
        }
    }
    static async getFeed(){
        let cursor
        try{
            cursor=await almattersUsers.collection("feedCollection").find()
            // console.log(cursor);
        }
        catch{
            console.log("cant get the data");
            return []
        }
        try{
            const feedsList=await cursor.toArray()
            return feedsList
        }
        catch{
            console.log("cant make it an array");
        }
    }
    static async postFeed(obj){
        // let cursor
        try{
            await almattersUsers.collection("feedCollection").insertOne(obj,(err,res)=>{
                if (err) throw err;
                console.log("1 document inserted");
            })
            // console.log(cursor);
        }
        catch{
            console.log("cant post the data");
        }
    }
    static async updateLikes(obj){
        // let cursor
        // console.log(obj);
        try{
            const query={caption:obj.caption}
            // console.log(query);
            const newvalues = {
                $set: {
                    like:obj.like
                }
            };
            await almattersUsers.collection("feedCollection").updateOne(query,newvalues,(err,res)=>{
                if (err) throw err;
                console.log("1 document updated");
            })
            // console.log(cursor);
        }
        catch{
            console.log("cant post the data");
        }
    }
}