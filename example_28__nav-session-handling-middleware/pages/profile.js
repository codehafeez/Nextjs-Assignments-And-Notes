import React, { useEffect, useState } from 'react';
import notAuth from '../lib/notAuth';
import { useRouter } from 'next/router';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('userData'));
        setUserData(storedData);
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('isLoggedIn');
        router.push('/login');
    };

    return (
        <div>
            <h1>Profile Page</h1>
            {userData && (
                <div>
                    <strong>Username:</strong> {userData.username}
                </div>
            )}
            {userData && (
                <div>
                    <strong>Email:</strong> {userData.email}
                </div>
            )}

            <br/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default notAuth(Profile);
