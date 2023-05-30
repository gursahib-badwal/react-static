import React from "react";
import data from "./data.js";
import Place from "./Place";
import Header from "./Header.js";

export default function App() {
  const work_data = data.map((obj) => {
    return (
      <div>
        <Place
          title={obj.title}
          location={obj.location}
          map_url={obj.googleMapsUrl}
          start={obj.startDate}
          end={obj.endDate}
          description={obj.description}
          image={obj.imageURL}
          key={obj.key} //just to get rid of the key prop error
        />
      </div>
    );
  });
  return (
    <div>
      <Header />
      {work_data}
    </div>
  );
}
