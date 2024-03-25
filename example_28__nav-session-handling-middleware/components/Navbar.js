"use client"
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/forgot-password">Forgot Password</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
