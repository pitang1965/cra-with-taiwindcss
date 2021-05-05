import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch } from '@headlessui/react';

function App() {
  const [useTailwind, setUseTaiwind] = useState(true);

  return (
    <>
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label passive className="m-2">Tailwind CSSを使用する</Switch.Label>
        <Switch
          checked={useTailwind}
          onChange={setUseTaiwind}
          className={`${
            useTailwind ? "bg-green-500" : "bg-gray-500"
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none m-2`}
        >
          <span
            className={`${
              useTailwind ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>

      {useTailwind ? (
        // Tailswind CSS (index.css 及び tailwind.config.js)を使用
        <div className='text-center'>
          <header className='header-font-size bg-cra min-h-screen flex flex-col items-center justify-center text-white'>
            <img
              src={logo}
              className='logo-height animate-spinSlow pointer-events-none'
              alt='logo'
            />
            <p>
              <code>index.css</code> 及び <code>tailwind.config.js</code> を使用
            </p>
            <a
              className='text-reactBlue'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Tailwind CSSを使用しています
            </a>
          </header>
        </div>
      ) : (
        // src\App.css を使用
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              <code>src\App.css</code> を使用
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Tailwind CSSを使用していません
            </a>
          </header>
        </div>
      )}
    </>
  );
}

export default App;
