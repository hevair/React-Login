
import './App.scss';
import userIcon from './assets/img/user.svg'
import passIcon from './assets/img/key.svg'

function App() {
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

            <form>
              <div className="input-group">
                <img src={userIcon} alt="" />
                <input type="text" name="email" placeholder="Email" id="email" />
              </div>
              <div className="input-group">
                <img src={passIcon} alt="" />
                <input type="Password" name="password" placeholder="Password" id="pwd" />
              </div>
              <button className={'btn-submit'} type={'submit'}>Login</button>
              <button className={'btn-forgot'} type={'submit'}>Forgot Password</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
