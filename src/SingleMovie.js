import React from "react";


class SingleMovie extends React.Component {
  render() {
    return (
      <>
        <p className="movietitle">{this.props.movie.title}</p>
        <p>{this.props.movie.description}</p>
        <img src={this.props.movie.imageurl} alt={this.props.movie.title} />
      </>
    )
  }
}

export default SingleMovie;