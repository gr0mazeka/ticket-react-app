import React from 'react';
import PropTypes from 'prop-types';

import './ticket-info.css';

export function TicketInfo() {
  return (
    <div className="ticket__info ticket__id_ clearfix" data-id="id">
      <div className="ticket__form-title ticket__form-title_color">
        <div className="ticket__form-number">
          <span className="ticket__icomoon-ticket-user" />
          <span className="ticket__form-number-inner">Билет:</span>
        </div>
        <div className="ticket__form-price">
          <span className="ticket__form-type" data-type="0">
            Взрослый:
          </span>
          <span className="ticket__form-price-value">0</span> руб
        </div>
        <div className="ticket__form-button">
          <button className="button ticket__button-del">Удалить</button>
        </div>
      </div>
      <div className="ticket__input">
        <div className="ticket__surname">
          <input
            type="text"
            className="ticket__cl-surname ticket__input-col"
            placeholder="Фамилия"
          />
        </div>
        <div className="ticket__name">
          <input
            type="text"
            className="ticket__cl-name ticket__input-col"
            placeholder="Имя"
          />
        </div>
        <div className="ticket__patronymic">
          <input
            type="text"
            className="ticket__cl-patronymic ticket__input-col"
            placeholder="Отчество"
          />
        </div>
        <div className="ticket__gender">
          <select type="text" className="ticket__cl-gender ticket__input-col">
            <option disabled defaultValue>
              Пол
            </option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>
        <div className="ticket__birthdate">
          <input
            type="text"
            className="ticket__cl-birthdate ticket__input-col"
            placeholder="Дата рождения"
          />
        </div>
        <div className="ticket__phone">
          <input
            type="text"
            className="ticket__cl-phone ticket__input-col"
            placeholder="Телефон"
          />
        </div>
        <div className="ticket__document">
          <select type="text" className="ticket__cl-document ticket__input-col">
            <option disabled defaultValue>
              Документ
            </option>
            <option value="passport">Паспорт</option>
            <option value="driver_doc">Водительское удостоверение</option>
            <option value="bith_doc">Свидетельство о рождении</option>
          </select>
        </div>
        <div className="ticket__document-serial">
          <input
            type="text"
            className="ticket__cl-document-serial ticket__input-col"
            placeholder="Серия/номер"
          />
        </div>
      </div>
    </div>
  );
}

TicketInfo.propTypes = {
  city: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
