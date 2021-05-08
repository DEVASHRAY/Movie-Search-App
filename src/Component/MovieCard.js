import React from "react";

const MovieCards = (props) => {
  return (
    <>
      <div className="card">
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.value.poster_path}`}
          alt={props.value.title + "poster"}
        />
        <div className="card--content">
          <h3 className="card--title">{props.value.title}</h3>
          <p>
            <small>
              <b className="releaseDate">RELEASE DATE : </b>
              {props.value.release_date}
            </small>
          </p>
          <p>
            <small>
              <b className="rating">RATING : </b>
              {props.value.vote_average}
            </small>
          </p>
          <p className="card--desc">
            <b>DESCRIPTION : </b>
            {props.value.overview}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCards;
