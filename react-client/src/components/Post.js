import React from 'react';
import './Post.css';

function Post() {
    return (
        <section className="card">
            <div className="header">
                <h3>
                    Imaginary Friend
                </h3>
                <button
                    className="buttons"
                    aria-label="More options">
                    <i className="fas fa-ellipsis-h"></i>
                </button>
            </div>

            <img src="https://placedog.net/500?random" alt="random dog pic"/>

            <div className="info">
                <div className="buttons">
                    <div>
                        <button 
                            className="like">
                            <i className="fas fa-heart"></i>
                        </button>
                        
                        <button 
                            className="to_comment"
                            aria-label="Comment">
                            <i className="far fa-comment"></i>
                        </button>

                        <button 
                            className="share"
                            aria-label="Share Post" >
                            <i className="far fa-paper-plane"></i>
                        </button>
                    </div>
                    <div>
                        <button
                            className="bookmark"
                            aria-label="Bookmark Button" >
                            <i className="far fa-bookmark"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <p className="likes">
                <strong>
                    2 likes
                </strong>
            </p>

            <div className="caption">
                <p>
                    <strong> Another Friend </strong>
                    This is my doggo.
                </p>
                <p className="timestamp">
                    11/15/2022
                </p>
            </div>
        </section>
    )
}

export default Post;