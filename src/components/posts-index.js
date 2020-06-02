import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log("The posts returned are ", this.props.posts);
    return <div>List of blog posts will go here</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
