import React from "react";
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1.",
    price: 10.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2.",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3.",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 3",
    description: "This is product 3.",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1.",
    price: 10.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2.",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3.",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 3",
    description: "This is product 3.",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1.",
    price: 10.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2.",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3.",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 3",
    description: "This is product 3.",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1.",
    price: 10.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2.",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3.",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 3",
    description: "This is product 3.",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
];
const ProductList = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="boardListHeader">
          <h2>같이 공유해요 :-)</h2>
        </div>
        <div className="createBoard">
          <a href="#">게시글 작성</a>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
