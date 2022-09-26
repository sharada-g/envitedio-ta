import React, { createContext, useContext, useState } from "react";

const EventContext = createContext();
const useEventContext = () => useContext(EventContext);

const EventContextProvider = ({ children }) => {
  const [event, setEvent] = useState({});

  return (
    <EventContext.Provider
      value={{
        event,
        setEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export { useEventContext, EventContextProvider };
