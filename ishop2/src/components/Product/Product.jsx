import "./Product.css";
import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {
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
    deleteProduct: PropTypes.func,
    onActive: PropTypes.bool,
    setActive: PropTypes.func,
    startEdit: PropTypes.func,
    onEditMode: PropTypes.bool,
  };
  
  deleteElement = (el) => {
    el.stopPropagation();
    const delProduct = window.confirm("Удалить товар?");
    delProduct && this.props.deleteProduct(this.props.product.id);
  };
  activeMod = () => {
    this.props.setActive(this.props.onActive ? null : this.props.product.id);
  };
 
  editProduct = (e) => {
    e.stopPropagation();
    this.props.startEdit(this.props.product);
  }

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
        <div className="ProductButton">
          <button onClick={this.deleteElement} disabled={this.props.onEditMode}>Удалить</button>
          <button onClick={this.editProduct} disabled={this.props.onEditMode}>Редактировать</button>
          </div>
        </td>
      </tr>
    );
  }
}

export default Product;
