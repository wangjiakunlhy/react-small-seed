import React, { Component } from 'react';


class CompanyDetail extends Component{

    componentWillMount(){
        console.log(this.props);
    }

    render(){

        return (
            <div>
                Company detail!
            </div>
        )
    }
}

export default CompanyDetail;