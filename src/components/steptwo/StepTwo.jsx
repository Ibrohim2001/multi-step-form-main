import React, { useState } from 'react';
import BillingCard from '../billingcard/BillingCard';
import './steptwo.css';
import MonthlyIconOne from '../../assets/images/icon-arcade.svg';
import MonthlyIconTwo from '../../assets/images/icon-advanced.svg';
import MonthlyIconThree from '../../assets/images/icon-pro.svg';
import { Link, useNavigate } from 'react-router-dom';

const StepTwo = () => {
  
  const [planType, setPlanType] = useState(false);
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handlePlanType = () => setPlanType(!planType);
  

  const monthly = [
    {
      id: 1,
      name: 'Arcade',
      price: 9,
      img: MonthlyIconOne
    },
    {
      id: 2,
      name: 'Advanced',
      price: 12,
      img: MonthlyIconTwo
    },
    {
      id: 3,
      name: 'Pro',
      price: 15,
      img: MonthlyIconThree
    }
  ];
  const yearly = [
    {
      id: 1,
      name: 'Arcade',
      price: 90,
      img: MonthlyIconOne,
      extra: '2 month free'
    },
    {
      id: 2,
      name: 'Advanced',
      price: 120,
      img: MonthlyIconTwo,
      extra: '2 month free'
    },
    {
      id: 3,
      name: 'Pro',
      price: 150,
      img: MonthlyIconThree,
      extra: '2 month free'
    }
  ];

  const [plan, setPlan] = useState({
    id: null,
    title: "",
    price: 0,
    features: ""
  });

  return (
    <section className='section'>
      <h1 className="title">Select your plan</h1>
      <p className="subtitle">You have the option of monthly or yearly billing</p>
      <div className="card_container">
          {
            planType ? 
            yearly &&
              yearly.map((card) => (
                <div 
                key={card.id}
                  className={active === card.id ? 'billing_card active' : 'billing_card'} 
                  onClick={() => {
                    setPlan({
                      id: card.id,
                      title: card.name,
                      price: card.price,
                      features: card.extra,
                    });
                    setActive(card.id);
                    setError(false);
                  }}>
                  <img src={card.img} alt="" />
                  <div className="card_details">
                    <h4 className="card_title">{card.name}</h4>
                    <p className="price">{`$${card.price}/mo`}</p>
                    <span className="extra_features">{card.extra}</span>
                  </div>
                </div>
              ))
             :
            monthly &&
              monthly.map((card) => (
                <div 
                  key={card.id}
                  className={active === card.id ? 'billing_card active' : 'billing_card'} 
                  onClick={() => {
                    setPlan({
                      id: card.id,
                      title: card.name,
                      price: card.price,
                      features: card.extra,
                    });
                    setActive(card.id);
                    setError(false)
                  }}>
                  <img src={card.img} alt="" />
                  <div className="card_details">
                    <h4 className="card_title">{card.name}</h4>
                    <p className="price">{`$${card.price}/mo`}</p>
                    <span className="extra_features">{card.extra}</span>
                  </div>
                </div>
              ))
          }
      </div>
      {/* <div className="card_container">
          {
            planType ? 
            yearly &&
              yearly.map((card, index) => (
                <BillingCard 
                  card={card} 
                  key={index} 
                  setActive={setActive}
                  active={active}
                />
              ))
             :
            monthly &&
              monthly.map((card, index) => (
                <BillingCard 
                  card={card} 
                  key={index} 
                  setActive={setActive}
                  active={active}
                />
              ))
          }
      </div> */}
      <div className="plan_type_switch">
        <p>Monthly</p>
        <div className="toggle" onClick={handlePlanType}>
          <div className={planType ? "toggle_indicator click" : "toggle_indicator"}></div>
        </div>
        <p>Yearly</p>
      </div>

      <div className="section_footer">
        <Link to='/' className="prev_btn btn">Go Back</Link>
        <span className="error_msg">{error ? "Please select a plan" : ""}</span>
        <button 
            className="next_btn btn"
            type="submit"
            onClick={() => {
              if(!plan.id) setError(true)
              if(plan.id)  navigate('/step-three');
            }}
          >
            Next Step
        </button>
      </div>
    </section>
  )
}

export default StepTwo