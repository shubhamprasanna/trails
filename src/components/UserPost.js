import React, { Component } from 'react';
import axios from 'axios';
import image1 from './velasbeach.png';
import PropTypes from 'prop-types';

const URL = 'https://trell.co/third-party/tasks/trail.json';

class UserPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            author: [],
            info: [],
            counts: []          
        };
        this.getAPIData = this.getAPIData.bind(this);
    }
    componentDidMount(){
        axios.get(URL)
        .then(res => {
           this.setState({
               posts: res.data.data.posts,
               author: res.data.data.author,
               info: res.data.data.info,
               counts: res.data.data.info.counts
           });
           var carouselPosts = [];
           this.state.posts.forEach(post => {
               const carouselItems = 
               <div className="carousel-item">
                    <img className="d-block w-100 carousel-image" src={post.imageList.real} />
                    <div className="about-post-location">
                        <span style={{fontSize:'1.2rem', color:'white'}}>
                            <i className="fas fa-map-marker-alt"></i>
                        </span>
                        <span className="location-name white-color">{post.checkInLocation}</span>
                    </div>
                    <div className="save-post">
                        <span className="save white-color">Save</span>
                        <span className="save-icon white-color">
                            <i class="fas fa-bookmark"></i>
                        </span>
                    </div>
                    <div className="share-post">
                        <span className="share white-color">Share Post</span>
                        <span className="share-icon white-color">
                            <i class="fas fa-share"></i>
                        </span>
                    </div>
                    <div className="about-post-details white-color">
                        <p className="about-post-content">{post.about}</p>
                    </div>
               </div>
               carouselPosts.push(carouselItems);
           });
           this.setState({
               authorPosts: carouselPosts
           });
           this.getAPIData();
        });
        
    }
    getAPIData = () => {
        this.props.callback(this.state.info, this.state.posts);
    }

    
   
    render() {
        return(
            <div className="user-card-container">
                <div id="carouselExampleControls" className="carousel slide user-card-carousel" data-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container carousel-container">
                            <img className="d-block w-100 carousel-image" src={image1} />
                            <div className="trail-details">
                                <h1 className="trail-title white-color">{this.state.info.name}</h1>
                                <ul className="trail-figures">
                                    
                                    <li className="trail-figures-list white-color"> {this.state.counts.posts} posts</li>
                                    <li className="trail-figures-list views-list white-color">{this.state.counts.views} views</li>
                                </ul>
                                <div className="trail-author-details">
                                    <div className="author-details-left">
                                        <small className="trail-by white-color">Trail By</small>
                                        <p className="trail-author-name white-color">{this.state.author.name}</p>
                                    </div>
                                    <div className="author-details-right">
                                        <img src={this.state.author.image} className="trail-author-img" />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {this.state.authorPosts}
                        <div className="carousel-item">
                            <img className="d-block w-100 carousel-image carousel-image-last" src={image1} alt="Lastpage" />
                            <div className="last-page-details">
                                <div className="last-page-likes text-center">
                                    <span style={{color:'red', fontSize:'3rem'}}>
                                        <i className="fas fa-heart"></i>
                                    </span>
                                </div>
                                <p className="total-likes white-color text-center">{this.state.counts.loves} Likes</p>
                                <div className="last-page-comments text-center">
                                    <span style={{fontSize: '3rem'}}>
                                        <i className="far fa-comment"></i>
                                    </span>
                                </div>
                                <p className="total-comments white-color text-center">{this.state.counts.comments} Comments</p>
                                <div className="share-trail text-center">
                                    <h5 className="share-trail-heading white-color text-center">Share Trail video to:</h5>
                                    <div className="row share-trail-social">
                                        <div className="col-md-3">
                                            <div className="share-trail-social-single whatsapp">
                                                <span className="social-icon-wrapper">
                                                    <i className="fab fa-whatsapp"></i>
                                                </span>
                                            </div>
                                            <p className="social-link-name white-color text-center">WhatsApp</p>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="share-trail-social-single instagram">
                                                <span className="social-icon-wrapper">
                                                    <i className="fab fa-instagram"></i>
                                                </span>
                                            </div>
                                            <p className="social-link-name white-color text-center">Instagram</p>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="share-trail-social-single facebook">
                                                <span className="social-icon-wrapper">
                                                    <i className="fab fa-facebook-f"></i>
                                                </span>
                                            </div>
                                            <p className="social-link-name white-color text-center">FaceBook</p>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="share-trail-social-single others">
                                                <span className="social-icon-wrapper">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </span>
                                            </div>
                                            <p className="social-link-name white-color text-center">Others</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="last-page-author-details text-center">
                                    <h5 className="author-details-title white-color">View more trails by:</h5>
                                    <img style={{width:"75px", marginBottom:'1rem'}}src={this.state.author.image} className="trail-author-img" />
                                    <p className="trail-author-name white-color">{this.state.author.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev left-indicator" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next right-indicator" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
</div>
            </div>
        );
    }
}

UserPost.protoTypes = {
    callback: PropTypes.func
}

export default UserPost;