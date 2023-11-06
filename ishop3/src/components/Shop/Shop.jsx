import "./Shop.css";
import React from "react";

import Product from "../Product/Product.jsx";

import PropTypes from "prop-types";




class Shop extends React.Component {
  static propTypes = {
    
    deleteProduct: PropTypes.func,
    activeId: PropTypes.number,
    setActiveId: PropTypes.func,
    startEdit: PropTypes.func,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        productName: PropTypes.string,
        productDescription: PropTypes.string,
        productColor: PropTypes.string,
        productStructure1: PropTypes.string,
        productPrice: PropTypes.number,
        productUrl: PropTypes.string,
        productCount: PropTypes.number,
      })
    ),
  };





  render() {
    const productsElement = this.props.products.map((products) => {
      return (
        <Product
          product={products}
          key={products.id}
          deleteProduct={this.props.deleteProduct}
          onActive={products.id === this.props.activeId}
        
          setActive={this.props.setActiveId}
          startEdit={this.props.startEdit}
          onEditMode={this.props.onEditMode}
     
        />
      );
    });



   
    const theadArr = [
      "Фотография",
      "Название",
      "Описание",
      "Цвет",
      "Состав",
      "Цена",
      "Количество",
      "Кнопка",
    ].map((el) => {
      return (
        <td key={el} className="ProductsThead">
          {el}
        </td>
      );
    });

    return (
     
        <table className="ShopTable">
          <thead className="ShopName">
            <tr>{theadArr}</tr>
          </thead>
          <tbody>{productsElement}</tbody>
        </table>
       
      
    );
  }
}

export default Shop;
