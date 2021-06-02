import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./PostsDetail.css";

const PostsDetail = (id, userId) => {
    console.log("ID => ", id.match.params)

    const url = 'https://jsonplaceholder.typicode.com'

    const [post, setPost] = useState();
    const [user, setUser] = useState();
    const [showPostDetail, setShowPostDetail] = useState(true)
    const history = useHistory();

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
        history.push('/')
    }

    return (
        <>
        {showPostDetail ? (
            <div className = "post-detail_main_div">
                <div className = "post-detail_inner_div">
                    <span className = "show_post_detail_close" onClick = {() => {handleClose()}}>x</span>
                    {post&&user ? (
                        <div className = "post-detail">
                            <h1>Post details</h1>
                            <p><span>Post author's name :- </span>&nbsp;&nbsp;&nbsp;{user.name}</p>
                            <p><span>Post author's catchPhrase :- </span>{user.company.catchPhrase}</p> 
                            <p><span>Post title :- </span>{post.title}</p>
                            <p><span>Post body :- &nbsp;</span> {post.body}</p> 
                        </div>
                    ) : (null)}
                    
                </div>
            </div>
            ) 
            : (null)
        }
        </>
    )
}

export default PostsDetail;