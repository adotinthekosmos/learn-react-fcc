import React from "react";
import "./SeriesList.css";

//equal to this
// const SeriesListItem = props => (
//   <li key={props.series.show.id}> {props.series.show.name} </li>
// );
//component accept 1 prop
const SeriesListItem = ({ series }) => <li>{series.show.name} </li>;

const SeriesList = props => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map(series => (
          <SeriesListItem key={series.show.id} series={series} />
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
