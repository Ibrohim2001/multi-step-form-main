import React from 'react';
import Img from '../../assets/images/icon-thank-you.svg';
import './stepfive.css';

const StepFive = () => {
  return (
    <section className='section'>
      <img src={Img} alt="" className='thank_img'/>
      <h1 className="title">Thank you!</h1>
      <p className="subtitle">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </section>
  )
}

export default StepFive