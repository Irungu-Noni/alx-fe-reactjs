import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Task Two: React Query Data Handling</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;