import React, {useState} from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { createPost } from "../actions/postActions";

function PostForm(props){
    const [content, setContent] = useState({
    title: "",
    body: ""
  })
function handleChange(e){
    const{name, value} = e.target;
    setContent({[name]: value});
  }
  function handleSubmit(e){
    e.preventDefault();
    const post = { title: content.title, body: content.body}
  props.createPost(post);
  }
    return(
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title: </label><br/>
        <input onChange={handleChange} type="text" name="title" value={content.title} />
      </div>
      <br/>
      <div>
      <label>Body: </label><br/>
      <textarea onChange={handleChange} name="body" value={content.body}></textarea>
      </div>
      <br/>
      <button type="submit">Submit</button>
    </form>
    );
}

PostForm.propTypes={
  createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);