import React,{useEffect, useState, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getPost, getUser } from "../modules/samples";

const Samples = () => {
    const loadingGetPost  = useSelector(state => state.samplesReducer.loading.GET_POST);
    const loadingGetUser = useSelector(state => state.samplesReducer.loading.GET_USER);
    const post = useSelector(state => state.samplesReducer.post);
    const user = useSelector(state => state.samplesReducer.user);
    const dispatch = useDispatch()
    const [num, setNum] = useState(1)

    useEffect(() => {
        dispatch(getUser())
    },[])

    useEffect(() => {
        dispatch(getPost(num))
    },[getPost,num])

    console.log("loadingGetPost",loadingGetPost)
    console.log("loadingGetUser",loadingGetUser)
    console.log("post",post)
    console.log("user",user)
    console.log("numnff",num)

    const changePost = () => {
        setNum(num + 1)
    }

    const style = {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        fontSize : "10px"
    }
    return (
        <div>
            <h1>post</h1>
            {loadingGetPost && <LoadingComponent />}
            {!loadingGetPost && post && (
                <div style={style}>
                    <h1>{post.title}</h1>
                    <h3>{post.body}</h3>
                </div>
            )}
            <button onClick={changePost}>change Post</button>
            <h1>User Information</h1>
            {loadingGetUser && <LoadingComponent/>}
            {!loadingGetUser && user && (
                user.map(user => (
                    <div style={style}key={user.id}>
                        <h2 style={{margin: 0}}>{user.username} ({user.email})</h2>
                        <div style={{marginBottom: '10px'}}> - {user.company.name}</div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Samples;

const LoadingComponent = () => {
    const style = {
        fontSize : "50px",
        color: "red",
    }
    return (
        <div style={style}>
            로딩중 입니다...
        </div>
    )
}