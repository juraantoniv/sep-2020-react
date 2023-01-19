import React from 'react';

const Post = ({post}) => {
    return (
        <div>

            <div>{post.id}</div>
            <div>{post.body}</div>
            <div>{post.title}</div>
        </div>
    );
};

export default Post;