import { FC } from "react";

import "./TicketInfo.css";
import { Ticket } from "../../types";
import TicketDateAndTime from "../TicketDateAndTime/TicketDateAndTime";
import FlightLine from "../FlightLine/FlightLine";

interface Props {
  ticket: Ticket;
}

const TicketInfo: FC<Props> = ({ ticket }) => {
  return (
    <div className="ticket-info">
      <TicketDateAndTime type="departure" ticket={ticket} />
      <FlightLine ticket={ticket} />
      <TicketDateAndTime type="arrival" ticket={ticket} />
    </div>
  );
};

export default TicketInfo;
