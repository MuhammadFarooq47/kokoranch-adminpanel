import React, { useState } from "react";
import TradeRequestList from "./tradeRequestList";

import NavBar from "../NavBar";
import TradeRequest from "./tradeRequest";

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
        title={"Trade Request"}
      />
      {view === "Trade Details" ? (
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
