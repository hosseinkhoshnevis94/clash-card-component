import React from "react";

export default function CardImage({ imgSrc }) {
  return (
    <>
      <div className="clash-card__image clash-card__image--barbarian">
        <img className="res" src={imgSrc} />
      </div>
    </>
  );
}
