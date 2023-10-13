import React from "react";

const FilterProp = (props) => {
  return (
    <div>
      <div
        className={
          props.featured
            ? "filter-prop"
            : props.featured1
            ? "filter-prop1"
            : "filter-prop2"
        }
      >
        <p
          className="cursor-pointer"
          onClick={() => {
            props.setSortData && props.setSortData("asc");
            props.setOpen(!props.open);
          }}
        >
          New To Old
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            props.setSortData && props.setSortData("dec");
            props.setOpen(!props.open);
          }}
        >
          Old To New
        </p>
        {!props.featured && (
          <>
            <p
              className="cursor-pointer"
              onClick={() => {
                props.setSortData && props.setSortData("high");
                console.log("click Price Low To High ");
                props.setOpen(!props.open);
              }}
            >
              Price Low To High
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                props.setSortData && props.setSortData("low");
                console.log("click Price High To Low ");
                props.setOpen(!props.open);
              }}
            >
              Price High To Low
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default FilterProp;
