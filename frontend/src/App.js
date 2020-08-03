import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);
  useEffect(() => {
    const loadDevs = async () => {
      const response = await api.get('/devs');
      setDevs(response.data);
    };

    loadDevs();
  }, []);

  const handleAddDev = async data => {
    const response = await api.post('/devs', data);
    
    setDevs(
      [...devs.filter(dev => dev._id !== response.data._id), response.data]
    );
  };

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar Dev</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => <DevItem key={dev._id} dev={dev} />)}
        </ul>
      </main>
    </div>
  );
};

export default App;
