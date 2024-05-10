import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventList from './components/eventList';
import Layout from './components/layout';
import Event from './components/event';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EventList />} />
          <Route path="event" element={<Event />} /> {/* Updated this line */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
