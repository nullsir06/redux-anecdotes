import axios from 'axios';

const baseUrl = '/api/anecdotes';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const createNew = async (content) => {
    const object = { content, votes: 0 };
    const response = await axios.post(baseUrl, object);
    return response.data;
};

export default { getAll, createNew };
