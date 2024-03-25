import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

const notAuth = (WrappedComponent) => {
    const Auth = (props) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const isLoggedIn = sessionStorage.getItem('isLoggedIn');
            if (!isLoggedIn) {
                router.push('/login');
            } else {
                setLoading(false);
            }
        }, []);

        return (
            <div>
                {loading ? <Loader /> : <WrappedComponent {...props} />}
            </div>
        );
    };

    return Auth;
};

export default notAuth;
