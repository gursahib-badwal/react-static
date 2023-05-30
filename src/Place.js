import React from "react";

export default function Place(props) {
  return (
    <div className="place">
      <h1>{props.title}</h1>
      <h3>{props.location}</h3>
      <a href={props.map_url}>View on Google Maps</a>
      <b>
        {props.start} - {props.end}
      </b>
      <p>{props.description}</p>
      <img src={props.image} alt={props.title} />
    </div>
  );
}
