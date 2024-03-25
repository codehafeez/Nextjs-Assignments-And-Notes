import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
const withAuth = (WrappedComponent) => {

    const Auth = (props) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const isLoggedIn = sessionStorage.getItem('isLoggedIn');
            if (isLoggedIn) {
                router.push('/profile');
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

export default withAuth;
