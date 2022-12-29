import React, { useEffect } from 'react';
import './sidebar.css';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className='sidebar'>
      <ul className="side_menu">
        <li className="side_item">
          <h4 className={location.pathname === '/' ? "step_number active" : "step_number"}>1</h4>
          <div className="step_text">
            <span className="step_subtitle">Step 1</span>
            <h3 className="side_title">Your info</h3>
          </div>
        </li>
        <li className="side_item">
          <h4 className={location.pathname === '/step-two' ? "step_number active" : "step_number"}>2</h4>
          <div className="step_text">
            <span className="step_subtitle">Step 2</span>
            <h3 className="side_title">Select plan</h3>
          </div>
        </li>
        <li className="side_item">
          <h4 className={location.pathname === '/step-three' ? "step_number active" : "step_number"}>3</h4>
          <div className="step_text">
            <span className="step_subtitle">Step 3</span>
            <h3 className="side_title">Add ons</h3>
          </div>
        </li>
        <li className="side_item">
          <h4 className={location.pathname === '/step-four' ? "step_number active" : "step_number"}>4</h4>
          <div className="step_text">
            <span className="step_subtitle">Step 4</span>
            <h3 className="side_title">Summary</h3>
          </div>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar