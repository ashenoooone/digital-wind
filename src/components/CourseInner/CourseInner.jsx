import React from "react";
import "./CourseInner.css";
import { useLocation } from "react-router-dom";

const CourseInner = () => {
  const courseInformation = useLocation().state;
  return (
    <section className="course-inner">
      <p className="course-inner__name">{courseInformation.level}</p>
      <h1 className="course-inner__title">{courseInformation.title}</h1>
      <p className="course-inner__par">{courseInformation.description}</p>
    </section>
  );
};

export default CourseInner;
