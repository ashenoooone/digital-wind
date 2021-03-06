import React from "react";
import { Link } from "react-router-dom";
import avatarImage from "../../images/empty-avatar.svg";
import settingsButton from "../../images/settings-button.svg";
import Button from "../Button/Button";
import Card from "../Main/Card/Card";
import "./Profile.css";
import cardImgFirst from "../../images/card3.png";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import api from "../../utils/Api";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { setUser } from "../store/slices/userSlice";
import empty_courses from "../../images/empty-courses.svg";

const Profile = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = React.useState([]);
  const [isSettingsActive, setIsSettingsActive] = React.useState(false);
  const { email, name, surname, token, phone } = useAuth();
  const [nameSurnameInput, setNameSurnameInput] = React.useState(
    `${name} ${surname}`
  );
  const [emailInput, setEmailInput] = React.useState(email);
  const [phoneInput, setPhoneInput] = React.useState(phone);
  const dispatch = useDispatch();
  const quit = () => {
    dispatch(removeUser());
    navigate("/login");
  };
  const onSubmit = (data) => {
    const req = {
      name: data.namesurname.split(" ")[0],
      surname: data.namesurname.split(" ")[1],
      email: data.email,
      phone: errors.phone ? phone : data.phone,
      token: token,
    };
    api
      .updateProfile(req)
      .then((res) => {
        dispatch(
          setUser({
            name: req.name,
            surname: req.surname,
            email: req.email,
            phone: req.phone,
            token: token,
          })
        );
        setIsSettingsActive(false);
      })
      .catch((er) => alert(er));
  };

  React.useEffect(() => {
    api.getUserCourses(token).then((res) => {
      setCourses([...res.course]);
    });
  }, []);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  return (
    <section className="profile">
      <div className="profile__personal">
        <img src={avatarImage} className="profile__avatar" alt="аватарка" />
        <div
          className={`profile__info ${
            isSettingsActive && "profile__info_hiden"
          }`}
        >
          <h1 className="profile__name">{`${name} ${surname}`}</h1>
          <p className="profile__email">{email}</p>
          <button
            onClick={() => quit()}
            type="button"
            className="button profile__quit-button"
          >
            Выйти из аккаунта
          </button>
        </div>
        <form
          className={`profile__form ${
            !isSettingsActive && "profile__form-hiden"
          }`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="profile__form-item">
            <span className="error-message profile-error">
              {errors?.namesurname?.message}
            </span>
            <input
              type="text"
              placeholder="Имя и фамилия"
              value={nameSurnameInput}
              onInput={(e) => setNameSurnameInput(e.target.value)}
              className={`profile__input ${
                errors?.namesurname && "profile__input-error"
              }`}
              {...register("namesurname", {
                validate: {
                  noSpaceStart: (value) =>
                    /^(?! )/g.test(value) ||
                    "Строка не может начинаться с пробела",
                  noSpaceStart: (value) =>
                    /(?<! )$/g.test(value) ||
                    "В конце строки не должно быть лишних пробелов",
                  twoWords: (value) =>
                    /^[^ ]+(?= +[^ ]+$)/g.test(value) ||
                    "В строке должно быть два слова: имя и фамилия",
                },
                required: "Это поле обязательно к заполнению",
                minLength: {
                  value: 5,
                  message: "Минимальная длина имени 5 символа",
                },
                maxLength: {
                  value: 32,
                  message: "Максимальная длина имени 32 символа",
                },
              })}
            />
          </div>
          <div className="profile__form-item">
            <span className="error-message profile-error">
              {errors?.email?.message}
            </span>
            <input
              className={`profile__input && ${
                errors?.email && "profile__input-error"
              }`}
              placeholder="Почта"
              value={emailInput}
              autoComplete="none"
              onInput={(e) => setEmailInput(e.target.value)}
              {...register("email", {
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Введите корректный адрес электронной почты",
                },
                minLength: {
                  value: 7,
                  message: "Минимальная длина этого поля 7 символов",
                },
              })}
            />
          </div>
          <div className="profile__form-item">
            <span className="error-message profile-error">
              {errors?.phone?.message}
            </span>
            <input
              className={`profile__input ${
                errors?.phone && "profile__input-error"
              }`}
              value={phoneInput ? phoneInput : ""}
              onInput={(e) => setPhoneInput(e.target.value)}
              placeholder={"Телефон"}
              type="tel"
              {...register("phone", {
                required: false,
                validate: {
                  phone: (value) => {
                    return value
                      ? isValidPhoneNumber(value) || "Вводите телефон через +7"
                      : true;
                  },
                },
              })}
            />
          </div>
          <input
            type="submit"
            disabled={!isValid}
            className={`profile__button ${
              !isValid && "profile__button-inactive"
            }`}
            value="Сохранить изменения"
          />
        </form>
        <img
          alt="настройки"
          src={settingsButton}
          className={`profile__settings-button ${
            isSettingsActive && "profile__settings-button-hiden"
          }`}
          onClick={() => setIsSettingsActive(!isSettingsActive)}
        />
      </div>
      <div className="profile__courses">
        <h2 className="profile__courses-title">
          {courses.length > 1 ? "Текущие курсы" : "Текущий курс"}
        </h2>
        <div className="profile__courses-current">
          {courses.length ? (
            courses.map(({ title, description, duration, id, link }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  time={duration}
                  img={link}
                  button={"Продолжить курс"}
                  flag={true}
                />
              );
            })
          ) : (
            <div className="empty-courses">
              <img
                src={empty_courses}
                alt=""
                className="empty-courses__image"
              />
              <Link to="/courses" className="button empty-courses__link">
                Начать осваивать новую профессию
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
