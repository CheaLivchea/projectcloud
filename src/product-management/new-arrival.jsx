import React from "react";
import { Link } from "react-router-dom";
import tshirtImage from "/src/assets/tsirt.png";
import skirtImage from "/src/assets/skirt.png";
import jeanImage from "/src/assets/jean.png";
import jacketImage from "/src/assets/jacket.png";

function newArrival() {
  const products = [
    {
      id: 1,
      name: "Classic Cotton Crewneck T-Shirt",
      price: "$5",
      image: tshirtImage,
    
      detail: "Stay comfortable and stylish with our classic crewneck T-shirt, made from 100% soft breathable cotton. Perfect for everyday wear, layering, or a casual day out. Available in multiple colors and sizes.",
    },
    {
      id: 2,
      name: "High-Waisted A-Line Skirt",
      price: "$15",
      image: skirtImage,
  
      detail: "Elevate your look with this high-waisted A-line skirt featuring a flattering silhouette and lightweight flowy fabric. Ideal for both casual outings and dressy occasions. Pairs beautifully with blouses or crop tops.",
    },
    {
      id: 3,
      name: "Stretch-Fit Mid-Rise Jeans",
      price: "$14",
      image: jeanImage,
    
      detail: "Your go-to jeans for comfort and fit — these mid-rise stretch denim jeans hug your curves while allowing full mobility. With a timeless wash and classic 5-pocket styling, they’re a wardrobe essential.",
    },
    {
      id: 4,
      name: "Lightweight Zip-Up Jacket",
      price: "$22",
      image: jacketImage,
     
      detail: "Designed for versatility, this zip-up utility jacket features a modern cut, adjustable cuffs, and practical pockets. Ideal for layering in transitional weather or adding a sleek finish to your outfit.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white-100">
      <section className="mx-auto py-8 px-8">
        <h2 className="text-3xl font-bold text-center mb-5">New Arrival</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} state={product} key={product.id}>
              <div
                data-aos="flip-up"
                className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
              >
                <img
                
                 className="w-full h-75 object-cover rounded-xl"
                 src={product.image}
                 alt={product.name}
                
                />
                <h5 className="text-xl font-semibold mt-4">{product.name}</h5>
                <div className="flex items-center my-2">
                  
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default newArrival;
