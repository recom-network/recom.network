import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '@styles/index';
import { App } from '@/App';
import store from '@storage/store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));