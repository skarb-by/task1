import "./Shop.css";
import React from "react";
import Header from "../Header/Header.jsx";
import Product from "../Product/Product.jsx";
import Information from "../Information/Information.jsx";
import Editing from "../Editing/Editing.jsx";
import PropTypes from "prop-types";

const defaultProduct = {
  id: -1,
  productName: "",
  productDescription: "",
  productColor: "",
  productStructure1: "",
  productPrice: 0,
  productCount: 0,
  productUrl:
    "https://raw.githubusercontent.com/skarb-by/task1/master/ishop3/src/images/no.jpg",
};

const placeholderArr = ["Редактирование", "Создание"];

class Shop extends React.Component {
  static propTypes = {
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

  state = {
    products: this.props.productsArr,
    activeId: null,
    onEditMode: false,
    onShowReduction: false,
    editProduct: defaultProduct,
    placeholder: placeholderArr[0],
  };

  setPlaceholder = (i) => {
    this.setState({ placeholder: placeholderArr[i] });
  };

  setShowReduction = (onShowReduction) => {
    this.setState({ onShowReduction });
  };

  setEditMode = (onEdit) => {
    this.setState({ onEditMode: onEdit });
  };

  setActiveId = (id) => {
    return !this.state.onEditMode && this.setState({ activeId: id });
  };

  deleteProduct = (deleteId) => {
    const newProducts = this.state.products.filter(
      (element) => element.id !== deleteId
    );
    this.setState({ products: newProducts });
    this.setShowReduction(false);
  };

  newId = () => {
    const products = this.state.products;
    const max = products.reduce((acc, item) =>
      acc.id > item.id ? acc.id : item.id
    );
    return max + 1;
  };

  startEdit = (product = defaultProduct) => {
    const onNewProuct = product.id === -1;
    this.setShowReduction(true);
    this.setPlaceholder(onNewProuct ? 1 : 0);
    this.setActiveId(product.id);
    this.setState({
      editProduct: {
        ...product,
        id: onNewProuct ? this.newId() : product.id,
      },
    });
  };

  editProduct = (product) => {
    this.setState({ editProduct: product });
  };

  saveProduct = () => {
    const products = this.state.products;
    const editProduct = this.state.editProduct;
    let newArrayProducts = products.map((el) =>
      el.id !== editProduct.id ? el : editProduct
    );
    const onOldProduct = newArrayProducts.some(
      (el) => el.id === editProduct.id
    );
    !onOldProduct && newArrayProducts.push(editProduct);
    this.setShowReduction(false);
    this.setState({
      products: newArrayProducts,
      editProduct: defaultProduct,
    });
  };

  cancelEdit = () => {
    this.setShowReduction(false);
    this.setState({ editProduct: defaultProduct });
  };

  render() {
    const productsElement = this.state.products.map((products) => {
      return (
        <Product
          product={products}
          key={products.id}
          onActive={products.id === this.state.activeId}
          setActive={this.setActiveId}
          deleteProduct={this.deleteProduct}
          onEditMode={this.state.onEditMode}
          startEdit={this.startEdit}
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
    const activeProduct = this.state.products.find(
      (p) => p.id === this.state.activeId
    );

    return (
      <div className="ShopContainer">
        <Header />
        <table className="ShopTable">
          <thead className="ShopName">
            <tr>{theadArr}</tr>
          </thead>
          <tbody>{productsElement}</tbody>
        </table>
        <Editing
          setEditMode={this.setEditMode}
          onShowReduction={this.state.onShowReduction}
          saveProduct={this.saveProduct}
          cancelEdit={this.cancelEdit}
          editProduct={this.state.editProduct}
          editProductCB={this.editProduct}
          startEdit={this.startEdit}
          placeholder={this.state.placeholder}
        />
        {this.state.products.some((e) => e.id === this.state.activeId) && (
          <Information product={activeProduct} />
        )}
      </div>
    );
  }
}

export default Shop;
