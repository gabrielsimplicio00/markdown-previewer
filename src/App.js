import React from 'react';
import './App.css';
import Textarea from './components/textarea';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <div className='subtitle'>by <a href='https://www.linkedin.com/in/gabriel-ferreira-2755b6164/'>Gabriel Simplício</a></div>
        <Textarea />
      </div>
    );
  }
}

export default App;
