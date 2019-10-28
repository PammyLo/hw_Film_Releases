import React, { Component } from 'react';

class Film extends Component {
  render() {
    return (
      <article className="film">
        <a href={ this.props.link }>
        { this.props.children }
        </a>
      </article>
    );
  }

}

export default Film;
