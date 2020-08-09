const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

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
      
      const sendSocketMessageTo = findConnections(
        { latitude: lat, longitude: lng },
        techsArray
      );

      sendMessage(sendSocketMessageTo, 'new-dev', dev);
    };

    return response.json(dev);
  },

  async update(request, response) {
    const { user_id } = request.params;
    const { name, bio, techs } = request.body;

    const updatedData = {};
    if (name) updatedData.name = name;
    if (bio) updatedData.bio = bio;
    if (techs) {
      const techsArray = parseStringAsArray(techs);
      updatedData.techs = techsArray;
    };

    const dev = await Dev.findOneAndUpdate(
      { _id: user_id },
      updatedData, 
      { new: true }
    );

    return response.json(dev);
  },

  async destroy(request, response) {
    const { user_id } = request.params;

    await Dev.findByIdAndRemove(user_id);

    return response.json({ message: 'Dev deleted.' });
  }
};
