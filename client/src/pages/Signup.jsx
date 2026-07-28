import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Backend ke register route par request bhej rahe hain (Sahi endpoint ke sath)
      const response = await axios.post('https://online-food-ordering-system-1-awcy.onrender.com/api/auth/register', {
        name,
        email,
        password
      });
      console.log('Success:', response.data);
      alert('Registration Successful! Please Login.');
      navigate('/login'); 
    } catch (error) {
      console.error('Registration Error Details:', error);
      const errorMsg = error.response?.data?.message || error.message || 'Unknown error';
      alert(`Registration Failed: ${errorMsg}`);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#111', color: '#fff' }}>
      <form onSubmit={handleRegister} style={{ background: '#222', padding: '30px', borderRadius: '10px', width: '300px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', background: 'green', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          Sign Up
        </button>

        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
          Already have an account? <Link to="/login" style={{ color: '#4da6ff' }}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;