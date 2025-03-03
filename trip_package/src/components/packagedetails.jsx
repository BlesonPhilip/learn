import React from "react";

const ListItem = ({ item, isIncluded }) => {
  return (
    <li>
      {item}
      {isIncluded ? "✔" : "×"}
    </li>
  );
};

const PackageDetails = () => {
  return (
    <section>
      <h1>Kashmir Trip Package Details</h1>
      <ul>
        <ListItem item="Breakfast,Lunch & dinner" isIncluded={true} />
        <ListItem item="Accomodation in 3 star hotels" isIncluded={true} />
        <ListItem item="Flight tickets" isIncluded={false} />
      </ul>
    </section>
  );
};

export default PackageDetails;
