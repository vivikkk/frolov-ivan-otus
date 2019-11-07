import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import CitiesList from './components/CitiesList';

import cities from './cities';

class App extends React.Component {
  render() {
    return(
      <main>
        <Header title="Weather APP" />
        <CitiesList cities={cities}/>
      </main>
    )
  }
}

render(<App />, document.getElementById('root'));
