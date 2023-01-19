export default function User ({user,setPostsID,setPostsID1}){
    const {id, name, email} = user;

    return (
        <div className={'box'}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <button onClick={() => setPostsID(id)}>getUser_Post</button>
            <button onClick={() => setPostsID1(id)}>getUser_Comments</button>
        </div>
    );
};