import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const UserProfile = (props) => {

    const image = props.userProfile.photoURL;

    return (
        <div className='content-container'>
            <div className='user'>
                My Profile
                <p>{props.userProfile.email}</p>
                <img src='https://img01.ztat.net/article/spp-media-p1/49d72720031d4ae19d478266c60dacb9/7e1943734124418382a7a6928ff7bd2d.jpg?imwidth=156' />
                <img src={image}/>
                
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    userProfile: state.authentication
});

export default connect(mapStateToProps)(UserProfile);