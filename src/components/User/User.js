export default function User ({user,setPostsID}){
    const {id, name, email} = user;

    return (
        <div className={'box'}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <button onClick={() => setPostsID(id)}>getUser_Post</button>
        </div>
    );
};