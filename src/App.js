import { Routes, Route } from "react-router-dom";

// import components
import Landing from "./pages/landing";
import EventCreate from "./pages/event/create";
import EventView from "./pages/event/view";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<EventCreate />} />
        <Route path="/event" element={<EventView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
