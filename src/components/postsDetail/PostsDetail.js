import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostsDetail.css";

const PostsDetail = (id, userId) => {
    console.log("ID => ", id.match.params)

    const url = 'https://jsonplaceholder.typicode.com'

    const [post, setPost] = useState();
    const [user, setUser] = useState();
    const [showPostDetail, setShowPostDetail] = useState(true)

    console.log("POST ==> ", post)
    console.log("UESR ==> ", user)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`${url}/posts/${id.match.params.id}`);
            setPost(result.data);
            const postUser = await axios(`${url}/users/${id.match.params.userId}`);     
            setUser(postUser.data)
        };

        fetchData();
    }, [id]);

    const handleClose = () => {
        setShowPostDetail(false)
        // history.push('/')
    }

    return (
        <>
        {showPostDetail ? (
            <div className = "post-detail_main_div">
                <div className = "post-detail_inner_div">
                    <span className = "show_post_detail_close" onClick = {() => {handleClose()}}>x</span>
                    
                </div>
            </div>
            ) 
            : (null)
        }
        </>
    )
}

export default PostsDetail;