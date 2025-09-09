import { useEffect, useState } from "react";
import clsx from "clsx";

import styles from './Posts.module.scss'
import { Link, useSearchParams } from "react-router";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

function Posts() {
    const [params, setParams] = useSearchParams()
    const [page, setPage] = useState(() => +params.get("page") || 1)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => 
           { 
            setLoading(true)
            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setLoading(false)
            })
        },[page])

    useEffect(() => {
        setParams(page <= 1 ? "" : {page})
    },[page, setParams])
    
    return ( 
       <div className={clsx(styles.wrapper)}>
            <h1 className={clsx(styles.title)}>Posts</h1>
            {loading ? <Loading /> : <ul >
                {posts.map((post) => (
                    <li className={clsx(styles.post)} key={post.id}>
                        <Link className={clsx(styles.link)} to={`/posts/${post.id}`}>{post.id}. {post.title}</Link>
                    </li>
                ))}
            </ul>}

                <h2 className={clsx(styles.paginationtitle)}>Pagination</h2>

            <Pagination 
                currentPage = {page}
                totalPages = {5}
                onPageChange={setPage} 
            />
       </div>
     );
}

export default Posts;