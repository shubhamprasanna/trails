import React, { Component } from 'react';
import SideviewRow from './SideviewRow';

class SideView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            images: [],
            col: null
        }
    }
    render() {
        const data1 = this.props.data1;
        const data2 = this.props.data2;
        if(data1 != null) {
            var counts = data1.counts;
        }
        if(data2 != null) {
            var img = [];
            data2.forEach(post => {
                img = post.imageList
                this.state.images.push(img);
            });
            var suggested = [];
            this.state.images.forEach(image => {
                suggested = image.real
                this.state.info.push(suggested);
            })
        }
        return (
            <div className="side-view">
                <hr className="border-color"></hr>
                <SideviewRow sideInfo = {counts}/>
                <hr className="border-color"></hr>
                <div className="suggested-trails">
                    <div className="card-columns">
                        <div className="card suggested">
                            <img className="card-img suggested-card" src={this.state.info[0]} />
                        </div>
                        <div className="card suggested">
                            <img src={this.state.info[1]} className="card-img suggested-card" />
                        </div>
                        <div className="card suggested">
                            <img src={this.state.info[2]} className="card-img suggested-card" />
                        </div>
                        <div className="card suggested">
                            <img src={this.state.info[3]} className="card-img suggested-card" />
                        </div>
                        <div className="card suggested">
                            <img src={this.state.info[4]} className="card-img suggested-card" />
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        );
    }
}

export default SideView;