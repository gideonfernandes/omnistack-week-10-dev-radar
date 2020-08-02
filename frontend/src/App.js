import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [devs, setDevs] = useState([]);

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

  useEffect(() => {
    const loadDevs = async () => {
      const response = await api.get('/devs');
      setDevs(response.data);
    };

    loadDevs();
  }, []);

  const handleAddDev = async e => {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username: githubUsername,
      techs,
      lat,
      lng
    });

    setGithubUsername('');
    setTechs('');

    setDevs(
      [...devs.filter(dev => dev._id !== response.data._id), response.data]
    );
  };

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar Dev</strong>
        <form onSubmit={handleAddDev}>
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
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <li key={dev._id} className="dev-item">
              <header>
                <img
                  src={dev.avatar_url}
                  alt={dev.name}
                />
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a
                href={`https://github.com/${dev.github_username}`}
              >
                Acessar perfil no Github
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
