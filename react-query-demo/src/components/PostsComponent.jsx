import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok, failed to fetch posts');
    } else {
    return response.json();
    }
};

function PostsComponent() {

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    if (isLoading) return <div>Loading The Posts...</div>;
    if (isError) return <div>Error Encountered: {error.message}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Posts (Fetched with React Query)</h2>

            <button onClick={refetch} style={{ marginBottom: '16px' }}>
                🔄 Refetch Posts
            </button>

            <div style={{ display: 'grid', gap: '16px', maxWidth: '800px' }}>{data.slice(0, 5).map(post => (
                <div key={post.id} style={{ border: '1px solid #ddd', padding: '12px', borderRadius: '4PX' }}>
                    <h3>{post.title}</h3>
                    <p>{post.body.substring(0, 100)}...</p>
                </div>
            ))} 
            </div>
        </div>
    );
}

export default PostsComponent;