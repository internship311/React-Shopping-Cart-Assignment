import React from 'react';
import Section from '../Section/Section';
import './Home.scss';
import Categories from '../../index.get.json';

const Home = () => {
    Categories.sort((a, b) => {
        return a.order - b.order;
    });

    const filteredCategory = Categories.filter(category => category.enabled);

    return (
        <main className="home-container">
            {filteredCategory.map((category) => 
                <Section key={category.id} url={category.imageUrl} heading={category.name} text={category.description} button={category.key} order={category.order}
            />)}
        </main>
    )
}

export default Home;