"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Loader = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>Loading...</h2>
    </div>
);

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: ''
    });
    const [loading, setLoading] = useState(true); // Initially set loading to true
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            router.push('/profile');
        } else {
            setLoading(false); // Set loading to false once session check is done
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            {loading ? ( // Show loader if loading is true
                <Loader />
            ) : (
                <div>
                    <h1>Forgot Password</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <br/>
                        <button type="submit">Reset Password</button>
                    </form>

                    <br/>
                    <Link href="/login">Back to Login</Link>
                </div>
            )}
        </div>
    );
};

export default ForgotPassword;
