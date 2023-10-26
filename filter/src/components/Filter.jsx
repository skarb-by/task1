import './Filter.css';
import React from 'react';

class Filter extends React.Component {
  
  state = {
    data: this.props.data,
    input: '',
    checked: false,
 

}

onChange = (eo) => {
  
 this.setState( { input: eo.target.value.toLowerCase()} );
  
}

checkbox = (eo) => {

  this.setState( { checked: eo.target.checked } );
 
}

clear = () => {
  this.setState( { input: '' } );
  this.setState( { data: this.props.data } );
  this.setState( {checked: false } );

}

render() {
  const {data, input, checked} = this.state
  const dataElement = [...data].filter((element) => element.includes(input)).map((element)  =>  <p key={element}>{element}</p>)
  const filter = [...data].sort().filter((element) => element.includes(input)).map((element)  =>  <p key={element}>{element}</p>)
  return (
    <div className="Filter">
      <input type="checkbox" checked={this.state.checked} onChange={ this.checkbox}/>
      <input type="text"   value={this.state.input} onChange={ this.onChange}/>
          <button onClick={this.clear}>
        сброс
      </button>
      <div className='FilterOut'>
        {checked ?  filter : dataElement}

      </div>
      <div><span>Вы ввели: {input}</span></div>
<div><span> В алфавитном порядке? {checked  ? 'ДА' : 'НЕТ'}</span></div>
      
    </div>
  );

}


}

export default Filter;