import React from "react";
import "./button-add-ticket.css";

export default function ButtonAddTicket() {
  return (
    <div className="ticket__button-add clearfix">
      <div className="ticket__icon_add">
        <span className="ticket__icomoon-user-plus" />
      </div>
      <div className="ticket__button-title">
        <span className="ticket__button-txt">Добавить пассажира</span>
      </div>
      <div className="ticket__button-place">
        <span className="ticket__button-free">Доступно для заказа: </span>
        <span className="ticket__button-free-seat-count">--</span>
      </div>
    </div>
  );
}
