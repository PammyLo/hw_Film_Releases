import React, { Component } from 'react';
import Film from '../components/Film';

class FilmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    };

  }

  render() {
    const filmDetails = this.state.films.map(film => {
      return (
        <Film link={ film.url } key={ film.id }>
        { film.name }
        </Film>
      );
    })

    return (
      <main>
        <h1>Upcoming Film Releases for UK</h1>

        <div className="film-list">
        { filmDetails }
        </div>

        <a href="https://www.imdb.com/calendar/?region=gb">
        View more upcoming releases
        </a>
      </main>
    );

  }

}

export default FilmList;
