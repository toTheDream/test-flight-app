import { useMemo } from "react";
import data from "../../tickets.json";
import TicketCard from "../TicketCard/TicketCard";
import { useFilters } from "../../contexts/FiltersContext/FiltersContext";
import { transfersOptions } from "../TransfersFilter/constants";

import "./TicketsList.css";

const TicketsList = () => {
  const filters = useFilters();

  const sortedTickets = useMemo(() => {
    return data.tickets.filter((ticket) => {
      const filterByDirectFlight =
        ticket.stops === 0 && filters.transfers.includes(transfersOptions[0]);
      const filterByOneTransfer =
        ticket.stops === 1 && filters.transfers.includes(transfersOptions[1]);
      const filterByTwoTransfers =
        ticket.stops === 2 && filters.transfers.includes(transfersOptions[2]);
      const filterByThreeTransfers =
        ticket.stops === 3 && filters.transfers.includes(transfersOptions[3]);

      return (
        filterByDirectFlight ||
        filterByOneTransfer ||
        filterByTwoTransfers ||
        filterByThreeTransfers
      );
    });
  }, [filters.transfers]);

  if (sortedTickets.length === 0) {
    return (
      <p style={{ display: "flex", alignItems: "center", margin: "20px" }}>
        По заданным параметрам ничего не найдено
      </p>
    );
  }

  return (
    <ul className="tickets-list">
      {sortedTickets.map((ticket, index) => (
        <li key={index}>
          <TicketCard ticket={ticket} />
        </li>
      ))}
    </ul>
  );
};

export default TicketsList;
