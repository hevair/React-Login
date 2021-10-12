
import React, { useState } from 'react'
import './App.scss';
import userIcon from './assets/img/user.svg'
import passIcon from './assets/img/key.svg'
import api from './service/api'

function App() {

  const [user, setUser] = useState('')
  const [password, setPassWord] = useState('')

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const result = await api.post('login', { user, password })
      // console.log(await api.post('login', { user, password }))
    } catch (e) {
      alert('Falha no login, tente novamente.')
    }

  }
  return (
    <div className="App">
      <div className="content">
        <aside>
          <div className="aside-login">
            <h2>Welcome</h2>
            <p>Enter your Password to continues</p>
          </div>

        </aside>
        <main>
          <div className="login">
            <h2>Sign In</h2>
            <h3>Acess to Portal</h3>

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <img src={userIcon} alt="" />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="email"
                  onChange={e => setUser(e.target.value)}
                  value={user}
                />
              </div>
              <div className="input-group">
                <img src={passIcon} alt="" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="pwd"
                  onChange={e => setPassWord(e.target.value)}
                  value={password}
                />
              </div>
              <button className={'btn-submit'} type='submit'>Login</button>
              <button className={'btn-forgot'} type='submit'>Forgot Password</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
