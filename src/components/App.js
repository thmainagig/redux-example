import React from "react";
import { Provider } from "react-redux";
import Posts from "./Posts";
import PostForm from "./Postform";
import myStore from "../store";

function App(className="container") {

  return (
    <Provider store={myStore}>
    <div className="">
    <h1>React Redux Example</h1>
    <PostForm />
    <Posts />
    </div>
    </Provider>
  );
}

export default App;
