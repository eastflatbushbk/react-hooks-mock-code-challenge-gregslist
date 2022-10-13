import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({card , onDelete }) {

  
  
  const displayCards = card.map((item)=>(
    <ListingCard  card={item} key={item.id}
      onDeleteCard={onDelete} 
      />
  ))

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {displayCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
