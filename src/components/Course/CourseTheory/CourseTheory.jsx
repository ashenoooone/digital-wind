import React from 'react';
import Style from '../Course.module.css';
import courseButtonUp from '../../../images/courseButtonUp.svg';

const CourseTheory = (props) => {
  const [isAnimate, setAnimate] = React.useState(false);
  const data = props.header.sort((a, b) => a.id - b.id);
  return (
    <div
      className={`${Style['theory__course-container']} ${
        isAnimate && Style['theory_active']
      }`}
    >
      <div className={Style['theory__course-info']}>
        <h2 className={Style['theory__course-title']}>{props.title}</h2>
        <img
          src={courseButtonUp}
          alt='Знак для октрытия информации внутри курсов'
          className={`${Style['theory__course-button']} ${
            isAnimate && Style['theory__course-button_rotate']
          }`}
          onClick={() => setAnimate(!isAnimate)}
        />
      </div>
      <div
        className={`${Style['theory__list']} ${
          !isAnimate && Style['theory_disabled']
        }`}
      >
        {data.map((item, id) => {
          const headerSteps = item.courseModuleHeaderSteps.sort(
            (a, b) => a.id - b.id
          );
          return (
            <div key={id}>
              <h2 className={Style['theory__list-title']}>{item.title}</h2>
              <ul>
                {headerSteps.map((el, elementId) => {
                  return (
                    <li key={elementId} className={Style['theory__list-text']}>
                      {el.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseTheory;
