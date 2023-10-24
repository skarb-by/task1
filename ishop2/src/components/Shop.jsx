import './Shop.css';
import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

class Shop extends React.Component {

  static propTypes = {
    shopName: PropTypes.string.isRequired,
    deleteProduct: PropTypes.func,
    activeId: PropTypes.number,
      products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      productName: PropTypes.string.isRequired,
      productDescription: PropTypes.string.isRequired,
      productColor: PropTypes.string.isRequired,
      productStructure1: PropTypes.string.isRequired,
      productPrice: PropTypes.number.isRequired,
      productUrl: PropTypes.string.isRequired,
      productCount: PropTypes.number.isRequired
    })),  
  }

  state = {
    products: this.props.productsArr,
    activeId: null,
    
}

  deleteProduct = (deleteId) => {
    const products = this.state.products;
    this.setState({products: products.filter((element) => element.id !== deleteId)})
}

setActive = (id) => {
  return this.setState({activeId: id})
}

  render() {
    
    const productsElement=this.state.products.map((product) => {
      return (
        <Product 
        product={product}
        key={product.id}
        deleteProduct={this.deleteProduct}
        onActive={(product.id === this.state.activeId)}
        setActive={this.setActive}
         />
      )
    });
     
    const theadArr = ["Фотография", "Название", "Описание", "Цвет", "Состав", "Цена", "Количество", "Кнопка"].map((element) => {
      return <td key={element} className='ProductsThead'>{element}</td>
    });

    return (
      <table className='ShopTable'>
        <caption className='ShopCaption'>{this.props.shopName}</caption>
        <thead className='ShopName'>
          <tr>
            {theadArr}
          </tr>
        </thead>
        <tbody>
            {productsElement}
        </tbody>
      </table>
    );
  }
}

export default Shop;