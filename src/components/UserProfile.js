import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const UserProfile = (props) => {
    return (
        <div>
            MyProfile Page
        </div>
    );
}

const mapStateToProps = (state) => ({
    userProfile: state.authentication
});

export default connect(mapStateToProps)(UserProfile);