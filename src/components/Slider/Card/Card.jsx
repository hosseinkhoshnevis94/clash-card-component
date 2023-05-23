import React from "react";
import CardImage from "./CardImage";
import CardItem from "./CardItem";
import UnitStates from './UnitStates'
export default function ({ datas }) {
  const {img,level,name,description,units} = datas

  return (
    <>
      <div className="clash-card barbarian">
        <CardImage imgSrc={img}></CardImage>
        <CardItem type={"clash-card__level "}>{level}</CardItem>
        <CardItem type={"clash-card__unit-name"}>T{name}</CardItem>
        <CardItem type={"clash-card__unit-description"}>{description}</CardItem>
        <UnitStates unit={units} name={name}></UnitStates>
      </div>
    </>
  );
}
