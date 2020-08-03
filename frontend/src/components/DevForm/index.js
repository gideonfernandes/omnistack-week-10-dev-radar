import React, { useState, useEffect } from 'react';
import './styles.css';

const DevForm = ({ onSubmit }) => {
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLat(latitude);
        setLng(longitude);
      },
      (error) => {
        console.error(error.message);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    
    await onSubmit({
      github_username: githubUsername,
      techs,
      lat,
      lng
    });

    setGithubUsername('');
    setTechs('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          type="text"
          name="github_username"
          value={githubUsername}
          onChange={e => setGithubUsername(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          type="text"
          name="techs"
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="lat">Latitude</label>
          <input
            type="text"
            name="lat"
            value={lat}
            onChange={e => setLat(Number(e.target.value))}
          />
        </div>
        <div className="input-block">
          <label htmlFor="lng">Longitude</label>
          <input
            type="text"
            name="lng"
            value={lng}
            onChange={e => setLng(Number(e.target.value))}
          />
        </div>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default DevForm;
