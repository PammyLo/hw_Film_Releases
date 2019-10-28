import React, { Component } from 'react';

class Film extends Component {
  render() {
    return (
      <article className="film">
        <ul>
          <li>
            <a href={ this.props.link }>
            { this.props.children }
            </a>
          </li>
        </ul>
      </article>
    );
  }

}

export default Film;
