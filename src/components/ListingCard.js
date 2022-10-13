import React, { useState } from "react";

function ListingCard({card , onDeleteCard  }) {

  const [fave , setFav] = useState(true)

  function handleDeleteCard(){
    fetch(`http://localhost:6001/listings/${card.id}`,{
      method: "DELETE" , 
    })
     .then((resp) => resp.json())
     .then(()=> onDeleteCard(card))
  }
    
    function activateFave(){
       setFav(false)
    }
    function deActivateFave(){
      setFav(true)
    }
    
  return (
    <li className="card">
      <div className="image" >
        <span className="price">$0</span>
        <img src={card.image} alt={"description"} />
      </div>
      <div className="details" >
        {fave ? (
          <button className="emoji-button favorite active" onClick={activateFave}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={deActivateFave} >☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteCard}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
