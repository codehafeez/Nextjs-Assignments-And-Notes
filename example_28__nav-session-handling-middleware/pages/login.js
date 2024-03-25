"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import withAuth from '../lib/withAuth';

const Login = () => {
    const [formData, setFormData] = useState({
        username: 'admin',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email === 'admin@gmail.com' && formData.password === '123') {
            sessionStorage.setItem('userData', JSON.stringify(formData));
            sessionStorage.setItem('isLoggedIn', 'true');
            router.push('/profile');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div>
        <h1>Login Page</h1>
        {error && <div style={{ color: 'red' }}>{error}</div>}
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
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>

        <br />
        <Link href="/register">Go to Register</Link>
    </div>
);
};

export default withAuth(Login);
