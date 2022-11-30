import React, { useState } from "react";
import TradeRequestList from "./tradeRequestList";

import TradeRequest from "./tradeRequest";
import NavBar from "../NavBar";

export default function Profile({ setSidebar, sidebar }) {
  const [view, setView] = useState(null);
  const [singleTrade, setSingleTrade] = useState({
    productName: "productName",
    exchangeProduct: "productName",
    description: "it is a simple description",
    images: [1, 2, 3, 4, 5],
  });

  return (
    <>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title={
          view === "single-trader-request"
            ? "User Trade Details"
            : "User Request"
        }
      />
      {view === "User Trade Details" ? (
        <TradeRequest
          setView={setView}
          setSingleTrade={setSingleTrade}
          singleTrade={singleTrade}
        />
      ) : (
        <TradeRequestList setView={setView} />
      )}
    </>
  );
}
