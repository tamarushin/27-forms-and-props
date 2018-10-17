'use strict';

import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import SearchForm from './search/searchForm';
import SearchResultList from './search/searchResultList';

const redditAPI = `https://www.reddit.com/r`;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      failure: false,
    };
    this.searchReddit = this.searchReddit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }


  searchReddit(search, range) {
    let url = `${redditAPI}/${search}.json?limit=${range}`;
    console.log('clicked');
    return this.fetchData(url)
      .then(topics => this.setState(Object.assign(...this.state, {topics: topics.body.data.children}, {failure: false}),() => console.log('state',this.state))
      );
  }

  fetchData(url) {
    return superagent.get(url)
      .then(result => {
        return result;
      })
      .catch(() => {
        console.log('errooooor');
        this.setState({failure: true});
      });
  }

  render() {
    return (
      <Fragment>
        <main>
          <SearchForm searchMethod={this.searchReddit} failure={this.state.failure}/>

          <SearchResultList list={this.state.topics}/>
        </main>
      </Fragment>
    );
  }

}


