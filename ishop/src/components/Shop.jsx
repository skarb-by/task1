import './Shop.css';
import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';
  
class Shop extends React.Component {

  static propTypes = {
    shopName: PropTypes.string.isRequired,
      
  }

  render() {
    const productsElement=this.props.productsArr.map((product) => {
      return (
        <Product product={product} key={product.id}/>
      )
    });

    const theadArr = ["Фотография", "Название", "Описание", "Цвет", "Состав", "Цена", "Количество", "Кнопка"].map((e) => {
      return <td key={e} className='ProductsThead'>{e}</td>
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

/*
const Shop = ({ shopName, productsArr }) => {

  const [products] = useState(productsArr);
 
  const theadArr = ["Фотография", "Название", "Описание", "Цвет", "Состав", "Цена", "Количество", "Кнопка"].map((e) => {
    return <td key={e} className='ProductsThead'>{e}</td>
  });

  const productsElement = products.map((product) => {
    return (
      <Product product={product}
               key={product.id} />
    )
  });

  return (
    <table className='ShopTable'>
      <caption className='ShopCaption'>{shopName}</caption>
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
*/
export default Shop;