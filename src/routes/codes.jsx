import React, { useState } from 'react';
import { MainContainer } from '../components/MainContainer';
import { NavBar } from '../components/NavBar';
import gh from '../assets/gh.png';
import groups from '../assets/groups.png';
import lemontree from '../assets/lemontree.png';
import digital_ocean from '../assets/digital_ocean.png';

export default function Codes() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@fridaestefania.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <NavBar />
      <MainContainer color={'#ecebe7'}>
        <div className='main-content-wrapper'>
          <div className='tech-hub-header'>
            <img src={gh} alt='github' height={50} />
            <img src={groups} alt='groups' height={50} />
            <img src={lemontree} alt='lemontree' height={50} />
            <img src={digital_ocean} alt='digital_ocean' height={50} />
          </div>
          <div className='tech-hub-content'>
            <div className='tech-hub-info'>
              <h4>
                Welcome! My name is Frida and I am a software engineer. I am currently working on this page to share my coding journey with you.
                I've been coding for over 5 years and I am excited to share my knowledge with you.
                The logos you see flying above have been some of the companies I have previously taken on as clients.
                My goal is to provide you with resources and tools to help you succeed in whatever stage your small business or startup is in.
                My expertise can help take your ideas to the next level.
              </h4>
              <h4>
                Due to availability, I am currently only providing the following services:
              </h4>
              <ul>
                <li>Personal/ Small Business Website development</li>
                <li>Personal/ Small Business Mobile applications</li>
                <li>Tech savvy guidance</li>
                <li>Career Mentorship</li>
              </ul>
            </div>
            <div className='tech-hub-contact-form'>
              <h4>Contact Me</h4>
              <form className='contact-form' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name/Company</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type='submit'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
}
