import React from "react";
import State from "./State";

export default function UnitStates({ unit, name }) {
  const content = unit.map((item,index) => (
    <State state={item.state} key={index}value={item.value}></State>
  ));
  return (
    <div
      className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}
    >
      {content}
    </div>
  );
}
