import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';

import PackageJsonProvider from './components/Contexts/PackageJsonProvider';
import { Bar } from './components/Bar';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []);

  return (
    <PackageJsonProvider>
      <Bar />
      <div id="layout" className="relative py-8 bg-gray-100 dark:bg-gray-800 h-screen overflow-y-auto">
        <div className="flex justify-center flex-col items-center">
          <div className="absolute bg-primary dark:bg-white top-0 left-0 h-72 w-full"></div>
          <Header />
          <MainContent />
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            margin: '300px',
          },
        }}
      />
    </PackageJsonProvider>
  );
};

function render() {
  ReactDOM.render(<App />, document.querySelector('#app'));
}

render();
