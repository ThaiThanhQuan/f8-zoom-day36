import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import clsx from "clsx";

import Loading from "../../components/Loading";
import styles from './PostDetail.module.scss'

function PostDetail() {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState([])

    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
                if (!res.ok) {
                    navigate("/posts", {
                        replace: true,
                    });
                    return;
                }
                return res.json();
            })
         .then(data => {
            setPost(data)
            setLoading(false)
         })
    },[id])

    useEffect(() => {
         setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
         .then(res => res.json())
         .then(data => {
            setComments(data)
            setLoading(false)
         })
    },[id])

    return ( 
          loading ? (<Loading />) : (<div className={clsx(styles.wrapper)}>
                <ul className={clsx(styles.post)}>
                   <li className={clsx(styles.posttitle)}>{post.title}</li>
                   <li className={clsx(styles.postbody)}>{post.body}</li>
                   <li className={clsx(styles.postuserid)}>{post.userId}</li>
                </ul>
            
                {comments.map(comment => (
                    <ul className={clsx(styles.comment)}>
                        <li className={clsx(styles.commentname)}>{comment.name}</li>
                        <li className={clsx(styles.commentemail)}>{comment.email}</li>
                        <li className={clsx(styles.commentbody)}>{comment.body}</li>
                    </ul>
                ))}
            </div>)
     );
}

export default PostDetail;