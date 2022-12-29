import React, { useState } from 'react';
import './stepthree.css';
import SelectionMenu from '../inputs/SelectionMenu';
import { Link, useNavigate } from 'react-router-dom';

const StepThree = () => {
  const data = [
    {
      id: 1,
      name: "Online Service",
      desc: "Access to multiplayer games",
      price: 1
    },
    {
      id: 2,
      name: "Large Storage",
      desc: "Extra 1TB of cloud save",
      price: 2
    },
    {
      id: 3,
      name: "Customizable profile",
      desc: "Custome theme on your profile",
      price: 2
    },
  ];

  const navigate = useNavigate();
  const [error, setError] = useState(false)
  const [options, setOptions] = useState([]);
  const [selection, setSelection] = useState({
    id: null,
    name: '',
    desc: '',
    price: 0
  });

  return (
    <section className='section'>
      <h1 className="title">Pick add-ons</h1>
      <p className="subtitle">Add-ons help enhance your gaming experience.</p>
      <div className="selection_container">
        {data.map((option) => (
            <SelectionMenu 
              key={option.id} 
              option={option} 
              options={options}
              setOptions={setOptions}
              selection={selection}
              setSelection={setSelection}
            />
          ))}
      </div>
      <div className="section_footer">
        <Link to='/step-two' className="prev_btn btn">Go Back</Link>
        <button 
            className="next_btn btn"
            type="submit"
            onClick={() => {
              if(options.length)  navigate('/step-four');
              if(!options.length) setError(true)
            }}
          >
            Next Step
        </button>
      </div>
      
    </section>
  )
}

export default StepThree