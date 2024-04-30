import { FC } from "react";
import { Ticket } from "../../types";

import "./TicketCard.css";
import TicketPrice from "../TicketPrice/TicketPrice";
import TicketInfo from "../TicketInfo/TicketInfo";

interface Props {
  ticket: Ticket;
}

const TicketCard: FC<Props> = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <TicketPrice ticket={ticket} />

      <TicketInfo ticket={ticket} />
    </div>
  );
};

export default TicketCard;
