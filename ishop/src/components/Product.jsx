import React from 'react';


const Product = ({ product}) => {



  return (
    <tr className='Product'>
      <td className='productsImg'>
        <img src={product.productUrl} alt="" />
      </td>
      <td>
        {product.productName}
      </td>
      <td>
        {product.productDescription}
      </td>
      <td>
        {product.productColor}
      </td>
      <td>
        {product.productStructure1}
      </td>
      <td>
        {`${product.productPrice} BYN`}
      </td>
      <td>
        {`${product.productCount} шт`}
      </td>
      <td>
        <button disabled="disabled">
          Удалить
        </button>
      </td>
    </tr>
  );
}


export default Product;