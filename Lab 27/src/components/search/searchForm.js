import React from 'react';

import './search.scss';


export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      range: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRange = this.handleRange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    this.props.searchMethod(this.state.search, this.state.range);
  }

  handleSearch(e) {
    let search = e.target.value;
    this.setState({ search });
  }

  handleRange(e) {
    let range = e.target.value;
    this.setState({ range }, () => console.log('JFOEIF', this.state));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={this.props.failure ? 'error' : null}>
        <p>Search topics on Reddit</p>
        <input onChange={this.handleSearch} placeholder='search reddit' />
        <p>Limit the number of results</p>
        <input onChange={this.handleRange} type='number' min='1' max='100' />
        <input type="submit" />
      </form>
    );
  }

}