import React from "react";
import { FcNext } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCategory,
  getContent,
  getTypeCategory,
} from "../../../store/AllSlice";

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
  const navigate = useNavigate();
  return (
    <>
      <header id="header">
        <h1 align="center">
          {
            content?.translations?.filter(
              (lg) => lg.locale == localStorage.getItem("i18nextLng")
            )[0].title
          }
        </h1>
      </header>
      <section className="page_about">
        <div className="side-bar">
          <ul className="main_ul">
            {category?.map((item) => (
              <li
                id="side_links"
                key={item.id}
                onClick={(e) => {
                  const links = document.querySelectorAll("#side-links");
                  e.target.classList.toggle("active");
                }}
                className={item.id == content.treatment_id ? "active" : ""}
              >
                {
                  item?.translations?.filter(
                    (lg) => lg.locale == localStorage.getItem("i18nextLng")
                  )[0].title
                }
                <FcNext size={15} />
                <ul>
                  {typeCategory?.map(
                    (typee) =>
                      typee.treatment_id == item.id && (
                        <li
                          className={
                            typee.translations.filter(
                              (lg) =>
                                lg.locale == localStorage.getItem("i18nextLng")
                            )[0].slug == id
                              ? "nav-link active"
                              : ""
                          }
                          key={typee.id}
                          onClick={() =>
                            navigate(
                              `/about/${
                                typee.translations.filter(
                                  (lg) =>
                                    lg.locale ==
                                    localStorage.getItem("i18nextLng")
                                )[0].slug
                              }`
                            )
                          }
                        >
                          {
                            typee.translations.filter(
                              (lg) =>
                                lg.locale == localStorage.getItem("i18nextLng")
                            )[0].title
                          }
                        </li>
                      )
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      
        <main>
          <div
            dangerouslySetInnerHTML={createMarkup()}
            className="container"
          ></div>
        </main>
      </section>
    </>
  );
}
