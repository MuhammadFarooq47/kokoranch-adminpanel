import React, { useState } from "react";
import TradeList from "./tradeList";

import TradeDetails from "./tradeDetails";
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
          view === "User Trade Details" ? "User Trade Details" : "User Trades"
        }
      />
      {view === "User Trade Details" ? (
        <TradeDetails
          setView={setView}
          setSingleTrade={setSingleTrade}
          singleTrade={singleTrade}
        />
      ) : (
        <TradeList setView={setView} />
      )}
    </>
  );
}
