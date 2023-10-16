import React from 'react';


const Product = ({ product}) => {



  return (
    <tr className='Product'>
      <td className='productsImg'>
        <img src={product.url} alt="" />
      </td>
      <td>
        {product.name}
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
        {`${product.price} BYN`}
      </td>
      <td>
        {`${product.count} шт`}
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