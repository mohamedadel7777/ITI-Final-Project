<<<<<<< HEAD
import React from "react";
import next from "../../images/next.png";
const LeftButton = (onClick, onDisable) => {
  return (
    <img
      src={next}
      width="35px"
      onClick={onClick}
      onDisable={onDisable}
      height="35px"
      style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
    />
  );
};

export default LeftButton;
=======
import React from 'react'
import next from '../../images/next.png'
const LeftButton = ( onClick, onDisable ) => {
    return (
        <img
            src={next}
            alt=""
            width="35px"
            onClick={onClick}
            onDisable={onDisable}
            height="35px"
            style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
        />
    )
}

export default LeftButton
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
