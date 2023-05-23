import React, { useState } from "react";
import Card from "./Card/Card";
import { GrPrevious, GrNext } from "react-icons/gr";
import './Slider.css'

export default function Slider({ data }) {
  const [heroes, setHeroes] = useState(data);
  const [item, setItem] = useState(0);
  const nextItem = () => {
    item === heroes.length - 1 ? setItem(0) : setItem(item + 1);
  };
  const prevItem = () => {
    item === 0 ? setItem(heroes.length - 1) : setItem(item - 1);
  };
  return (
    <>
      <div className="slide-container">
        <div className="wrapper">
          {heroes.length ? (
            <>
              <GrPrevious
                className="arrow prev"
                onClick={prevItem}
              ></GrPrevious>
              <Card datas={heroes[item]}></Card>
              <GrNext className="arrow next" onClick={nextItem}></GrNext>
            </>
          ) : (
            <div>loaing...</div>
          )}
        </div>
      </div>
    </>
  );
}
