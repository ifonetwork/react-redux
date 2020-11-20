import React from "react";
import { postAction } from "./redux/actions";
import { connect } from "react-redux";

const newPost = { id: 2, text: "post text" };

const Child = ({ handleNewPost, myPosts }) => {
  return (
    <div>
      <div onClick={() => handleNewPost(newPost)}> I'm child </div>

      <div>
        {myPosts.map((post) => (
          <div key={post.id}>
            {post.id} {post.text}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myPosts: state.posts
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleNewPost: (post) => dispatch(postAction(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(Child);
