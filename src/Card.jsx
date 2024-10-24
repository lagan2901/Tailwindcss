import React from 'react';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';


const ProductCard = ({ image, title, price, description }) => {
  return (
  
    <div className="max-w-lg w-full bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:ring-4 hover:ring-green-300 hover:ring-opacity-50 flex flex-col">
      <img className="w-full h-64 object-cover" src={image} alt={title} />  
      <div className=" bg-green-100 p-6 flex flex-col justify-between h-full">  
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>  
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">${price}</span> 
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


const Card = () => {
 
  const products = [
    {
      image: img2,
      title: 'Bag combo',
      price: '29.99',
      description: 'This elegant leather tote bag is the perfect combination of style and functionality. Crafted from high-quality, durable leather, it offers a spacious interior that can easily accommodate all your essentials, including a laptop, books, or even a change of clothes. The soft yet structured design ensures it retains its shape over time, making it a reliable accessory for work, travel, or casual outings. ',
    },
    {
      image: img3,
      title: 'Leather Tote Bag',
      price: '49.99',
      description: 'Compact yet stylish, this quilted crossbody bag is ideal for those on the go. Featuring a chic quilted pattern and gold-tone hardware, this bag adds a touch of sophistication to any outfit. Despite its compact size, the bag is spacious enough to carry your phone, wallet, and a few other essentials, making it perfect for day trips or evening events. The adjustable strap offers versatility.',
    },
    {
      image: img4,
      title: 'Handbag',
      price: '19.99',
      description: 'This satchel made from premium vegan leather combines sustainability with modern fashion. It boasts a roomy interior with multiple compartments, perfect for keeping your belongings organized and within reach. The sleek design features polished metal accents, giving it a sophisticated edge. It includes both short handles and a detachable shoulder strap, allowing you to switch style.',
    },
  ];

  return (
    <>
    <div class="text-center ">
      <h1 class="text-4xl font-bold bg-green-800 text-white">OUR PRODUCTS</h1>
    </div>
    <div className="min-h-screen bg-green-800 flex flex-col items-center justify-center p-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
    </>
  );
};

export default Card;