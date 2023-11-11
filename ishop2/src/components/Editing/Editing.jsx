import React from "react";
import PropTypes from "prop-types";
import Form from "../Form/Form.jsx";
import "./Editing.css";

class Editing extends React.Component {
  static propTypes = {
    setEditMode: PropTypes.func,
    onShowReduction: PropTypes.bool,
    placeholder: PropTypes.string,
    saveProduct: PropTypes.func,
    cancelEdit: PropTypes.func,
    editProductCB: PropTypes.func,
    startEdit: PropTypes.func,
  };
  createBtn = () => {
    this.props.startEdit();
  };
  render() {
    return (
      <div className="CreateElement">
        <div className="CreateElementForm">
          {!this.props.onShowReduction ? (
            <input
              className="CreateElementFormButton"
              type="button"
              onClick={this.createBtn}
              value="Создать"
            />
          ) : (
            <Form
              placeholder={this.props.placeholder}
              onSave={this.props.saveProduct}
              onCancel={this.props.cancelEdit}
              setEditMode={this.props.setEditMode}
              editProductCB={this.props.editProductCB}
              product={this.props.editProduct}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Editing;
