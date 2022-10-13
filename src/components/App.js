import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [card , setCard] = useState([])
  const [search , setSearch] = useState('')
  
  useEffect(()=>{
    fetch("http://localhost:6001/listings")
     .then((resp)=> resp.json())
     .then((card) => setCard(card))
  },[])

  function handleDelete(deletedItem){
    const updatedDisplay = card.filter((item) => item.id !== deletedItem.id)
    setCard(updatedDisplay)
  }
 
  const displayListings = card.filter((item)=>
     item.description.toLowerCase().includes(search.toLowerCase())
  )
  

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer onDelete ={handleDelete} card={displayListings}/>
    </div>
  );
}

export default App;
