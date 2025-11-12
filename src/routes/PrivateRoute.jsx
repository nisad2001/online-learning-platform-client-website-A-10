import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} =use(AuthContext);
    if(user){
        return children;
    }

    
};

export default PrivateRoute;