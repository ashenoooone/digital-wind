import React from 'react';
import './CourseInner.css';
import { useParams, useNavigate } from 'react-router-dom';
import white_burger from '../../images/white-burger.svg';
import stroke_white from '../../images/stroke-white.svg';
import NavigationItem from './NavigationItem/NavigationItem';
import api from '../../utils/Api';
import { useHeader } from '../../hooks/useHeader';

const CourseInner = () => {
  let { id } = useParams();
  const { level } = useParams();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { isHeaderActive } = useHeader();
  const goToError = () => navigate('/error');
  const [data, setData] = React.useState(null);
  const [course, setCourse] = React.useState(null);
  const [active, setActive] = React.useState(true);
  React.useEffect(() => {
    const escapeHandler = (evt) => {
      if (
        !evt.target.classList.contains('nav') &&
        !evt.target.classList.contains('nav__img')
      )
        setNav(false);
    };
    document.addEventListener('click', escapeHandler);
    Promise.all([api.getTheoryContent(id), api.getCourse(courseId)])
      .then(([theoryContent, course]) => {
        if (!theoryContent) setActive(!active);
        else setActive(true);
        setData(theoryContent);
        setCourse(course.modules.sort((a, b) => a.id - b.id));
      })
      .catch(() => goToError());
    return () => {
      document.removeEventListener('click', escapeHandler);
    };
  }, [level, id]);
  const [nav, setNav] = React.useState(false);
  return (
    <section className='course-inner'>
      <nav
        className={`nav ${nav && 'nav-active'} ${
          !isHeaderActive ? 'nav-adaptive-header' : ''
        }`}
      >
        <div className='nav__container'>
          <img
            src={nav ? stroke_white : white_burger}
            alt=''
            className='nav__img'
            onClick={() => setNav(!nav)}
          />
          <div className={`nav__bar ${!nav && 'nav__bar-inactive'}`}>
            {course &&
              course.map((item) => {
                return item.courseModuleHeaders.map((el) => {
                  return (
                    <NavigationItem
                      key={el.id}
                      id={item.id}
                      courseId={courseId}
                      title={el.title}
                      content={el.courseModuleHeaderSteps}
                    />
                  );
                });
              })}
          </div>
        </div>
      </nav>
      <div className='course-inner__container'>
        <p className='course-inner__name'>{level}</p>
        <h1 className='course-inner__title'>{data?.title}</h1>
        <pre className='course-inner__par'>{data?.description}</pre>
        <div className='course-inner__buttons'>
          {id != 1 && (
            <button
              onClick={() =>
                navigate(`/description/${courseId}/${level}/${--id}`)
              }
              className='course-inner__button button'
            >
              Назад
            </button>
          )}
          {active && (
            <button
              onClick={() =>
                navigate(`/description/${courseId}/${level}/${++id}`)
              }
              className='course-inner__button button'
            >
              Далее
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseInner;
