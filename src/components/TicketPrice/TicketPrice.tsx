import { Button } from "antd";
import "./TicketPrice.css";
import { Ticket } from "../../types";
import { FC } from "react";
import { useFilters } from "../../contexts/FiltersContext/FiltersContext";
import { exchangeRate } from "./constants";

const formatPrice = (price: number, currency: string = "rub") => {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  return formatter.format(price);
};

const convertPrice = (
  price: number,
  currency: "rub" | "usd" | "eur" = "rub"
) => {
  return price * exchangeRate[currency];
};

interface Props {
  ticket: Ticket;
}

const TicketPrice: FC<Props> = ({ ticket }) => {
  const filters = useFilters();

  return (
    <div className="ticket-price-container">
      <span className="ticket-carrier">{ticket.carrier}</span>
      <Button className="ticket-buy-btn">{`Купить за ${formatPrice(
        convertPrice(ticket.price, filters.currency),
        filters.currency
      )}`}</Button>
    </div>
  );
};

export default TicketPrice;
