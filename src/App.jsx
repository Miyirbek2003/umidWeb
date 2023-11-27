import "swiper/css/free-mode";
import bad from "./assets/img/bad.jpg";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import sertificate from "./assets/img/sertificate.png";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import good from "./assets/img/good.jpg";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ser1 from "./assets/img/ser1.jpg";
import { FcNext } from "react-icons/fc";
import { FaCheck } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";

import ser2 from "./assets/img/ser2.jpg";
import bg from "./assets/img/bg.jpg";
import dok from "./assets/img/dok.jpg";
import ser3 from "./assets/img/ser3.jpg";
import logo from "./assets/img/logo.png";
import React, { useRef } from "react";
import Modal from "./components/Modal/Modal";
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";
import LightGallery from "lightgallery/react";
export default function App() {
  const progressCircle = React.useRef(null);
  const progressContent = React.useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [isModal, setIsModal] = React.useState(false);
  if (isModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  function scrollId(item, id) {
    const item_links = document.querySelectorAll(".item-link");
    const itemm = document.getElementById(`${id}`);
    window.scrollTo(0, itemm.offsetTop - 65);
    item_links.forEach((it) => it.classList.remove("active"));
    item.classList.add("active");
    document.querySelector(".nav-links").classList.remove("active");
    document.querySelector("#nav-icon4").classList.remove("open");
  }
  const [isOpen, setIsopen] = React.useState(false);

  return (
    <>
      {isModal && <Modal setIsModal={setIsModal} />}
      <header id="header">
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1>Umid Medical Centre</h1>
                <p>Стомотология</p>
              </div>
            </div>
            <ul className="nav-links">
              <li
                className="item-link main"
                onClick={(e) => {
                  scrollId(e.target, "main");
                }}
              >
                {" "}
                Главная
              </li>

              <li
                className="item-link services"
                onClick={(e) => {
                  scrollId(e.target, "services");
                }}
              >
                Услуги
              </li>

              <li
                className="item-link goal"
                onClick={(e) => {
                  scrollId(e.target, "goal");
                }}
              >
                Преимущества
              </li>

              <li
                className="item-link info"
                onClick={(e) => {
                  scrollId(e.target, "info");
                }}
              >
                О компании
              </li>

              <li
                className="item-link workers"
                onClick={(e) => {
                  scrollId(e.target, "workers");
                }}
              >
                Сотрудники
              </li>

              <li
                className="item-link faq"
                onClick={(e) => {
                  scrollId(e.target, "faq");
                }}
              >
                FAQ
              </li>

              <li
                className="item-link feedbacks"
                onClick={(e) => {
                  scrollId(e.target, "feedbacks");
                }}
              >
                Отзывы
              </li>
              <li
                className="item-link projects"
                onClick={(e) => {
                  scrollId(e.target, "projects");
                }}
              >
                Работы
              </li>
              <li
                className="item-link gallery"
                onClick={(e) => {
                  scrollId(e.target, "gallery");
                }}
              >
                Сертификаты
              </li>
              <li
                className="item-link contact"
                onClick={(e) => {
                  scrollId(e.target, "contact");
                }}
              >
                Контакты
              </li>
            </ul>
            <div id="nav-icon4">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="header-btm">
          <div className="logo">
            <img src={logo} alt="" />
            <div>
              <h1>Umid Medical Centre</h1>
              <p>Стомотология</p>
            </div>
          </div>
          <div className="header-contact">
            <span>+998 95 604 00 60</span>
            <button className="order">Заказать звонок</button>
          </div>
        </div>
      </div>

      <main>
        <section className="main" id="main">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide
              className="main-inner"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <h3>Umid Medical Centre</h3>
              <p>Ваша Улыбка – Наше Вдохновение!</p>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `url(${ser2})` }}>
              <h3>Счастливые часы в воскресенье с 9:00 - 21:00</h3>
              <p>
                Скидка 20% на терапевтическое лечение зубов. Период действия
                акции "Счастливые часы"ограничено
              </p>
              <button className="order2">Записаться на прием</button>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </section>
        <section className="services" id="services">
          <div className="container">
            <div className="section-title">
              <h3>Широкий профиль услуг</h3>
              <p>Предлагаем Вашему вниманию наши услуги</p>
            </div>
            <div className="service-cards">
              <div className="service-card" data-aos="fade-up">
                <div className="img">
                  <img src={ser1} alt="" />
                </div>
                <div className="service-inner">
                  <h4>Лечение кариеса</h4>
                  <ul>
                    <li>
                      Кариес начальный <FcNext size={15} />
                    </li>
                    <li>
                      Кариес поверхностный <FcNext size={15} />
                    </li>
                    <li>
                      Кариес средний
                      <FcNext size={15} />
                    </li>
                    <li>
                      Кариес глубокий <FcNext size={15} />
                    </li>
                  </ul>
                  <div className="price">от 799 000 сум</div>
                  <button className="order2" onClick={() => setIsModal(true)}>
                    Записаться
                  </button>
                </div>
              </div>
              <div className="service-card" data-aos="fade-up">
                <div className="img">
                  <img src={ser1} alt="" />
                </div>
                <div className="service-inner">
                  <h4>Лечение кариеса</h4>
                  <ul>
                    <li>
                      Кариес начальный <FcNext size={15} />
                    </li>
                    <li>
                      Кариес поверхностный <FcNext size={15} />
                    </li>
                    <li>
                      Кариес средний <FcNext size={15} />
                    </li>
                    <li>
                      Кариес глубокий <FcNext size={15} />
                    </li>
                  </ul>
                  <div className="price">от 799 000 сум</div>
                  <button className="order2" onClick={() => setIsModal(true)}>
                    Записаться
                  </button>
                </div>
              </div>
              <div className="service-card" data-aos="fade-up">
                <div className="img">
                  <img src={ser2} alt="" />
                </div>
                <div className="service-inner">
                  <h4>Лечение кариеса</h4>
                  <ul>
                    <li>
                      Кариес начальный <FcNext size={15} />
                    </li>
                    <li>
                      Кариес поверхностный
                      <FcNext size={15} />
                    </li>
                    <li>
                      Кариес средний <FcNext size={15} />
                    </li>
                    <li>
                      Кариес глубокий <FcNext size={15} />
                    </li>
                  </ul>
                  <div className="price">от 799 000 сум</div>
                  <button className="order2" onClick={() => setIsModal(true)}>
                    Записаться
                  </button>
                </div>
              </div>
              <div className="service-card" data-aos="fade-up">
                <div className="img">
                  <img src={ser3} alt="" />
                </div>
                <div className="service-inner">
                  <h4>Лечение кариеса</h4>
                  <ul>
                    <li>
                      Кариес начальный <FcNext size={15} />
                    </li>
                    <li>
                      Кариес поверхностный <FcNext size={15} />
                    </li>
                    <li>
                      Кариес средний <FcNext size={15} />
                    </li>
                    <li>
                      Кариес глубокий <FcNext size={15} />
                    </li>
                  </ul>
                  <div className="price">от 799 000 сум</div>
                  <button className="order2" onClick={() => setIsModal(true)}>
                    Записаться
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="goal" id="goal">
          <div className="container">
            <div data-aos="flip-up">
              <span>
                <FaCheck fontSize={30} color="white" />
              </span>
              <div>
                <h3>Анализ аудитории</h3>
                <p>Точно определим целевую аудиторию</p>
              </div>
            </div>
            <div data-aos="flip-up">
              <span>
                <FaCheck color="white" fontSize={30} />
              </span>
              <div>
                <h3>Цели продвижения</h3>
                <p>Предложим пути продвижения бизнеса</p>
              </div>
            </div>
            <div data-aos="flip-up">
              <span>
                <FaCheck color="white" fontSize={30} />
              </span>
              <div>
                <h3>Рекламная акция</h3>
                <p>Начнем проведение рекламный кампаний</p>
              </div>
            </div>
          </div>
        </section>
        <section className="info" id="info">
          <div className="container">
            <div className="info-content">
              <h2>Приходите на прием</h2>
              <p>
                Добро пожаловать в мир заботы о вашей улыбке, где стоматология
                становится искусством, а каждая посещение нашей клиники – шагом
                к идеальному здоровью вашего устного полотна. Мы верим, что
                красивая улыбка – это не просто результат профессиональной
                работы, но и отражение заботы о вашем общем благополучии.
                <br /> <br /> Наши стоматологи – это не просто врачи, но и
                настоящие художники, создающие шедевры в мире стоматологии. Мы
                стремимся к совершенству в каждом случае, предоставляя
                индивидуальный подход к каждому пациенту. Мы понимаем, что
                улыбка – это ваша визитная карточка, и наша миссия – сделать ее
                яркой, здоровой и привлекательной.
                <br />
                <br />
                Выбрав нас, вы выбираете заботу о своем здоровье, качество и
                профессионализм. Мы приглашаем вас стать частью нашей
                стоматологической семьи, где каждый посетитель – это уникальная
                история успеха. Доверьте свою улыбку профессионалам – мы создаем
                не просто слайдер, мы создаем историю красивых улыбок, начиная с
                вашей!
                <br />
                <br /> Присоединяйтесь к нам и дарите миру свою самую яркую
                улыбку!
              </p>
              <button className="order2">Записаться на прием</button>
            </div>
            <div className="img">
              <img src={ser2} alt="" />
            </div>
          </div>
        </section>
        <section className="workers" id="workers">
          <div className="container">
            <div className="section-title">
              <h3>Наши Сотрудники</h3>
              <p>Ниже представлены наши сотрудники</p>
            </div>
            <Swiper
              data-aos="fade-up"
              slidesPerView={4}
              spaceBetween={30}
              navigation={true}
              loop={true}
              breakpoints={{
                100: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                400: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                916: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Стоматолог</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Стоматолог</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Стоматолог</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Стоматолог</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Стоматолог</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Стоматолог</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Стоматолог</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="info accor" id="faq">
          <div className="container">
            <div className="accor-inner">
              <div className="section-title">
                <h3>Часто задаваемые вопросы</h3>
              </div>
              <div className="accr-img">
                <CAccordion data-aos="fade-up" flush>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader>
                      <span className="nmb"> 01</span> Обязательно ли
                      пользоваться нитью для чистки зубов?
                    </CAccordionHeader>
                    <CAccordionBody>
                      При чистке зубной нитью вы удаляете зубной налет и
                      частички пищи в таких участках полости рта, куда зубной
                      щетке не добраться между зубами и под пришеечной частью
                      десны и между зубами
                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={2}>
                    <CAccordionHeader>
                      <span className="nmb"> 02</span> Что делать, если
                      произошла травма зуба?
                    </CAccordionHeader>
                    <CAccordionBody>
                      Видов травм бывает много, даже в случае сломанного зуба
                      встает вопрос, какая часть была сломана: коронковая часть
                      или корень. Мог произойти не перелом, а подвывих. Или,
                      может быть, вас беспокоит подвижность зуба. В любом случае
                      надо прийти на прием к лучшим стоматологам нашей клиники
                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={3}>
                    <CAccordionHeader>
                      <span className="nmb"> 03</span> Сколько зубов можно
                      удалить одновременно?
                    </CAccordionHeader>
                    <CAccordionBody>
                      Однозначного ответа на этот вопрос дать, к сожалению,
                      нельзя – все зависит от ситуации: Чаще всего, разумеется,
                      за один раз удаляется только один зуб. В некоторых
                      стоматологиях больше одного зуба вам не удалят никогда
                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={4}>
                    <CAccordionHeader>
                      <span className="nmb"> 04</span> Можно ли отбелить зубной
                      протез или коронку?
                    </CAccordionHeader>
                    <CAccordionBody>
                      Сегодня не существует технологии, позволяющей отбелить
                      коронку или протез из любого материала. Это обусловлено
                      самой структурой искусственных конструкций, которая
                      отличается от структуры живой эмали. Поэтому перед тем,
                      как подбирать цвет коронок, следует отбелить свои зубы, и
                      затем уже изготавливать коронки под цвет отбеленных зубов
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
                <div className="consult" data-aos="fade-up">
                  <div className="img">
                    <img src={dok} alt="Doktor" />
                  </div>
                  <div className="con-body">
                    <p>Консультант</p>
                    <h4>Алиева Мария</h4>
                    <button className="order2">Задать свой вопрос</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feedbacks" data-aos="fade-up" id="feedbacks">
          <div className="container">
            <div className="section-title">
              <h3>Отзывы наших клиентов</h3>
            </div>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              navigation={true}
              loop={true}
              modules={[Pagination, Navigation]}
              className="mySwiper feedback"
              breakpoints={{
                100: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                500: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Клиент</p>
                  <p className="texxt">
                    Эскиз дизайна совсем не разочаровал, а наоборот, порадовал.
                    Дизайнер точно и абсолютно правильно почувствовал наши
                    пожелания.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Клиент</p>
                  <p className="texxt">
                    Эскиз дизайна совсем не разочаровал, а наоборот, порадовал.
                    Дизайнер точно и абсолютно правильно почувствовал наши
                    пожелания.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Клиент</p>
                  <p className="texxt">
                    Эскиз дизайна совсем не разочаровал, а наоборот, порадовал.
                    Дизайнер точно и абсолютно правильно почувствовал наши
                    пожелания.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Клиент</p>
                  <p className="texxt">
                    Эскиз дизайна совсем не разочаровал, а наоборот, порадовал.
                    Дизайнер точно и абсолютно правильно почувствовал наши
                    пожелания.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Клиент</p>
                  <p className="texxt">
                    Эскиз дизайна совсем не разочаровал, а наоборот, порадовал.
                    Дизайнер точно и абсолютно правильно почувствовал наши
                    пожелания.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Клиент</p>
                  <p className="texxt">
                    Эскиз дизайна совсем не разочаровал, а наоборот, порадовал.
                    Дизайнер точно и абсолютно правильно почувствовал наши
                    пожелания.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src={dok} alt="" />
                </div>
                <div className="content">
                  <h4>Хусанова Жамила</h4>
                  <p>Клиент</p>
                  <p className="texxt">
                    Эскиз дизайна совсем не разочаровал, а наоборот, порадовал.
                    Дизайнер точно и абсолютно правильно почувствовал наши
                    пожелания.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="projects workers" data-aos="fade-up" id="projects">
          <div className="container">
            <div className="section-title">
              <h3>Наши работы</h3>
              <p>Ниже представлены фоторгафии поциентов До и После</p>
            </div>
            <div className="works-cards">
              <div className="work">
                <ReactCompareSlider
                  boundsPadding={0}
                  itemOne={
                    <ReactCompareSliderImage alt="Image one" src={bad} />
                  }
                  itemTwo={
                    <ReactCompareSliderImage alt="Image two" src={good} />
                  }
                  keyboardIncrement="5%"
                  position={50}
                  style={{
                    height: "auto",
                    width: "100%",
                  }}
                />
                <div className="point">
                  <span>До</span>
                  <span>После</span>
                </div>
              </div>
              <div className="work">
                <ReactCompareSlider
                  boundsPadding={0}
                  itemOne={
                    <ReactCompareSliderImage alt="Image one" src={bad} />
                  }
                  itemTwo={
                    <ReactCompareSliderImage alt="Image two" src={good} />
                  }
                  keyboardIncrement="5%"
                  position={50}
                  style={{
                    height: "auto",
                    width: "100%",
                  }}
                />
                <div className="point">
                  <span>До</span>
                  <span>После</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery info" data-aos="fade-up" id="gallery">
          <div className="container">
            <div className="section-title">
              <h3>Сертификаты</h3>
              <p>Наша компания имеет большой опыт</p>
            </div>
            <div className="sertificates">
              <LightGallery speed={500}>
                <a href={sertificate} data-aos="zoom-in">
                  <img alt="Имя Сертификата" src={sertificate} />
                </a>
                <a href={sertificate} data-aos="zoom-in">
                  <img alt="Имя Сертификата" src={sertificate} />
                </a>
                <a href={sertificate} data-aos="zoom-in">
                  <img alt="Имя Сертификата" src={sertificate} />
                </a>{" "}
                <a href={sertificate} data-aos="zoom-in">
                  <img alt="Имя Сертификата" src={sertificate} />
                </a>{" "}
              </LightGallery>
            </div>
          </div>
        </section>
        <footer className="contact" id="contact">
          <div className="container">
            <div
              className="yanmap"
              style={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://yandex.uz/map-widget/v1/?display-text=umid%20medical%20centre&ll=64.554324%2C39.724202&mode=search&oid=113018405755&ol=biz&sctx=ZAAAAAgBEAAaKAoSCTQtsTIaz01AEVKeeTnsOkVAEhIJTl5kAn6N3z8R6NhBJa5jyj8iBgABAgMEBSgKOABA4VBIAWoCdXqdAc3MTD2gAQCoAQC9AUbegRrCAQX%2BlKbxPeoBAPIBAPgBAIICE3VtaWQgbWVkaWNhbCBjZW50cmWKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=64.554324%2C39.724202&sspn=0.099421%2C0.043358&text=umid%20medical%20centre&z=14.31"
                width="560"
                height="400"
                frameBorder="1"
                allowFullScreen={true}
                style={{ position: "relative" }}
              ></iframe>
            </div>

            <div className="contacts">
              <div className="left">
                <div className="section-title">
                  <h3>Контакты</h3>
                  <p>
                    Вы можете связаться с нами любым удобным способом или
                    заказать звонок
                  </p>
                </div>
                <div className="contact-number">
                  <h4>+998 95 604 00 60</h4>
                  <h4>+998 95 604 00 60</h4>
                  <p>mail@mail.ru</p>
                  <p>example@mail.com</p>
                  <p>город Бухара, Каган</p>
                </div>
              </div>
              <div className="right">
                <div className="modal-title">
                  <h3>Заказать звонок</h3>
                  <p>Свяжемся с вами в ближайшее время</p>
                  <form>
                    <div>
                      <span>
                        <span className="reded">*</span> Имя
                      </span>
                      <input type="text" />
                    </div>
                    <div>
                      <span>
                        <span className="reded">*</span> Телефон
                      </span>
                      <input type="number" />
                    </div>
                    <div className="check">
                      <input type="checkbox" name="agree" id="agree" />
                      <label htmlFor="agree">
                        <span className="reded">*</span> Я согласен на обработку
                        моих персональных данных
                      </label>
                    </div>
                    <button className="order2">Отправить</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
