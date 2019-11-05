import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './test';
import './styles/main.css';
import todos from './todos';

render(<App initialData={todos} title="TO DO APP" />, document.getElementById('root'));
