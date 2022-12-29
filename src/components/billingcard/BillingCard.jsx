import React, { useState } from 'react';
import './Billingcard.css';

const BillingCard = ({card, active, setActive}) => {
  const [plan, setPlan] = useState({
    id: null,
    title: "",
    price: 0,
    features: ""
  });

  const handlePlan = (e) => {
    setPlan({
      id: card.id,
      title: card.name,
      price: card.price,
      features: card.extra,
    });
    setActive(card.id)
  }


  return (
    <div className={active === card.id ? 'billing_card active' : 'billing_card'} onClick={handlePlan}>
      <img src={card.img} alt="" />
      <div className="card_details">
        <h4 className="card_title">{card.name}</h4>
        <p className="price">{`$${card.price}/mo`}</p>
        <span className="extra_features">{card.extra}</span>
      </div>
    </div>
  )
}

export default BillingCard