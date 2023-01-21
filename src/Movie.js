import React from "react";
import SingleMovie from "./SingleMovie";

class Movie extends React.Component {
  render() {
    return (
      <>
        <h3>Movies</h3>
        {this.props.moviedata.map(movie => {
          return (
            <>
              <SingleMovie movie={movie} />
            </>
          )
        })}
      </>
    )
  }
}

export default Movie;