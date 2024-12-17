import React, { useState } from 'react';
import s from './Footer.module.scss'
import { Link } from 'react-router-dom';
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleJoin = (e) => {
    e.preventDefault();

    const botToken = '7651889112:AAHsQV2wx-ja5Vn5VZU5GLtw2HHQxSW34EE';  
    const chatId = '-4698727851';      
    const message = `New email submitted: ${email}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          setEmail(''); 
        } else {
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.wrapper}>
          <img className={s.svg} src="/round_text.svg" alt="" />
          <form onSubmit={handleJoin}>
            <div className={s.form}>


              <h1>Analogue Community™</h1>
              <h3>Where creatives belong.</h3>



              <div className="email">
                <input 
                required
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <button type="submit">JOIN</button>
              </div>


            </div>
          </form>
        </div>
      </div>

      <footer className={s.real_footer}>
      <div>
         <Link  to={'/'}  ><img  className={s.logo} src="/logo.svg" alt="" /></Link>
            <Link  to={'/'}>WORK</Link>
            <Link  to={'/'}>SERVICES</Link>
            <Link  to={'/studio'}>STUDIO</Link>
            <Link  to={'/'}>SHOP</Link>
      </div>

      <div>
         <p>© 2024 Analogue Ltd. All rights reserved</p>
      </div>
      </footer>


    </div>
  );
};

export default Footer;
