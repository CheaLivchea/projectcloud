import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "http://3.214.91.27:1337/api/products?populate=image";

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
    <div className="max-w-6xl mx-auto px-6 py-10 ">
      <h1 className="text-3xl text-center font-bold mb-8">Top Selling Products</h1>
      {products.length === 0 ? (
        <p className="text-gray-700 bg-white p-4 rounded">No products available.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            // Support both flat and standard Strapi structures
            const productData = product.attributes || product;
            const { id, name, price, rating, image } = productData;
            const imageUrl = image?.url
              ? `http://3.214.91.27:1337${image.url}`
              : image?.data?.attributes?.url
                ? `http://3.214.91.27:1337${image.data.attributes.url}`
                : "https://via.placeholder.com/300x200?text=No+Image";

            return (
              <li
                key={id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white"
              >
                <Link
                  to={`/product/${id}`}
                  className="w-full bg-white  border-gray-200 rounded-xl shadow-sm p-6 "
                  aria-label={`View details for ${name || "product"}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded mb-4">
                    <img
                      src={imageUrl}
                      alt={name || "Product"}
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x200?text=Image+Failed";
                        console.error(`Failed to load image for ${name}: ${imageUrl}`);
                      }}
                      onLoad={() =>
                        console.log(`Successfully loaded image for ${name}: ${imageUrl}`)
                      }
                    />
                    {!image?.url && !image?.data?.attributes?.url && (
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