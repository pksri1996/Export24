import React, { useEffect, useState } from "react";
import axios from "axios";




const PRODUCT_SHEET_API = "https://api.sheetbest.com/sheets/4dc720b5-9c72-48a0-8eb7-2ba69b319fb9";
const IMAGES_SHEET_API = "https://api.sheetbest.com/sheets/96929aea-ae08-4e8d-b11c-e62f4bb3e270";


const fetchData = async () => {
  try {
    const [productsRes, imagesRes] = await Promise.all([
      axios.get(PRODUCT_SHEET_API),
      axios.get(IMAGES_SHEET_API),
    ]);

    const products = productsRes.data;
    const images = imagesRes.data;

    
    const combinedData = [];

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const productImages = [];

  for (let j = 0; j < images.length; j++) {
    const image = images[j];
    if (image["Serial"] === product["Serial"]) {
      productImages.push(image.url);
    }
  }
  combinedData.push({
    ...product,
    images: productImages,
  });
}
    return combinedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const ProductCard = ({ product }) => (
  <div className="card">
    <h2>{product.Name}</h2>
    <h3>{product.Category}</h3>
    <p>{product.Description}</p>
    <div className="images">
      {product.images.map((url, index) => (
        <img key={index} src={url} alt={product.Name} />
      ))}
    </div>
  </div>
);

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData().then(setProducts);
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product["S. No"]} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
