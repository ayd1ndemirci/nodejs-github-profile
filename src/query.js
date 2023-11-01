const axios = require('axios');

async function getProfileInfo(username) {

    const api = `https://api.github.com/users/${username}`;
    const response = await axios.get(api);

    return response.data;

}

module.exports = { getProfileInfo };