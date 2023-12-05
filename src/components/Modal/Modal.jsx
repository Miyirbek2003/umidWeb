import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";
import umid from "../../assets/img/ser2.jpg";
export default function Modal({ setIsModal, treatment_id }) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const { t } = useTranslation();
  async function onPost(e) {
    e.preventDefault();

    if (name && phone && treatment_id) {
      const btn = document.querySelector("#submitbtn");
      btn.disabled = true;
      const response = await axios.post("http://127.0.0.1:8000/api/order", {
        name: name,
        phone: phone,
        treatment_id: treatment_id,
      });
      setIsModal(false);
    }
  }

  return (
    <div className="modal" onClick={() => setIsModal(false)}>
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
        <span className="exit" onClick={() => setIsModal(false)}>
          &times;
        </span>
        <div className="img">
          <img src={umid} alt="" />
        </div>
        <div className="modal-title">
          <h3>{t("order2")}</h3>
          <p>{t("info")}</p>
          <form onSubmit={onPost}>
            <div>
              <span>
                {" "}
                <span className="reded">*</span> {t("name")}
              </span>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                type="text"
                required
              />
            </div>
            <div>
              <span>
                <span className="reded">*</span> {t("tel")}
              </span>
              <input
                name="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="number"
                required
              />
            </div>
            <div className="check">
              <input type="checkbox" name="agree" id="agree" required />
              <label htmlFor="agree">
                <span className="reded">*</span> {t("agree")}
              </label>
            </div>
            <button type="submit" id="submitbtn" className="order2">
              {t("send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
