import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function FacultySignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('address', address);
      formData.append('image', image);

      const response = await axios.post('http://localhost:5000/faculty/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('res: ' + response.data);

      sessionStorage.setItem('email', response.data);
      router.push('/faculty/dashboard');
    } catch (error) {
      console.log('error: ' + error.message);
      setError('Failed to sign up');
    }
  };

  return (
    <div>
      <h2>Faculty Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="faculty-name">Name</label>
          <input
            type="text"
            id="faculty-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="faculty-email">Email</label>
          <input
            type="email"
            id="faculty-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="faculty-password">Password</label>
          <input
            type="password"
            id="faculty-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="faculty-address">Address</label>
          <input
            type="text"
            id="faculty-address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="faculty-image">Image</label>
          <input
            type="file"
            id="faculty-image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Sign Up</button>
        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
      </form>
    </div>
  );
}
