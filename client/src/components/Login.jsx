import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 1. Ye import kiya

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // 2. Navigate initialize kiya

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Backend login route
      const res = await axios.post('https://online-food-ordering-system-1-awcy.onrender.com', { email, password });
      
      // Token save kiya
      localStorage.setItem('token', res.data.token);
      
      alert('🎉 Login Successful!');
      
      // 3. 🚀 Page reload karne ke bajaye ab direct Home page ("/") par bhej dega
      navigate('/'); 
      
    } catch (err) {
      alert(err.response?.data?.error || 'Login Failed! Email ya Password galat hai.');
    }
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center', maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px', marginTop: '50px' }}>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin} style={{ textAlign: 'left' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email Address</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}>Login</button>
      </form>
    </div>
  );
}