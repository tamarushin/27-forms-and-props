import React from 'react';

import './search.scss';

export default class SearchForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className={this.props.failure ? 'error' : null}>
        <p>Search topics on Reddit</p>
        <input onChange={this.props.handleTopic} placeholder='search reddit' />
        <p>Limit the number of results</p>
        <input onChange={this.props.handleRange} type='number' min='1' max='100' />
        <input type="submit" />
      </form>
    );
  }

}