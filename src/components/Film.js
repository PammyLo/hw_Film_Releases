import React, { Component } from 'react';

class Film extends Component {
  render() {
    return (
      <article className="film">
        { this.props.children }
        { this.props.name }
      </article>
    );
  }

}

export default Film;
