import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import "./PostList.css";


const PostList = () => {
    const [posts, setPosts] = useState([]);
    // console.log("POSTS ==> ", posts )

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://jsonplaceholder.typicode.com/posts");
            setPosts(result.data);
        };

        fetchData();
    }, []);

    return (
        <div className = "post-list_main_div">
            {
                posts?.map(post => (
                    <Link to= {`/posts/${post.id}/${post.userId}`}  className = "no-decoration" key = {post.id}>
                        <div className = "post_display">
                            <h4>Post - {post.id}</h4>
                            <p style = {{paddingTop:'6px'}}>{post.title}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default PostList;