import React from 'react';
import { connect } from 'react-redux';


const UserProfile = (props) => {

    

    return (
        <div className='content-container'>
            <div className='user'>
                My Profile
                <p>{props.userProfile.email}</p>
                <p>{props.userProfile.uid}</p>
                <p>{props.userProfile.displayName}</p>
                <img src={props.userProfile.photoURL} />  
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    userProfile: state.authentication
});

export default connect(mapStateToProps)(UserProfile);