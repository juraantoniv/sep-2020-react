import {useEffect, useState} from "react";
import {userService} from "../../services/users.service";
import User from "../User/User";
import {userPost} from "../../services/post.service";
import Post from "../Post/Post";
import {userComments} from "../../services/comments.sevices";
import Comments from "../Comments/Comments";



const Users = () => {
    const [users, setUser] = useState([]);
    const [id, setPostsID] = useState(null)
    const [id1, setPostsID1] = useState(null)
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    console.log(id)

    useEffect(() => {
        userService.getAll().then(({data}) =>{setUser(data)
        console.log(data)})
    }, [])

    useEffect(() => {
        userPost.getAllPost(id).then(({data}) =>{setPosts(data)
            console.log(data)})
    }, [id])


    useEffect(() => {
        userComments.getAllComments(id1).then(({data}) =>{setComments(data)
            console.log(data)})
    }, [id1])

    return (
        <div>

            {posts && posts.map(post => <Post key={post.id} post={post}/>)}

            <span></span>

            {comments && comments.map(comments => <Comments key={comments.id} comments={comments} />)}

            <span></span>

            {users.map(user => <User key={user.id} user={user} setPostsID={setPostsID} setPostsID1={setPostsID1}/>)}

        </div>
    );
};

export {Users};