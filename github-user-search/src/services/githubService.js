import axios from 'axios';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error('User not found');
        } else {
            throw new Error('Something went wrong. Please try again.')
        }
    }
};

export const fetchAdvancedSearch = async (query, page = 1) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users`, {
      params: { q: query, page, per_page: 30 },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('No users found');
    } else if (error.response && error.response.status === 422) {
      throw new Error('Invalid search query');
    } else {
      throw new Error('Search failed. Please try again.');
    }
  }
};