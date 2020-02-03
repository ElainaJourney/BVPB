import { Link } from "gatsby";
import React from "react";


const ProductList = (props) => (
    <div>
      {props.producs.map(product => (
        <div key={product.id}>
          <img
            className="product-list-image"
            src={product.imageUrl}
            alt={product.name}
          />
          <Link to={`/product-list/${product.id}`}>
            <p>{product.name}</p>
          </Link>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
    )
export default ProductList;