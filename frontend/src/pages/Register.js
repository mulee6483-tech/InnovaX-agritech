import React, { useState } from 'react';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name:</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Phone:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    );
};

export default Register;