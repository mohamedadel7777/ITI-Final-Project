<<<<<<< HEAD
import React from "react";
import prev from "../../images/prev.png";
const RightButton = (onClick, onDisable) => {
  return (
    <img
      src={prev}
      alt=""
      width="35px"
      onClick={onClick}
      onDisable={onDisable}
      height="35px"
      style={{ float: "right", marginTop: "220px", cursor: "pointer" }}
    />
  );
};

export default RightButton;
=======
import React from 'react'
import prev from '../../images/prev.png'
const RightButton = ( onClick, onDisable ) => {
    return (
        <img
            src={prev}
            alt=""
            width="35px"
            onClick={onClick}
            onDisable={onDisable}
            height="35px"
            style={{ float: "right", marginTop: "220px", cursor: "pointer" }}
        />
    )
}


export default RightButton
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
