import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import Section from '../Section/Section';
import './Home.scss';

const Home = () => {
    const { filteredCategory } = useContext(ProductContext);
    return (
        <main className="home-container">
            {filteredCategory.map((category) => 
                <Section key={category.id} id={category.id} url={category.imageUrl} heading={category.name} text={category.description} button={category.key} order={category.order}
            />)}
        </main>
    )
}

export default Home;