import React, { Component } from 'react';

class SideviewRow extends Component {
    render() {
        const sideInfoCounts = this.props.sideInfo;
        if(sideInfoCounts != null) {
            var likes = sideInfoCounts.loves;
            var views = sideInfoCounts.views;
            var comments = sideInfoCounts.comments; 
        }
        return(
            <div className="side-layout">
            <div className="row side-row-single">
                <div className="col-md-3 side-row-icon text-center white-color">
                    <div className="side-row-icons facebook" style={{borderRadius:'50%'}}>
                        <span>
                            <i class="fab fa-facebook-f"></i>
                        </span>
                    </div>
                    <div className="side-row-icons twitter" style={{borderRadius:'50%'}}>
                        <span>
                            <i class="fab fa-twitter"></i>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 side-row-text white-color">
                Share Trail
                </div>
                <div className="col-md-3 side-row-figures text-center white-color">
                </div>
            </div>
            <hr className="border-color"></hr>
            <div className="row side-row-single">
                <div className="col-md-3 side-row-icon text-center white-color">
                    <div className="side-row-icons">
                        <span className="side-social-icons" style={{color:'red'}}>
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 side-row-text white-color">
                Like
                </div>
                <div className="col-md-3 side-row-figures text-center white-color">
                {likes}
                </div>
            </div>
            <hr className="border-color"></hr>
            <div className="row side-row-single">
                <div className="col-md-3 side-row-icon text-center white-color">
                    <div className="side-row-icons">
                        <span className="side-social-icons">
                            <i className="far fa-comment"></i>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 side-row-text white-color">
                Comments
                </div>
                <div className="col-md-3 side-row-figures text-center white-color">
                {comments}
                </div>
            </div>
            <hr className="border-color"></hr>
            <div className="row side-row-single">
                <div className="col-md-3 side-row-icon text-center white-color">
                    <div className="side-row-icons">
                        <span className="side-social-icons">
                            <i class="far fa-eye"></i>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 side-row-text white-color">
                Views
                </div>
                <div className="col-md-3 side-row-figures text-center white-color">
                {views}
                </div>
            </div>
            </div>
        );
    }
}

export default SideviewRow;