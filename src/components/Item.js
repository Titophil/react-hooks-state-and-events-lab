import React, {useState} from "react";

function Item({ name, category }) {
  const[isAdded, setIsAdded]=useState(false)

  function handleClick(){
    setIsAdded((added)=> !added)
  }
  return (
    <li className={isAdded? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {isAdded? "Remove": "add"} onClick={handleClick}>Add to Cart
        {isAdded? "Remove From Cart": "Add to cart"}

      </button>
    </li>
  );
}

export default Item;
