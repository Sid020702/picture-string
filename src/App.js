import React from 'react';
import Header from './components/header/header.component';
import './App.css';
import StringComponent from './components/string/string.component';
import Footer from './components/footer/footer.component';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
class App extends React.Component {

  componentDidMount() {
    let grid = document.getElementById('grid')

    const gridComputedStyle = window.getComputedStyle(grid);


    // get number of grid columns
    const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
    const gridRowCount = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;

    var nodes = document.getElementById('grid').childNodes
    let i = gridColumnCount - 1;
    while (i < (nodes.length)) {
      nodes[i].style.visibility = 'hidden'
      i += gridColumnCount
    }

  }
  render() {

    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <StringComponent />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }

}

export default App;
