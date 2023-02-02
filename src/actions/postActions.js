import axios from "axios";
import { AXIOS_POST, NEW_POST } from "./types";

export function axiosPost(){
    return function(dispatch){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.data)
        .then(data => dispatch({
            type: AXIOS_POST,
            payload: data
        }));
    }
}


export function createPost(postData){
    return function(dispatch){
    axios.post("https://jsonplaceholder.typicode.com/posts",{
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(postData)
    })
    .then(res => res.data)
    .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
    }
}
