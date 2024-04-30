import { IoAirplaneSharp } from "react-icons/io5";
import { Ticket } from "../../types";
import { FC } from "react";

import "./FlightLine.css";

const pluralizeRus = (n: number, forms: string[]) => {
  return n % 10 == 1 && n % 100 != 11
    ? forms[0]
    : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
    ? forms[1]
    : forms[2];
};

interface Props {
  ticket: Ticket;
}

const FlightLine: FC<Props> = ({ ticket }) => {
  return (
    <div className="flight-line-container">
      <div>
        {`${ticket.stops} пересад${pluralizeRus(ticket.stops, [
          "ка",
          "ки",
          "ок",
        ])}`}
      </div>

      <div className="flight-line">
        <span className="line" />
        <IoAirplaneSharp />
      </div>
    </div>
  );
};

export default FlightLine;
