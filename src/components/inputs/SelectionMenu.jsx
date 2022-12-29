import React, { useState } from 'react';

const SelectionMenu = ({ option, selection, setSelection, options, setOptions}) => {
  const [active, setActive] = useState(false);
  const handleSelection = () => {
      setActive(!active)
      setSelection({
        id: option.id,
        name: option.name,
        desc: option.desc,
        price: option.price
      });
      setOptions(prev => [...prev, selection])
  }
  return (
    <label 
    onClick={handleSelection}
      className={active ? "option active" : "option"}>
      <input type="checkbox" name="value1" className='checkbox_input'/>
      <span className="checkmark"></span>
      <div className="option_info">
        <h4 className="option_title">{option.name}</h4>
        <p className="option_desc">{option.desc}</p>
      </div>
      <p className="price">{`$${option.price}/mo`}</p>
    </label>
  );
};

export default SelectionMenu;
