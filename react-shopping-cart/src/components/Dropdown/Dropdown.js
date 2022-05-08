import React, { useState } from 'react';
import './Dropdown.scss';
import Button from '../Button/Button';

const Dropdown = ({ filteredCategory, handleProduct }) => {
    const [isActive, setIsActive] = useState(true);

    const handleDropdown = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="dropdown">
          <Button onClick={() => handleDropdown()} className="dropdown__button">
        <span>All Products</span>
        <span>&#x25BC;</span>
      </Button>
          <ul className="dropdown__content">
            {filteredCategory.map((category) => (
              <li
                onClick={() => {
                  handleDropdown();
                  handleProduct(category.id);
                }}
                key={category.id}
                className={`${
                  isActive
                    ? "dropdown__content__list"
                    : "dropdown__content__list show"
                }`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Dropdown;