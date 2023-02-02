import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { axiosPost } from "../actions/postActions";

function Posts(props){
    const [mounted, setMounted]=useState(false);
    if(!mounted){
        props.axiosPost();
    }
    useEffect(()=>{
        setMounted(true);
    }, []); 
    return(
        <div>
            <h1>Posts</h1>
          {props.posts.map(post => <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>)}
        </div>
    );
    }
    Posts.propTypes ={
        axiosPost: PropTypes.func.isRequired,
        posts: PropTypes.array.isRequired,
        newPost: PropTypes.object.isRequired
    }
    const mapStateToProps = state=>({
        posts:state.posts.items, 
        newPost:state.posts.item
    });

export default connect(mapStateToProps, {axiosPost})(Posts);