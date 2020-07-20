import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header.component.jsx';
import CardList from './components/card-list/card-list.component';
import Search from './components/search/search.component'

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      characters : [],
      isLoading : true,
      searchField: ""
    }

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount(){
    fetch('https://www.breakingbadapi.com/api/characters')
      .then(response => response.json())
      .then(character => this.setState({characters: character}, isLoading => this.setState({isLoading: false})))
  }

  handleChange(e){
    this.setState({ searchField: e.target.value})
  }

  render(){
    const {characters, isLoading, searchField} = this.state;
    console.log(isLoading)
    const filteredChar = characters.filter(character => character.portrayed.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="container">
        <Header />
        <Search 
          placeholder= "Search Cast Actor name"
          handleChange = {this.handleChange}
          value = {searchField}
        />
        <CardList 
          isLoading = {isLoading}
          characters={filteredChar}
          src = "./img/spinner.gif"
        />
      </div>
    );
  }
  
}

export default App;
