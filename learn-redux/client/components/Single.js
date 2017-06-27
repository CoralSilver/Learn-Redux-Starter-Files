import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
    // index of the post

    // The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
    // Otherwise -1 is returned.
    const postId = props.params.postId;
    const i = props.posts.findIndex((post) => post.code === postId);
    const post = props.posts[i];
    const postComments = props.comments[postId] || [];
    return (
        // the post itself
        <div className="single-photo">
            <Photo i={i} post={post} {...props} />
            <Comments postComments={postComments} {...props} />
        </div>
    )

}

export default Single;
