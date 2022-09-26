import { Routes, Route } from "react-router-dom";

import { EventContextProvider } from "./contexts/eventContext";

import { ThemeProvider } from "styled-components";

// import components
import Landing from "./pages/landing";
import EventCreate from "./pages/event/create";
import EventView from "./pages/event/view";
import NotFound from "./pages/NotFound";

const AppTheme = {
  colors: {
    primary1: "#240D57",
    primary2: "#501FC1",
    primary3: "#8456EC",
    primary4: "#E87BF8",
    secondary1: "#CCB6FF",
    secondary2: "#EDE5FF",
    secondary3: "#F6F2FF",
    neutral1: "#4F4F4F",
    neutral2: "#828282",
  },

  breakpoints: {
    ipad: "960px",
    mcbook: "1512px",
  },
};

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <EventContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<EventCreate />} />
          <Route path="/event" element={<EventView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </EventContextProvider>
    </ThemeProvider>
  );
}

export default App;
