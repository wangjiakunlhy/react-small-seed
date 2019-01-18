import React,{ Component } from 'react';
import PropTypes from 'prop-types';


class HomePage extends Component{

    componentDidMount(){
        console.log(this.context);
    }

    goToDetail = () => {
        this.context.router.history.push({pathname:'/company/:id'.replace(':id','121212121212'),state:{dd:'hello'},zidngyi:'hhehehe'});
    }

    render(){
        return (
            <div>
                Hello,React!
                <button onClick={this.goToDetail}>go</button>
            </div>
        )
    }
}

HomePage.contextTypes = {
    router: PropTypes.object
};

export default HomePage;