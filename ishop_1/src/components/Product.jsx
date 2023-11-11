import React from "react";
import PropTypes from "prop-types";
class Product extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      productName: PropTypes.string.isRequired,
      productDescription: PropTypes.string.isRequired,
      productColor: PropTypes.string.isRequired,
      productStructure1: PropTypes.string.isRequired,
      productPrice: PropTypes.number.isRequired,
      productUrl: PropTypes.string.isRequired,
      productCount: PropTypes.number.isRequired,
    }),
    deleteProduct: PropTypes.func,
    onActive: PropTypes.bool,
    setActive: PropTypes.func,
  };
  //??
  deleteElement = (element) => {
    element.stopPropagation();
    const delProduct = window.confirm("Удалить товар?");
    delProduct && this.props.deleteProduct(this.props.product.id);
  };
  activeMod = () => {
    this.props.setActive(this.props.onActive ? null : this.props.product.id);
  };
  render() {
    return (
      <tr
        className={this.props.onActive ? "Product Active" : "Product "}
        onClick={this.activeMod}
      >
        <td className="productsImg">
          <img src={this.props.product.productUrl} alt="" />
        </td>
        <td>{this.props.product.productName}</td>
        <td>{this.props.product.productDescription}</td>
        <td>{this.props.product.productColor}</td>
        <td>{this.props.product.productStructure1}</td>
        <td>{`${this.props.product.productPrice} BYN`}</td>
        <td>{`${this.props.product.productCount} шт`}</td>
        <td>
          <button onClick={this.deleteElement}>Удалить</button>
        </td>
      </tr>
    );
  }
}

export default Product;
