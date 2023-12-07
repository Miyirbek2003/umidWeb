import "swiper/css/free-mode";
import bad from "../../../assets/img/bad.jpg";
import "lightgallery/css/lightgallery.css";
import uzb from "../../../assets/img/uzb.svg";
import rus from "../../../assets/img/rus.svg";
import sertificate from "../../../assets/img/sertificate.png";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import good from "../../../assets/img/good.jpg";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ser1 from "../../../assets/img/ser1.jpg";
import { FcNext } from "react-icons/fc";
import { FaCheck } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import ser2 from "../../../assets/img/ser2.jpg";
import bg from "../../../assets/img/bg.jpg";
import dok from "../../../assets/img/dok.jpg";
import ser3 from "../../../assets/img/ser3.jpg";
import logo from "../../../assets/img/logo.png";
import React, { useRef } from "react";
import Modal from "../../../components/Modal/Modal";
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";
import LightGallery from "lightgallery/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getContent,
  getFeedback,
  getImageSlide,
  getSlides,
  getTypeCategory,
  getWorkers,
} from "../../../store/AllSlice";
import { useTranslation } from "react-i18next";
import Loader from "../../Loader/Loader";

export default function Main() {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const { id } = useParams();
  React.useEffect(() => {
    dispatch(getSlides());
    dispatch(getWorkers());
    dispatch(getCategory());
    dispatch(getTypeCategory());
    dispatch(getFeedback());
    dispatch(getImageSlide());
    if (!id) {
      document.documentElement.style.height = "auto";
      document.body.style.height = "auto";
    }
    if (id) {
      document.documentElement.style.height = "100%";
      document.body.style.height = "100%";
    }
  }, []);

  const {
    slides,
    feedback,
    imageslide,
    workers,
    category,
    typeCategory,
    loading,
  } = useSelector((state) => state.AllSlice);

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
  const [treatment_id, setTreatment_id] = React.useState("");
  const navigate = useNavigate();

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {isModal && (
        <Modal
          treatment_id={treatment_id}
          setTreatment_id={setTreatment_id}
          setIsModal={setIsModal}
        />
      )}
      <header id="header">
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1>Umid Medical Centre</h1>
                <p>{t("stom")}</p>
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
                {t("home")}
              </li>

              <li
                className="item-link services"
                onClick={(e) => {
                  scrollId(e.target, "services");
                }}
              >
                {t("service")}
              </li>

              <li
                className="item-link goal"
                onClick={(e) => {
                  scrollId(e.target, "goal");
                }}
              >
                {t("adventage")}
              </li>

              <li
                className="item-link info"
                onClick={(e) => {
                  scrollId(e.target, "info");
                }}
              >
                {t("about")}
              </li>

              <li
                className="item-link workers"
                onClick={(e) => {
                  scrollId(e.target, "workers");
                }}
              >
                {t("workers")}
              </li>

              <li
                className="item-link faq"
                onClick={(e) => {
                  scrollId(e.target, "faq");
                }}
              >
                {t("faq")}
              </li>

              <li
                className="item-link feedbacks"
                onClick={(e) => {
                  scrollId(e.target, "feedbacks");
                }}
              >
                {t("feed")}
              </li>
              <li
                className="item-link projects"
                onClick={(e) => {
                  scrollId(e.target, "projects");
                }}
              >
                {t("projects")}
              </li>
              <li
                className="item-link gallery"
                onClick={(e) => {
                  scrollId(e.target, "gallery");
                }}
              >
                {t("sertificate")}
              </li>
              <li
                className="item-link contact"
                onClick={(e) => {
                  scrollId(e.target, "contact");
                }}
              >
                {t("contact")}
              </li>
              <li className="item-link drop">
                <div className="active-lang">
                  {localStorage.getItem("i18nextLng") == "uz" ? (
                    <>
                      <span>O'zb</span> <img src={uzb} alt="" />
                    </>
                  ) : (
                    <>
                      <span>Рус</span> <img src={rus} alt="" />
                    </>
                  )}
                </div>
                <ul className="drop-ul">
                  <li
                    onClick={() => {
                      i18n.changeLanguage("uz"),
                        localStorage.setItem("i18nextLng", "uz");
                    }}
                  >
                    <span>O'zb</span> <img src={uzb} alt="" />
                  </li>
                  <li
                    onClick={() => {
                      localStorage.setItem("i18nextLng", "ru");
                      i18n.changeLanguage("ru");
                    }}
                  >
                    <span>Рус</span> <img src={rus} alt="" />
                  </li>
                </ul>
              </li>
            </ul>
            <div
              id="nav-icon4"
              onClick={(e) => {
                $("#nav-icon4").toggleClass("open");
                $(".nav-links").toggleClass("active");
              }}
            >
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
              <p>{t("stom")}</p>
            </div>
          </div>
          <div className="header-contact">
            <span>+998 95 604 00 60</span>
            <button className="order">{t("order")}</button>
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
            {slides?.map((item) => (
              <SwiperSlide
                key={item.id}
                className="main-inner"
                style={{
                  backgroundImage: `url(https://admin.umidmedicalcentre.uz/images/${item.image})`,
                }}
              >
                <h3>
                  {
                    item?.translations?.filter(
                      (lg) => lg.locale == localStorage.getItem("i18nextLng")
                    )[0]?.title
                  }
                </h3>
                <p>
                  {
                    item?.translations?.filter(
                      (lg) => lg.locale == localStorage.getItem("i18nextLng")
                    )[0]?.description
                  }
                </p>
                <button
                  className="order2"
                  onClick={() => {
                    setIsModal(true);
                    setTreatment_id("");
                  }}
                >
                  Записаться на прием
                </button>
              </SwiperSlide>
            ))}

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
              <h3>{t("servicetitle")}</h3>
              <p>{t("servicedesc")}</p>
            </div>
            <div className="service-cards">
              {category &&
                category?.map((item) => (
                  <div
                    key={item.id}
                    className="service-card"
                    data-aos="fade-up"
                  >
                    <div className="img">
                      <img
                        src={`https://admin.umidmedicalcentre.uz/images/${item.image}`}
                        alt=""
                      />
                    </div>
                    <div className="service-inner">
                      <h4>
                        {
                          item?.translations?.filter(
                            (lg) =>
                              lg.locale == localStorage.getItem("i18nextLng")
                          )[0]?.title
                        }
                      </h4>
                      <ul>
                        {typeCategory?.map(
                          (typee) =>
                            typee.treatment_id == item.id && (
                              <li
                                key={typee.id}
                                onClick={() =>
                                  navigate(
                                    `/about/${
                                      typee?.translations?.filter(
                                        (lg) =>
                                          lg.locale ==
                                          localStorage.getItem("i18nextLng")
                                      )[0]?.slug
                                    }`
                                  )
                                }
                              >
                                {
                                  typee?.translations?.filter(
                                    (lg) =>
                                      lg.locale ==
                                      localStorage.getItem("i18nextLng")
                                  )[0]?.title
                                }

                                <FcNext size={15} color="rgba(47,47,47,0.7)" />
                              </li>
                            )
                        )}
                      </ul>
                      <button
                        className="order2"
                        onClick={() => {
                          setTreatment_id(item.id), setIsModal(true);
                        }}
                      >
                        {t("order2")}
                      </button>
                    </div>
                  </div>
                ))}
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
                <h3>12 345</h3>
                <p>{t("clients")}</p>
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
              <h2>{t("aboutTitle")}</h2>
              <p>
                {localStorage.getItem("i18nextLng") == "ru" ? (
                  <>
                    Приходите на прием Добро пожаловать в мир заботы о вашей
                    улыбке, где стоматология становится искусством, а каждая
                    посещение нашей клиники – шагом к идеальному здоровью вашего
                    устного полотна. Мы верим, что красивая улыбка – это не
                    просто результат профессиональной работы, но и отражение
                    заботы о вашем общем благополучии.
                    <br />
                    Наши стоматологи – это не просто врачи, но и настоящие
                    художники, создающие шедевры в мире стоматологии. Мы
                    стремимся к совершенству в каждом случае, предоставляя
                    индивидуальный подход к каждому пациенту. Мы понимаем, что
                    улыбка – это ваша визитная карточка, и наша миссия – сделать
                    ее яркой, здоровой и привлекательной. Выбрав нас, вы
                    выбираете заботу о своем здоровье, качество и
                    профессионализм.
                    <br />
                    <br />
                    Мы приглашаем вас стать частью нашей стоматологической
                    семьи, где каждый посетитель – это уникальная история
                    успеха. Доверьте свою улыбку профессионалам – мы создаем не
                    просто слайдер, мы создаем историю красивых улыбок, начиная
                    с вашей! Присоединяйтесь к нам и дарите миру свою самую
                    яркую улыбку!
                  </>
                ) : (
                  <>
                    Sizning tabassumingizga g'amxo'rlik qilish dunyosiga xush
                    kelibsiz, bu erda stomatologiya san'atga aylanadi va
                    klinikamizga har bir tashrif og'iz bo'shlig'ingiz
                    to'qimalarining ideal salomatligiga qadamdir. <br /> <br />{" "}
                    Biz ishonamizki, chiroyli tabassum nafaqat professional
                    ishning natijasi, balki sizning umumiy farovonligingiz uchun
                    g'amxo'rlikning aksidir. Bizning stomatologlarimiz nafaqat
                    shifokorlar, balki stomatologiya olamida durdona asarlar
                    yaratadigan haqiqiy rassomlardir. Biz har bir bemorga
                    individual yondashuvni ta'minlab, har bir holatda
                    mukammallikka intilamiz. Sizning tabassumingiz sizning
                    tashrif kartangiz ekanligini tushunamiz va bizning vazifamiz
                    uni yorqin, sog'lom va jozibali qilishdir. Bizni tanlash
                    orqali siz o'z salomatligingiz, sifatingiz va
                    professionalligingiz uchun g'amxo'rlikni tanlaysiz. Biz
                    sizni stomatologik oilamizning bir qismi bo'lishga taklif
                    qilamiz, bu erda har bir tashrif buyuruvchi noyob
                    muvaffaqiyat tarixidir. <br />
                    <br /> O'z tabassumingizni professionallarga ishoning - biz
                    shunchaki slayderni emas, siznikidan boshlab chiroyli
                    tabassumlar tarixini yaratamiz! Bizga qo'shiling va dunyoga
                    eng yorqin tabassumingizni bering!
                  </>
                )}
              </p>
              <button
                className="order2"
                onClick={() => {
                  setIsModal(true);
                  setTreatment_id("");
                }}
              >
                {t("order")}
              </button>
            </div>
            <div className="img">
              <img src={ser2} alt="" />
            </div>
          </div>
        </section>
        <section className="workers" id="workers">
          <div className="container">
            <div className="section-title">
              <h3>{t("workerstitle")}</h3>
              <p>{t("workersdesc")}</p>
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
              {workers?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="img">
                    <img
                      src={`https://admin.umidmedicalcentre.uz/images/${item.image}`}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>
                      {
                        item?.translations?.filter(
                          (lg) =>
                            lg.locale == localStorage.getItem("i18nextLng")
                        )[0]?.name
                      }
                    </h4>
                    <p>
                      {
                        item?.translations.filter(
                          (lg) =>
                            lg.locale == localStorage.getItem("i18nextLng")
                        )[0]?.job
                      }
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className="info accor" id="faq">
          <div className="container">
            <div className="accor-inner">
              <div className="section-title">
                <h3>{t("faqtitle")}</h3>
              </div>
              <div className="accr-img">
                <CAccordion data-aos="fade-up" flush>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader>
                      <span className="nmb"> 01</span>
                      {t("faqtit1")}
                    </CAccordionHeader>
                    <CAccordionBody>{t("faqdesc1")}</CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={2}>
                    <CAccordionHeader>
                      <span className="nmb"> 02</span> {t("faqtit2")}
                    </CAccordionHeader>
                    <CAccordionBody>{t("faqdesc2")}</CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={3}>
                    <CAccordionHeader>
                      <span className="nmb"> 03</span> {t("faqtit3")}
                    </CAccordionHeader>
                    <CAccordionBody>{t("faqdesc3")}</CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={4}>
                    <CAccordionHeader>
                      <span className="nmb"> 04</span> {t("faqtit4")}
                    </CAccordionHeader>
                    <CAccordionBody>{t("faqdesc4")}</CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
                <div className="consult" data-aos="fade-up">
                  <div className="img">
                    <img src={dok} alt="Doktor" />
                  </div>
                  <div className="con-body">
                    <p>{t("consult")}</p>
                    <h4>Алиева Мария</h4>
                    <button
                      className="order2"
                      onClick={() => {
                        setIsModal(true);
                        setTreatment_id("");
                      }}
                    >
                      {t("order3")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feedbacks" data-aos="fade-up" id="feedbacks">
          <div className="container">
            <div className="section-title">
              <h3>{t("feedtitle")}</h3>
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
              {feedback?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="img">
                    <img
                      src={`https://admin.umidmedicalcentre.uz/images/${item.image}`}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>
                      {
                        item?.translations.filter(
                          (lg) =>
                            lg.locale == localStorage.getItem("i18nextLng")
                        )[0]?.title
                      }
                    </h4>
                    <p>Клиент</p>
                    <p className="texxt">
                      {
                        item?.translations.filter(
                          (lg) =>
                            lg.locale == localStorage.getItem("i18nextLng")
                        )[0]?.description
                      }
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className="projects workers" data-aos="fade-up" id="projects">
          <div className="container">
            <div className="section-title">
              <h3>{t("projectsstitle")}</h3>
              <p>{t("projectsdesc")}</p>
            </div>
            <div className="works-cards">
              {imageslide?.map((item) => (
                <div className="work" key={item.id}>
                  <ReactCompareSlider
                    boundsPadding={0}
                    itemOne={
                      <ReactCompareSliderImage
                        alt="Image one"
                        src={`https://admin.umidmedicalcentre.uz/images/${item.do}`}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        alt="Image two"
                        src={`https://admin.umidmedicalcentre.uz/images/${item.posle}`}
                      />
                    }
                    keyboardIncrement="5%"
                    position={50}
                    style={{
                      height: "auto",
                      width: "100%",
                    }}
                  />
                  <div className="point">
                    <span>{t("do")}</span>
                    <span>{t("posle")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="gallery info" data-aos="fade-up" id="gallery">
          <div className="container">
            <div className="section-title">
              <h3>{t("sertificatetitle")}</h3>
              <p>{t("sertificatedesc")}</p>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.416826648321!2d64.52638491989174!3d39.73028682154896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f501b54c2ea0bbd%3A0xd0c70ed47f14e1f3!2sUmid%20Medical%20Centre!5e0!3m2!1suz!2s!4v1701104681182!5m2!1suz!2s"
              width="100%"
              height="400px"
              style={{ border: "none" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="contacts">
              <div className="left">
                <div className="section-title">
                  <h3>{t("contact")}</h3>
                  <p>{t("soon2")}</p>
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
                  <h3>{t("order2")}</h3>
                  <p>{t("soon")}</p>
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
