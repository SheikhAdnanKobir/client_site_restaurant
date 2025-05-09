import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthUse } from '../AuthContext/AuthContext';

const Privatecontrol = ({ children }) => {

    const {user,loading}=useContext(AuthUse);

    if(loading){
        return <div className='h-screen w-svw flex flex-col justify-center items-center'>
        <span className="loading loading-infinity loading-xl"></span>
    </div>
    }

    return (
        <div>
            {
                user ? children : <Navigate to="/" />
            }
        </div>
    );
};

export default Privatecontrol;