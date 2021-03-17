import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });

  const formatSpots = (spots) => {
    if (spots === 0) {
      return "No spots remain";
    }

    if (spots === 1) {
      return "There is one spot left";
    }
    if (spots > 1) {
      return `There are ${spots} spots left`;
    }
  };

  return (
    <li onClick={props.setDay} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
