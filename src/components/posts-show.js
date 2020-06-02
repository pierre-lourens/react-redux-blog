import React, { Component } from "react";
import { connect } from "react-redux";

class PostsShow extends Component {
  render() {
    return (
      <div>
        <h1>Show a single post</h1>
      </div>
    );
  }
}

export default connect(null, null)(PostsShow);
