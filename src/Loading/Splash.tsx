import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Splash = () => {
  return (
    <>
      <h1 id="splash_title">Reactirator</h1>
      <img src="https://raw.githubusercontent.com/Leopold-V/Reactirator/main/public/icons/png/64x64.png" />
    </>
  );
};

function render() {
  ReactDOM.render(<Splash />, document.querySelector('#splash_screen'));
}

render();
