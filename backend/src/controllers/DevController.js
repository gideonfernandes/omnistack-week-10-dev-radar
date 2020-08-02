const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },
  async store(request, response) {
    const { github_username, techs, lat, lng } = request.body;
  
    if (!github_username || !techs) {
      return response.status(400)
        .json({ message: 'Github username and techs are required.' });
    };

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const githubResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
    
      const { name = login, avatar_url, bio } = githubResponse.data;
      const techsArray = parseStringAsArray(techs);
    
      const location = {
        type: 'Point',
        coordinates: [lng, lat]
      };
    
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    };

    return response.json(dev);
  }
};
