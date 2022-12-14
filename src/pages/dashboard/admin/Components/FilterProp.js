import React from "react";

const FilterProp = ({price}) => {
 
  return (
    <div>
      <div className="filter-prop">
        <p>New To Old</p>
        <p>Old To New</p>
       {price == true && (
        <>
        <p>Price Low To High</p>
        <p>Price High To Low</p>
        </>

      )}
      </div>
    </div>
  );
};

export default FilterProp;
