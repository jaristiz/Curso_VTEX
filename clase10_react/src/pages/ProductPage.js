import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function ProductPage({ match }) {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    async function getProduct() {
      const response = await Axios.get(`http://localhost:3001/list-sku`, {
        headers: {
          link: match.params.link,
        },
      });
      setProduct(response.data);
      console.log(response.data);
    }
    getProduct();
  }, [match]);

  return (
    <>
      <Link to="/ProductList">
        <a
          href="#0"
          className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
        >
          <span className="pl1">Back</span>
        </a>
      </Link>
      {products.map((product) => {
        return (
          <section
            className="flex-ns vh-100 items-center sans-serif"
            key={product.productId}
          >
            <div className="mw6 ph6">
              <img
                src={`${product.items[0].images[0].imageUrl}`}
                alt={product.productName}
              />
            </div>
            <div className="tc tl-ns ph3">
              <h1 className="f3 f1-l fw2 mb3 mt4 mt0-ns">
                {product.productName}
              </h1>
              <h2 className="f5 f3-l fw1 mb4 mb5-l lh-title">
                {product.metaTagDescription}
              </h2>
              <a
                href={product.items[0].sellers[0].addToCartLink}
                className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black"
              >
                Comprar
              </a>
            </div>
          </section>
        );
      })}
    </>
  );
}
