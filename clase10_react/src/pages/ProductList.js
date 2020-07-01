import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function ProductList({ history }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await Axios.get(`http://localhost:3001/list-products`);

      setProducts(response.data);
    }

    getProducts();
  }, [history]);

  console.log(products);

  return (
    <article className="Sans Serif">
      <h2 className="f3 fw4 pa3 mv0">Albums</h2>
      <div className="cf pa2">
        {products.map((product) => {
          return (
            <div className="fl w-50 w-25-m w-20-l pa2" key={product.productId}>
              <Link to={`/${product.linkText}/p`} className="db link dim tc">
                <img
                  src={`${product.items[0].images[0].imageUrl}`}
                  alt={product.productName}
                  className="w-100 db outline black-10"
                />
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Nombre</dt>
                  <dd className="ml0 black truncate w-100">
                    {product.productName}
                  </dd>
                  <dt className="clip">Marca</dt>
                  <dd className="ml0 gray truncate w-100">{product.brand}</dd>
                </dl>
              </Link>
            </div>
          );
        })}
      </div>
    </article>
  );
}
