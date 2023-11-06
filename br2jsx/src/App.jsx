import React from 'react';
import Br2jsx  from './components/Br2jsx.jsx'

class App extends React.Component {

    render() {
        let text = "первый<br>второй<br/>третий<br />последний";
        return <Br2jsx text={text} />;
    }
}

export default App;
