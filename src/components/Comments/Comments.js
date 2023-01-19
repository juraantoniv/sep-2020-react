import React from 'react';

const Comments = ({comments}) => {
    return (
        <div>

            <div>{comments.id}</div>
            <div>{comments.name}</div>
            <div>{comments.email}</div>
        </div>
    );
};

export default Comments;