import express from "express"
// import MentorShalaDAO from './dao/MentorShalaDAO.js'
import usersDetailsCtrl from "./controller/fetchController.js"
import postCtrl from "./controller/postController.js"
import updateFeedCtrl from "./controller/updateController.js"
import multer from 'multer'
// import GridFsStorage from 'multer-gridfs-storage'
// const storage=new GridFsStorage({
//     options:{useNewUrlParser:true}
// })
const upload = multer({ dest: './imgUpload/' })
const router=express.Router()

router.route("/getFeeds").get(async(req,res)=>{
    const data=await usersDetailsCtrl.getapiFeeds()
    // console.log(data);
    res.send(data)
})

router.post("/getUsers",upload.single('media'),async(req,res)=>{
    // console.log(req.body);
    res.send(false)
})
router.post("/postFeeds",upload.single('media'),async(req,res)=>{

    // console.log(req.body);
    // console.log(req.file);
    if(req.file!=undefined){

        const obj={
            "username":req.body.username,
            "profile_image":req.body.profile_image,
            "work":req.body.work,
            "media":req.file.path,
            "caption":req.body.caption,
            "like":0
        }
        await postCtrl.postapiFeeds(obj)
    }
    else{
        const obj={
            "username":req.body.username,
            "profile_image":req.body.profile_image,
            "work":req.body.work,
            "caption":req.body.caption,
            "like":0
        }
        await postCtrl.postapiFeeds(obj)
    }
    
})
router.post("/addNewUser",upload.single('media'),async(req,res)=>{
    console.log(req.body);
})
router.post("/feedliked",upload.single('media'),async(req,res)=>{

    console.log(req.body);
    const obj={
        "like":req.body.like,
        "caption":req.body.caption
    }
    await updateFeedCtrl.likeUpdateApi(obj)   
})
export default router