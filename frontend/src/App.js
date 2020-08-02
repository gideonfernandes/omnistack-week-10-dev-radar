import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar Dev</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input type="text" name="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="lat">Latitude</label>
              <input type="text" name="lat" required />
            </div>
            <div className="input-block">
              <label htmlFor="lng">Longitude</label>
              <input type="text" name="lng" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/62628971?s=460&u=036a1db7ec264e09b40c15e441a2d684bc6fcc60&v=4"
                alt="Gideon Fernandes"
              />
              <div className="user-info">
                <strong>Gideon Fernandes</strong>
                <span>NodeJS, ReactJS, React Native</span>
              </div>
            </header>
            <p>I'm a Full Stack Web and Mobile developer with a focus on NodeJS, React and React Native technologies, willing to learn and face new challenges!</p>
            <a href="https://github.com/gideonfernandes">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/62628971?s=460&u=036a1db7ec264e09b40c15e441a2d684bc6fcc60&v=4"
                alt="Gideon Fernandes"
              />
              <div className="user-info">
                <strong>Gideon Fernandes</strong>
                <span>NodeJS, ReactJS, React Native</span>
              </div>
            </header>
            <p>I'm a Full Stack Web and Mobile developer with a focus on NodeJS, React and React Native technologies, willing to learn and face new challenges!</p>
            <a href="https://github.com/gideonfernandes">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/62628971?s=460&u=036a1db7ec264e09b40c15e441a2d684bc6fcc60&v=4"
                alt="Gideon Fernandes"
              />
              <div className="user-info">
                <strong>Gideon Fernandes</strong>
                <span>NodeJS, ReactJS, React Native</span>
              </div>
            </header>
            <p>I'm a Full Stack Web and Mobile developer with a focus on NodeJS, React and React Native technologies, willing to learn and face new challenges!</p>
            <a href="https://github.com/gideonfernandes">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/62628971?s=460&u=036a1db7ec264e09b40c15e441a2d684bc6fcc60&v=4"
                alt="Gideon Fernandes"
              />
              <div className="user-info">
                <strong>Gideon Fernandes</strong>
                <span>NodeJS, ReactJS, React Native</span>
              </div>
            </header>
            <p>I'm a Full Stack Web and Mobile developer with a focus on NodeJS, React and React Native technologies, willing to learn and face new challenges!</p>
            <a href="https://github.com/gideonfernandes">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default App;
