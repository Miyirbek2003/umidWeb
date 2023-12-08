import React from "react";
import { FcNext } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  getCategory,
  getContent,
  getTypeCategory,
} from "../../../store/AllSlice";

import uzb from "../../../assets/img/uzb.svg";
import rus from "../../../assets/img/rus.svg";
import logo from "../../../assets/img/logo.png";
import i18n from "../../../i18next";
import { useTranslation } from "react-i18next";
export default function About() {
  const dispatch = useDispatch();
  const { id } = useParams();
  React.useEffect(() => {
    dispatch(getContent(id));
    dispatch(getCategory());
    dispatch(getTypeCategory());
    window.scrollTo(0, 0);
  }, [id]);
  const { content, category, typeCategory } = useSelector(
    (state) => state.AllSlice
  );
  function createMarkup() {
    return {
      __html: content?.translations?.filter(
        (el) => el.locale === localStorage.getItem("i18nextLng")
      )[0]?.body,
    };
  }

  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");

  sidebarBtn?.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
  let tables = document.querySelectorAll("table");
  tables.forEach((item) => {
    item.classList.add("table");
    item.classList.add("table-bordered");
  });
  if (window.location.href != "/") {
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
  }
  if (window.location.href == "/") {
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
  }
  function addActiveClass() {
    const element = document.querySelector(".sidebar");

    if (window.innerWidth <= 700) {
      element?.classList.add("close");
    } else {
      element?.classList.remove("close");
    }
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
  const { t, i18n } = useTranslation();
  // Call the function when the page loads and when the window is resized
  window.onload = addActiveClass;
  window.addEventListener("resize", addActiveClass);
  const navigate = useNavigate();
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header-inner">
            <div className="logo" onClick={() => navigate("/")}>
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
                  navigate("/");
                  setTimeout(() => {
                    scrollId(e.target, "main");
                  }, 1500);
                }}
              >
                {" "}
                {t("home")}
              </li>

              <li
                className="item-link services"
                onClick={(e) => {
                  navigate("/");
                  setTimeout(() => {
                    scrollId(e.target, "services");
                  }, 1500);
                }}
              >
                {t("service")}
              </li>

              <li
                className="item-link goal"
                onClick={(e) => {
                  navigate("/");
                  setTimeout(() => {
                    scrollId(e.target, "goal");
                  }, 1500);
                }}
              >
                {t("adventage")}
              </li>

              <li
                className="item-link info"
                onClick={(e) => {
                  navigate("/");
                  setTimeout(() => {
                    scrollId(e.target, "info");
                  }, 1500);
                }}
              >
                {t("about")}
              </li>

              <li
                className="item-link workers"
                onClick={(e) => {
                  navigate("/");
                  setTimeout(() => {
                    scrollId(e.target, "workers");
                  }, 1500);
                }}
              >
                {t("workers")}
              </li>

              <li
                className="item-link faq"
                onClick={(e) => {
                  navigate("/");
                  setTimeout(() => {
                    scrollId(e.target, "faq");
                  }, 1500);
                }}
              >
                {t("faq")}
              </li>

              <li
                className="item-link feedbacks"
                onClick={(e) => {
                  navigate("/");
                  setTimeout(() => {
                    scrollId(e.target, "feedbacks");
                  }, 1500);
                }}
              >
                {t("feed")}
              </li>
              <li
                className="item-link projects"
                onClick={(e) => {
                  navigate("/");
                  setTimeout(() => {
                    scrollId(e.target, "projects");
                  }, 1500);
                }}
              >
                {t("projects")}
              </li>
              <li
                className="item-link gallery"
                onClick={(e) => {
                  navigate("/");
                  setTimeout(() => {
                    scrollId(e.target, "gallery");
                  }, 1500);
                }}
              >
                {t("sertificate")}
              </li>
              <li
                className="item-link contact"
                onClick={(e) => {
                  navigate("/");
                  setTimeout(() => {
                    scrollId(e.target, "contact");
                  }, 1500);
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

      <section className="page_about">
        <div className={`sidebar ${window.innerWidth <= 700 ? "close" : ""} `}>
          {/* <div
            className="logo-details"
            onClick={() => {
              if (window.innerWidth <= 700) {
                const element = document.querySelector(".sidebar");
                element?.classList.toggle("close");
              }
            }}
          >
            <img src={logo} alt="" />
          </div> */}
          <ul className="nav-links">
            {category &&
              category?.map((item) => (
                <li
                  key={item.id}
                  className={`nav_item ${
                    content.treatment_id == item.id ? "showMenu" : ""
                  }`}
                  onClick={(e) => {
                    let arrow = document.querySelectorAll(".arrow");
                    let nav_item = document.querySelectorAll(".nav_item");

                    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
                    arrowParent.classList.toggle("showMenu");
                    if (window.innerWidth <= 700) {
                      const element = document.querySelector(".sidebar");
                      element.classList.remove("close");
                    }
                    e.stopPropagation();
                  }}
                >
                  <div className="iocn-link">
                    <NavLink>
                      <i className="bx bx-collection"></i>
                      <span className="link_name">{item.title}</span>
                    </NavLink>
                    <i className="bx bxs-chevron-down arrow"></i>
                  </div>
                  <ul className={`sub-menu`}>
                    {typeCategory?.map(
                      (typee) =>
                        typee.treatment_id == item.id && (
                          <li
                            key={typee.id}
                            onClick={() => {
                              if (window.innerWidth <= 700) {
                                const element =
                                  document.querySelector(".sidebar");
                                element.classList.add("close");
                              }
                            }}
                            className={typee.slug == id ? "active" : ""}
                          >
                            <NavLink to={`/about/${typee.slug}`}>
                              {typee.title}
                            </NavLink>
                          </li>
                        )
                    )}
                  </ul>
                </li>
              ))}
          </ul>
        </div>

        <main
          onClick={() => {
            if (window.innerWidth <= 700) {
              const element = document.querySelector(".sidebar");
              element.classList.add("close");
            }
          }}
        >
          {" "}
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
          <div
            dangerouslySetInnerHTML={createMarkup()}
            className="container"
          ></div>
        </main>
      </section>
    </>
  );
}
