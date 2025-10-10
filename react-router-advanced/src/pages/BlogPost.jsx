// src/pages/BlogPost.jsx
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const fetchPostById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch blog post');
    }
    return response.json();
}

function BlogPost() {
    const { id } = useParams();

    const { data: post, isLoading, isError, error } = useQuery({
        queryKey: ['post', id],
        queryFn: () => fetchPostById(id),
        enabled: !!id,
    });

    if (isLoading) return <div>Loading blog post...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>{post.title}</h1>
            <p><em>By User {post.userId}</em></p>
            <p>{post.body}</p>
        </div>
    );
}

export default BlogPost;