import React from "react";
import { FcNext } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  getCategory,
  getContent,
  getTypeCategory,
} from "../../../store/AllSlice";
import logo from "../../../assets/img/logo.png";
export default function About() {
  const dispatch = useDispatch();
  const { id } = useParams();
  React.useEffect(() => {
    dispatch(getContent(id));
    dispatch(getCategory());
    dispatch(getTypeCategory());
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
      element.classList.add("close");
    } else {
      element.classList.remove("close");
    }
  }

  // Call the function when the page loads and when the window is resized
  window.onload = addActiveClass;
  window.addEventListener("resize", addActiveClass);
  const navigate = useNavigate();
  return (
    <>
      <section className="page_about">
        <div className="sidebar">
          <div
            className="logo-details"
            onClick={() => {
              if (window.innerWidth <= 700) {
                const element = document.querySelector(".sidebar");
                element.classList.toggle("close");
              }
            }}
          >
            <img src={logo} alt="" />
          </div>
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
          <div className="header">
            <h1 align="center">
              {
                content?.translations?.filter(
                  (lg) => lg.locale == localStorage.getItem("i18nextLng")
                )[0].title
              }
            </h1>
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
