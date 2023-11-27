import umid from "../../assets/img/ser2.jpg";
export default function Modal({ setIsModal }) {
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
          <h3>Записаться на прием</h3>
          <p>Введите данные для заказа обратного звонка</p>
          <form>
            <div>
              <span>
                {" "}
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
                <span className="reded">*</span> Я согласен на обработку моих
                персональных данных
              </label>
            </div>
            <button className="order2">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
