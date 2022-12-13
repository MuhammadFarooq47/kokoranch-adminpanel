import React, { useState } from "react";
import InfoCard from "./InfoCard";
import { ReactComponent as FilterIcon } from "../../../../assets/images/icons/filter-icon.svg";
import FilterProp from "./FilterProp";

const InfoCards = ({
  data,
  activeCard,
  setActiveCard,
  featured1,
  sortData,
  setSortData,
  price,
}) => {
  const [showFilterProp, setShowFilterProp] = useState(false);
  console.log('preice',price)
  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <FilterIcon
            width={20}
            onClick={() => setShowFilterProp(!showFilterProp)}
          />
        </div>
        {/* <div className="infocard-container col-12 col-sm-4 col-md-4 col-lg-4"> */}
        {data.map((data, index) => {
          return activeCard === data.topText ? (
            <div className="col-6 col-sm-4 col-md-2 col-lg-2 mt-2  ">
              <InfoCard
                key={index}
                topText={data.topText}
                bottomText={data.bottomText}
                active
                setActiveCard={setActiveCard}
              />
            </div>
          ) : (
            <div className="col-6 col-sm-4 col-md-2 col-lg-2 mt-2 ">
              <InfoCard
                key={index}
                topText={data.topText}
                bottomText={data.bottomText}
                setActiveCard={setActiveCard}
              />
            </div>
          );
        })}
        {/* </div> */}
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="infocard-container">
          {data.map((data, index) => {
            return activeCard === data.topText ? (
              <InfoCard
                key={index}
                topText={data.topText}
                bottomText={data.bottomText}
                active
                setActiveCard={setActiveCard}
              />
            ) : (
              <InfoCard
                key={index}
                topText={data.topText}
                bottomText={data.bottomText}
                setActiveCard={setActiveCard}
              />
            );
          })}
        </div>
        <FilterIcon
          width={20}
          onClick={() => setShowFilterProp(!showFilterProp)}
        />
      </div>
      <div
        className="so-top-filtericon"
        onClick={() => setShowFilterProp(!showFilterProp)}
      ></div> */}
      {showFilterProp && (
        <FilterProp
          featured1={featured1}
          sortData={sortData}
          setSortData={setSortData}
          price={price}
        />
      )}
    </>
  );
};

export default InfoCards;
