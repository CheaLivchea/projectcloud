import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "https://projectesting.site/api/products?populate=image"; // updated API URL

    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Full API response (TopSelling):", JSON.stringify(data, null, 2));
        setProducts(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(`Failed to load products: ${error.message}. Please try again later.`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10 flex justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10 text-red-500 bg-gray-100 p-4 rounded">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl text-center font-bold mb-8">Top Selling Products</h1>
      {products.length === 0 ? (
        <p className="text-gray-700 bg-white p-4 rounded">No products available.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            // Support both flat and standard Strapi structures
            const productData = product.attributes || product;
            const { id, name, price, rating, image } = productData;

            // Updated image URL construction
            const imageUrl = image?.url
              ? image.url.startsWith('http') // Check if the URL already has the full path
                ? image.url // Use the full URL as it is
                : `https://projectesting.site${image.url}` // Prepend the domain if it's a relative path
              : "https://via.placeholder.com/300x200?text=No+Image"; // Fallback to placeholder

            return (
              <li
                key={id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white"
              >
                <Link
                  to={`/product/${id}`}
                  className="w-full bg-gray border-gray-200 rounded-xl shadow-sm p-6"
                  aria-label={`View details for ${name || "product"}`}
                >
                  <div className="w-full h-[200px] flex justify-center items-center bg-white rounded mb-4 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={name || "Product"}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x200?text=Image+Failed";
                        console.error(`Failed to load image for ${name}: ${imageUrl}`);
                      }}
                      onLoad={() =>
                        console.log(`Successfully loaded image for ${name}: ${imageUrl}`)
                      }
                    />
                    {!image?.url && (
                      <span className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white px-1 rounded">
                        Image not available
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-semibold">{name || "Unnamed Product"}</h2>
                  <p className="text-gray-700">Price: ${price || "N/A"}</p>
                  <p className="text-gray-600">Rating: {rating ? `${rating}/5` : "No rating"}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Shop;
