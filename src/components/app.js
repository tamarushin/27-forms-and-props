'use strict';

import React, { Fragment } from 'react';
import superagent from 'superagent';
import SearchForm from './search/searchForm';
import SearchResultList from './search/searchResultList';

const redditAPI = `https://www.reddit.com/r`;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      search: '',
      range: 0,
      failure: false,
    };
    this.searchReddit = this.searchReddit.bind(this);
    this.handleSearchTopic = this.handleSearchTopic.bind(this);
    this.handleSearchRange = this.handleSearchRange.bind(this);
  }

  handleSearchTopic(event) {
    this.setState({search: event.target.value});
  }

  handleSearchRange(event) {
    this.setState({ range: event.target.value });
  }

  searchReddit(event) {
    event.preventDefault();
    let url = `${redditAPI}/${this.state.search}.json?limit=${this.state.range}`;
    superagent.get(url)
      .then(response => {
        this.setState({ topics: response.body.data.children, failure: false });
      })
      .catch(error => { //eslint-disable-line
        this.setState({ topics: [], failure: true });
      });
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <main>
          <SearchForm 
            handleSubmit={this.searchReddit} 
            handleTopic={this.handleSearchTopic}
            handleRange={this.handleSearchRange}
            failure={this.state.failure} 
          />

          <SearchResultList list={this.state.topics} />
        </main>
      </Fragment>
    );
  }

}


