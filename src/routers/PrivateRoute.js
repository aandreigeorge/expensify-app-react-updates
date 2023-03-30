import React from "react";
import Header from "../components/Header";
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ( {children, isAuthenticated} ) => {
    return isAuthenticated ? (
        <div>
            <Header />
            {children} 
        </div> 
    ) : (
        <Navigate to = '/' />
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authentication.uid
});

export default connect(mapStateToProps)(PrivateRoute);