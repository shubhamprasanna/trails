import React, { Component } from 'react';
import SideView from './SideView';
import UserPost from './UserPost';

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: null,
            data2: null
        }
        this.getData = this.getData.bind(this);
    }
    getData = (param1, param2) => {
        this.setState({
            data1: param1,
            data2: param2
        });
    }
    render() {
        return (
            <div className="main-layout">
                <div className="row main-row">
                    <div className="col-md-8 user-card-col">
                        <UserPost callback={this.getData}/>
                    </div>
                    <div className="col-md-4 side-info-col">
                        <SideView data1={this.state.data1} data2={this.state.data2}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainView;