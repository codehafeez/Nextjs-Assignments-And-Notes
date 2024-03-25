"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import withAuth from '../lib/withAuth';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: ''
    });
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
        console.log(formData);
    };

    return (
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
);
};

export default withAuth(ForgotPassword);
