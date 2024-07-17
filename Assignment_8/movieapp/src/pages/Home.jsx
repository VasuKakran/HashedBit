import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/search',{ state: { name : formData } });
  }

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div className='search'>
    <h1>MOVIE TICKET BOOKING</h1>
    <form onSubmit={handleSubmit}>
      <input id="my-input" type="text" name="myInput" onChange={handleInputChange} />

      <button type="submit">Search</button>
    </form>
    </div>
  );
}