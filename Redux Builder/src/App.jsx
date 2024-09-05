import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import {store} from './Redux/Store';
import Counter from './component/Counter';
import Theme from './component/Theme';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Theme />
                <Counter />
            </div>
        </Provider>
    );
};

export default App;