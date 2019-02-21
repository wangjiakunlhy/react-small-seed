import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/createStore';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';


import Routers from '../src/router/routers';
import 'antd/dist/antd.less';

function main(){
    return (
        <LocaleProvider locale={zhCN}>
            <Provider store={store}>{Routers()}</Provider>
        </LocaleProvider>
    )
}

render(main(),document.getElementById('body'));