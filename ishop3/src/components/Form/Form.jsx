import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

class Form extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    editProductCB: PropTypes.func,
    setEditMode: PropTypes.func,
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

  onChangeInutInfo = (productName,  productDescription, productColor, productStructure1, productPrice, productCount) => {
    const onEditMode =
      productName !== this.props.product.productName ||
      productDescription !== this.props.product.productDescription ||
      productColor !== this.props.product.productColor ||
      productStructure1 !== this.props.product.productStructure1 ||
      productPrice !== this.props.product.productPrice ||
      productCount !== this.props.product.productCount;
    onEditMode ? this.props.setEditMode(true) : this.props.setEditMode(false);
  };

  onChangeName = (eo) => {
    this.onChangeInutInfo(
     eo.target.value,
      this.props.product.productDescription,
      this.props.product.productColor,
      this.props.product.productStructure1,
      this.props.product.productPrice,
      this.props.product.productCount
    );
    this.props.editProductCB({
      ...this.props.product,
      productName: eo.target.value,
    });
  };


  onChangeDescription = (eo) => {this.onChangeInutInfo(this.props.product.productName, eo.target.value, this.props.product.productColor, this.props.product.productStructure1, this.props.product.productPrice, this.props.product.productCount);
    this.props.editProductCB({ ...this.props.product, productDescription: eo.target.value, });
  };

  onChangeColor = (eo) => {this.onChangeInutInfo(this.props.product.productName, this.props.product.productDescription, eo.target.value, this.props.product.productStructure1, this.props.product.productPrice, this.props.product.productCount);
    this.props.editProductCB({ ...this.props.product, productColor: eo.target.value, });
  };

  onChangeStructure1 = (eo) => {this.onChangeInutInfo(this.props.product.productName, this.props.product.productDescription, this.props.product.productColor, eo.target.value, this.props.product.productPrice, this.props.product.productCount);
    this.props.editProductCB({ ...this.props.product, productStructure1: eo.target.value, });
  };

  onChangePrice = (eo) => {this.onChangeInutInfo(this.props.product.productName, this.props.product.productDescription, this.props.product.productColor, this.props.product.productStructure1, +eo.target.value, this.props.product.productCount);
    this.props.editProductCB({...this.props.product, productPrice: +eo.target.value, });
  };

  onChangeCount = (eo) => {this.onChangeInutInfo(this.props.product.productName, this.props.product.productDescription, this.props.product.productColor, this.props.product.productStructure1, this.props.product.productPrice, +eo.target.value);
    this.props.editProductCB({...this.props.product, productCount: +eo.target.value, });
  };

  onSave = () => {
    const onSave = window.confirm("Вы действительно хотите сохранить?");
    onSave && this.props.onSave(this.props.product);
    this.props.setEditMode(false);
  };

  onCancel = () => {
    this.props.onCancel();
    this.props.setEditMode(false);
  };

  render() {
    return (
      <div>
        <h3>{this.props.placeholder}</h3>
        <div>
          <span>ID: </span>
          <span>{this.props.product.id}</span>
        </div>
        <div>
          <span>Название: </span>
          <input className="FormInput1"
            value={this.props.product.productName}
            type="text"
            name="name"
            onChange={this.onChangeName}
            placeholder="Название"
            autoComplete="off"
          />
          {!this.props.product.productName ?
            <span style={{ color: "red" }}>заполните название</span> : <span style={{ color: "green" }}>OK</span>
          }
        </div>
        <div>
          <span>Описание: </span>
          <input className="FormInput2"
            value={this.props.product.productDescription}
            type="text"
            name="description"
            onChange={this.onChangeDescription}
            placeholder="Описание"
            autoComplete="off"
          />
          {!this.props.product.productDescription ?  
            <span style={{ color: "red" }}>заполните описание</span> : <span style={{ color: "green" }}>OK</span>
          }
           </div>

        <div>
          <span>Цвет: </span>
          <input className="FormInput3"
            value={this.props.product.productColor}
            type="text"
            name="color"
            onChange={this.onChangeColor}
            placeholder="Цвет"
            autoComplete="off"
          />
          {!this.props.product.productColor ?
            <span style={{ color: "red" }}>заполните цвет</span> : <span style={{ color: "green" }}>OK</span>
          }
        </div>
        <div>
          <span>Состав: </span>
          <input className="FormInput4"
            value={this.props.product.productStructure1}
            type="text"
            name="structure1"
            onChange={this.onChangeStructure1}
            placeholder="Состав"
            autoComplete="off"
          />
          {!this.props.product.productStructure1 ?
            <span style={{ color: "red" }}>заполните состав</span> : <span style={{ color: "green" }}>OK</span>
          }
        </div>

        <div>
          <span>Цена: </span>
          <input className="FormInput5"
            value={this.props.product.productPrice}
            type="number"
            name="price"
            onChange={this.onChangePrice}
            placeholder="Цена"
            autoComplete="off"
          />
          {!this.props.product.productPrice ?
            <span style={{ color: "red" }}>заполните цену</span> : <span style={{ color: "green" }}>OK</span>
          }
        </div>

        <div>
          <span>Количество: </span>
          
          <input className="FormInput6"
            value={this.props.product.productCount}
            type="number"
            name="count"
            onChange={this.onChangeCount}
            placeholder="Количество"
            autoComplete="off"
          />
          {!this.props.product.productCount ?
            <span style={{ color: "red" }}>заполните количество</span> : <span style={{ color: "green" }}>OK</span>
          }
        </div>

        <input className="FormButton"
          type="button"
          onClick={this.onSave}
          value="Сохранить"
          disabled={
            !this.props.product.productName |
            !this.props.product.productDescription |
            !this.props.product.productColor |
            !this.props.product.productStructure1 |
            !this.props.product.productPrice |
            !this.props.product.productCount
          }
        />
        <input className="FormButton" type="button" onClick={this.onCancel} value="отмена" />
      </div>
    );
  }
}
export default Form;
