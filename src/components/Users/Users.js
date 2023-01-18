import {useEffect, useState} from "react";
import {userService} from "../../services/users.service";
import User from "../User/User";
import {userPost} from "../../services/post.service";



const Users = () => {
    const [users, setUser] = useState([]);
    const [id, setPostsID] = useState(null)
    const [posts, setPosts] = useState([])
    console.log(id)

    useEffect(() => {
        userService.getAll().then(({data}) =>{setUser(data)
        console.log(data)})
    }, [])

    useEffect(() => {
        userPost.getAllPost(id).then(({data}) =>{setPosts(data)
            console.log(data)})
    }, [id])

    return (
        <div>

            {/*{post && <Post key={post.id} item={post}/>}*/}
            {users.map(user => <User key={user.id} user={user} setPostsID={setPostsID}/>)}

        </div>
    );
};

export {Users};