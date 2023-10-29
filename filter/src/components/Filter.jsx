import './Filter.css';
import React from 'react';

class Filter extends React.Component {
  
  state = {
    input: '',
    checked: false,
 

}

onChange = (element) => {
  
 this.setState( { input: element.target.value.toLowerCase()} );
  
}

checkbox = (element) => {

  this.setState( { checked: element.target.checked } );
 
}

clear = () => {
  this.setState( { input: '' } );
  this.setState( { data: this.props.data } );
  this.setState( {checked: false } );

}

render() {
  const data = this.props.data
  const { input, checked} = this.state
  const dataElement = [...data].filter((element) => element.includes(input)).map((element)  =>  <p key={element}>{element}</p>)
  const dataFilter = [...data].sort().filter((element) => element.includes(input)).map((element)  =>  <p key={element}>{element}</p>)
  return (
    <div className="Filter">
      <input type="checkbox" checked={this.state.checked} onChange={ this.checkbox}/>
      <input type="text"   value={this.state.input} onChange={ this.onChange}/>
          <button onClick={this.clear}>
        сброс
      </button>
      <div className='FilterOut'>
        {checked ?  dataFilter : dataElement}

      </div>
      <div><span>Вы ввели: {input}</span></div>
      <div><span> В алфавитном порядке? {checked  ? 'ДА' : 'НЕТ'}</span></div>
      
    </div>
  );

}


}

export default Filter;