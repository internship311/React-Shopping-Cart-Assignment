import React, { useContext } from 'react';
import useProducts from '../../utils/useProducts';
import Carousel from '../Carousel/Carousel';
import { ProductContext } from '../../contexts/ProductContext';
import Section from '../Section/Section';
import './Home.scss';

const Home = () => {
    const { filteredCategory, handleProduct } = useContext(ProductContext);
    //const { filteredCategory, handleProduct } = useProducts();
    return (
        <main className="home-container">
      <Carousel />
      {filteredCategory.map((category, index) => (
        <Section
          key={index}
          id={category.id}
          url={category.imageUrl}
          heading={category.name}
          text={category.description}
          button={category.key}
          order={category.order}
          handleProduct= {handleProduct}
        />
      ))}
    </main>
    )
}

export default Home;