import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StepFive from '../stepfive/StepFive';
import './stepfour.css';

const StepFour = () => {
  const [confirm, setConfirm] = useState(false);
  const handleConfirm = () => {
    setConfirm(true);
  }
  return (
    <section className='section'>
      {
        confirm ? 
        <StepFive/>
        :
        <React.Fragment>
          <h1 className="title">Finishing Up</h1>
          <p className="subtitle">Double-check everything looks OK before confirming.</p>
          <div className="subscription">
            <div className="subscription_top">
              <div>
                <h5 className="subscription_title">Arcade(Monthly)</h5>
                <Link to='/step-two' className='change_plan'>Change</Link>
              </div>
              <h5 className="subscription_price">$9/mo</h5>
            </div>

            <div className="subscription_details">
              <div className="extra_services">
                <span className='extra_name'>Online service</span>
                <span className="extra_price">+$1/mo</span>
              </div>
              <div className="extra_services">
                <span className='extra_name'>Larger Storage</span>
                <span className="extra_price">+$2/mo</span>
              </div>
            </div>
          </div>
          <div className="total">
            <p>Total (per month)</p>
            <h3 className="title">+$12/mo</h3>
          </div>
          <div className="section_footer">
            <Link to='/step-two' className="prev_btn btn">Go Back</Link>
            <button 
              className="next_btn btn"
              type="submit"
              onClick={handleConfirm}
            >
                Confirm
            </button>
          </div>
        </React.Fragment>
      }

    </section>
  )
}

export default StepFour