import React, { useState, useEffect } from "react";
import axios from "axios";

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
            <h1>PostList...</h1>
        </div>
    )
}

export default PostList;