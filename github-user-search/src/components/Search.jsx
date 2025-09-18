import React, { useState } from 'react'
import { fetchUserData, fetchAdvancedSearch } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = async () => {
  if (loading) return;

  setLoading(true);
  const newPage = page + 1;

  try {
    const queryParts = [];
    if (username.trim()) queryParts.push(username);
    if (location.trim()) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`)

    const query = queryParts.join('+');
    const searchData = await fetchAdvancedSearch(query, newPage);

    setUsers(prev => [...prev, ...(searchData.items || [])]);
    setPage(newPage);
    setHasMore(searchData.items && searchData.items.length === 30);
  } catch (err) {
    setError('Looks like we cant find the user');
  } finally {
    setLoading(false);
  }
};

  const handleSubmit = async (event) => {
  event.preventDefault();
  if (!username.trim() && !location.trim() && !minRepos) return;

  setLoading(true);
  setError('');
  setUser(null);
  setUsers([]);

  try {
    if (username.trim() && location.trim() && !minRepos) {
        // single user search
        const userData = await fetchUserData(username);
        setUser(userData);
    } else {
        // advanced search
        const queryParts = [];
        if (username.trim()) queryParts.push(username);
        if (location.trim()) queryParts.push(`location:${location}`);
        if (minRepos) queryParts.push(`repos:>=${minRepos}`)

        const query = queryParts.join('+');
        const searchData = await fetchAdvancedSearch(query, page);
        setUsers(searchData.items || []);
        setHasMore(searchData.items && searchData.items.length === 30);
    }
  } catch (err) {
    setError('Looks like we cant find the user');
  } finally {
    setLoading(false);
  }
    }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Search GitHub User</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                GitHub Username
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="e.g. octocat"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Location (optional)
                </label>
                <input
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="e.g. San Francisco"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Min Repositories
                </label>
                <input
                    type="number"
                    value={minRepos}
                    onChange={(event) => setMinRepos(event.target.value)}
                    placeholder="e.g. 50"
                    min="0"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-medium"
            >
                earch
            </button>
        </form>
      {/* Adding loading, error, and result display here soon */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {user && (
        <div className="text-center mt-6">
            <h3 className="text-lg font-semibold mb-2">Single User Result</h3>
            <div className="flex flex-col items-center">
                <img
                    src={user.avatar_url}
                    alt={user.name || user.login}
                    className="w-24 h-24 rounded-full mb-2"
                />
                <h4 className="font-medium">{user.name || user.login}</h4>
                {user.location && <p className="text-gray-600">📍 {user.location}</p>}
                <p className="text-gray-600">📦 {user.public_repos} repos</p>
                <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-500 hover:underline"
                >
                    View Profile
                </a>
            </div>
        </div>
        )}

      {users && users.length > 0 && (
        <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Search Results ({users.length})</h3>
            <div className="grid gap-4">
                {users.map((user) => (
                <div
                    key={user.id}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow transition"
                >
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div className="flex-1">
                        <h4 className="font-medium">{user.login}</h4>
                        {user.location && <p className="text-sm text-gray-600">📍 {user.location}</p>}
                        <p className="text-sm text-gray-600">📦 {user.public_repos} repos</p>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-sm hover:underline"
                        >
                            View Profile
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </div>
        )}

        {hasMore && !loading && (
            <div className="text-center mt-6">
                <button
                    onClick={handleLoadMore}
                    className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                >
                    load More
                </button>
            </div>
        )}
    </div>
)}

export default Search;