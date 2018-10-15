import React from 'react';

import './search.scss';


export default class searchResultList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.list.map(topic => (
          <li key={topic.data.title}>
            <a href={`https://www.reddit.com${topic.data.permalink}`}>
              {topic.data.title}
              <p>Thumbs Up: {topic.data.ups}</p>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}