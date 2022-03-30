import React from "react";
import "../CourseInner.css";
import "react-router-dom";
import { Link } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <>
      <h2 className="nav__title">{props.title}</h2>
      <ul className="nav__list">
        {props?.content.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/description/${props.courseId}/${props.title}/${item.id}`}
            >
              <li className="nav__item">{item?.title}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default NavigationItem;
