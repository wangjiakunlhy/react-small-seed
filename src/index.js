import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/createStore';

import Routers from '../src/router/routers';

render(<Provider store={store}>{Routers()}</Provider>,document.getElementById('body'));