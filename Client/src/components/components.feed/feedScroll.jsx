import './feedScroll.css'
import Card from '@mui/material/Card';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import httpCommon from '../../htttp.common';
import { useState,useEffect } from 'react';
import axios from 'axios';
const FeedScroll=()=>{
    const [dbData,setdbData]=useState([])
    useEffect(()=>{
        httpCommon.get('/getFeeds')
      .then(res=>{
        console.log(res);
        setdbData(res.data.reverse())
      })
      .catch(err=>{
        console.log(err);
      })
    },[])
    // const FeedData=dbData.reverse()
    const likeFeed=async(noOflike,caption)=>{
        // console.log(noOflike);
        const formData=new FormData()
        formData.append('like',parseInt(noOflike)+1);
        formData.append('caption',caption);
        console.log(formData);
        await axios.post('http://localhost:5000/api/v1/almatters/feedliked',formData).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log("error");
        })
    }
    return(
        <div id="feedScroll-container">
            {
                
                dbData.map((feed)=>{

                    return(
                        <Card className="feed-card">
                            <div className="feed-cardHeader">
                                <div className="cardHeader-image">
                                    <img src={feed.profile_image} alt="image"></img>
                                </div>
                                <div className="cardHeader-title">
                                    <div className="cardHeader-title-name">
                                        {feed.username}
                                    </div>
                                    <div className='cardHeader-title-work'>
                                        {feed.work}
                                    </div>
                                </div>
                            </div>
                            <div className="feed-cardMedia">
                                <img src={`http://localhost:5000/${feed.media}`} alt="image">
                                </img>
                                {/* {console.log(`http://localhost:5000/${feed.media}`)} */}
                            </div>
                            <div className='feed-cardContent'>
                                {feed.caption}
                            </div>
                            <div className='feed-actions'>
                                <button id='likeBtn' onClick={()=>{likeFeed(feed.like,feed.caption)}}><ThumbUpOutlinedIcon/>Like {feed.like}</button>
                                <button><CommentIcon/>Comment</button>
                                <button><ShareIcon/>Share</button>
                            </div>
                        </Card>
                    )
                })
            }
            
            
        </div>
    )
}
export default FeedScroll