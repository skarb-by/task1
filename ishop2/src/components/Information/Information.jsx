import React from "react";
import PropTypes from "prop-types";
import "./Information.css";

class Information extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      productName: PropTypes.string,
      productDescription: PropTypes.string,
      productColor: PropTypes.string,
      productStructure1: PropTypes.string,
      productPrice: PropTypes.number,
      productUrl: PropTypes.string,
      productCount: PropTypes.number,
    }),
  };
render() {

    return (
      <div className="Information">
        <p>Карточка товара</p>
        <p><img src={this.props.product.productUrl} alt="" /></p>
        <div>{`Название: ${this.props.product.productName}`}</div>
        <div>{`Описание: ${this.props.product.productDescription}`}</div>
        <div>{`Цвет: ${this.props.product.productColor}`}</div>
        <div>{`Состав: ${this.props.product.productStructure1}`}</div>
        <div>{`Цена: ${this.props.product.productPrice} BYN`}</div>
        <div>{`Количество: ${this.props.product.productCount} шт`}</div>
      </div>
    );
  }
}

export default Information;
