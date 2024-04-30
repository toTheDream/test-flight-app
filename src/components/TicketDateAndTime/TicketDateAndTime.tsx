import { FC } from "react";
import { Ticket } from "../../types";

import "./TicketDateAndTime.css";

interface Props {
  ticket: Ticket;
  type: "departure" | "arrival";
}

const formatDate = (date: string) => {
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "medium",
  });

  return formatter.format(new Date(date));
};

const TicketDateAndTime: FC<Props> = ({ ticket, type }) => {
  return (
    <div
      className={`ticket-date-and-time-container ${
        type === "departure" ? "" : "arrival"
      }`}
    >
      <span className="ticket-time">
        {type === "departure" ? ticket.departure_time : ticket.arrival_time}
      </span>
      <span className="ticket-boarding">
        {type === "departure"
          ? `${ticket.origin}, ${ticket.origin_name}`
          : `${ticket.destination}, ${ticket.destination_name}`}
      </span>
      <span className="ticket-date">
        {type === "departure"
          ? formatDate(ticket.departure_date)
          : formatDate(ticket.arrival_date)}
      </span>
    </div>
  );
};

export default TicketDateAndTime;
