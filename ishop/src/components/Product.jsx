import React from 'react';
class Product extends React.Component {

  render() {

    return (
      
      <tr className='Product'>
        <td className='productsImg'>
          <img src={this.props.product.productUrl} alt="" />
        </td>
        <td>
          {this.props.product.productName}
        </td>
        <td>
          {this.props.product.productDescription}
        </td>
        <td>
          {this.props.product.productColor}
        </td>
        <td>
          {this.props.product.productStructure1}
        </td>
        <td>
          {`${this.props.product.productPrice} BYN`}
        </td>
        <td>
          {`${this.props.product.productCount} шт`}
        </td>
        <td>
          <button disabled="disabled">
            Удалить
          </button>
        </td>
      </tr>
   
    );
  }
}
  /*
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

*/

export default Product;