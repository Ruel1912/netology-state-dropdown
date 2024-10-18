import { useState } from 'react';

const Dropdown = () => {
  const dropdownItems = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];
  const [selectedItem, setSelectedItem] = useState('Profile Information');
  const [isOpenDropdown, setIsOpenDropdown] = useState(true);

  return (
    <div className={`dropdown-wrapper ${isOpenDropdown ? 'open' : ''}`}>
      <button className="btn" onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <ul className="dropdown">
        {dropdownItems.map((dropdownItem, index) => (
          <li
            key={`di-${index}`}
            className={`dropdown-item ${selectedItem === dropdownItem ? 'active' : ''}`}
          >
            <a href="#" onClick={() => setSelectedItem(dropdownItem)}>{dropdownItem}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown