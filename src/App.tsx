import "./App.css";
import TicketsList from "./components/TicketsList/TicketsList";
import FiltersCard from "./components/FiltersCard/FiltersCard";
import { BsAirplaneFill } from "react-icons/bs";
import { FiltersProvider } from "./contexts/FiltersContext/FiltersContext";

function App() {
  return (
    <FiltersProvider>
      <div className="layout">
        <header className="header">
          <BsAirplaneFill />
        </header>

        <main className="main">
          <aside className="aside">
            <FiltersCard />
          </aside>

          <TicketsList />
        </main>
      </div>
    </FiltersProvider>
  );
}

export default App;
