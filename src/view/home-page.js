import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import Axios from 'axios';
import config from '../../config/config'
const logo = require('../images/logo.jpeg');

class HomePage extends Component{

    componentDidMount(){
        console.log(this.context);
        console.log(process.env.NODE_ENV);
        console.log(config);
    }

    textUrl = () => {
        Axios.get('/Home/misc/banners?channelname=huawei&age=-1&userid=0').then(res => {
            alert(JSON.stringify(res));
        })
    }

    goToDetail = () => {
        this.context.router.history.push({pathname:'/company/:id'.replace(':id','121212121212'),state:{dd:'hello'},zidngyi:'hhehehe'});
    }

    render(){
        return (
            <div>
                <Button onClick={this.goToDetail}>go antd</Button>
                <Button onClick={this.textUrl}>http request</Button>
                <img onClick={this.goToDetail} src={logo}/>
            </div>
        )
    }
}

HomePage.contextTypes = {
    router: PropTypes.object
};

export default HomePage;