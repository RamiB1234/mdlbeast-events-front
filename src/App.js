import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventList from './components/eventList';
import Layout from './components/layout';
import Event from './components/event';
import Buy from "./components/buy";
import Confirm from "./components/confirm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EventList />} />
          <Route path="event" element={<Event />} />
          <Route path="buy" element={<Buy />} />
          <Route path="confirm" element={<Confirm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;