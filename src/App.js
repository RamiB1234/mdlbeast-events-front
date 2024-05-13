import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventList from './components/eventList';
import Layout from './components/layout';
import Event from './components/event';
import Buy from "./components/buy";
import Confirm from "./components/confirm";
import TicketList from "./components/ticketList";
import Login from "./components/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EventList />} />
          <Route path="event" element={<Event />} />
          <Route path="buy" element={<Buy />} />
          <Route path="confirm" element={<Confirm />} />
          <Route path="ticketlist" element={<TicketList />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
