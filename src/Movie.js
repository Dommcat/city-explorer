import React from "react";


class Movie extends React.Component {
  render() {
    return (
      <>
        <h3>Movies</h3>
        {this.props.moviedata.map(movie => {
          return (
            <>
              <p className="movietitle">{movie.title}</p>
              <p>{movie.description}</p>
              <img 
            </>
          )
        })}
      </>
    )
  }
}

export default Movie;