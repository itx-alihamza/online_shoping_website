import React, { useState } from 'react';
import './SideNavModal.css'; // Import CSS for styling and animations

const SideNavModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal} className="open-btn">
        Toggle Side Nav
      </button>
      <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={toggleModal}></div>
      <div className={`side-nav ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleModal}>
          Close
        </button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavModal;
