import React from 'react';
import './Sidebar.scss';

const Sidebar = ({ filteredCategory, handleProduct }) => {
    return (
        <aside className="sidebar">
            {filteredCategory.map((category) => (
                <nav onClick={() => handleProduct(category.id)} key={category.id} className="sidebar__nav">{category.name}</nav>
            ))}
        </aside>
    )
}

export default Sidebar;