import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import LargeTile from "./LargeTile";
import MediumTile from "./MediumTile";
import SmallTile from "./SmallTile";

const ResponsiveGridLayout = WidthProvider(Responsive);

const generateDivs = (layout) => {
  return layout.map((item) => (
    <div key={item.i}>
      {item.w === 6 ? <MediumTile /> : item.w !== 8 ? <SmallTile /> : <LargeTile />}
    </div>
  ));
};



const Grid = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 8, h: 2 },
    { i: "b", x: 8, y: 0, w: 8, h: 1 },
    { i: "c", x: 8, y: 1, w: 4, h: 1 },
    { i: "d", x: 12, y: 1, w: 4, h: 1 },
    { i: "e", x: 8, y: 1, w: 4, h: 1 },
    { i: "f", x: 12, y: 1, w: 4, h: 1 },
    { i: "g", x: 0, y: 2, w: 6, h: 1 },
    { i: "h", x: 6, y: 2, w: 2, h: 1 },
    { i: "i", x: 8, y: 2, w: 4, h: 2 },
    { i: "j", x: 12, y: 2, w: 4, h: 2 },
    { i: "k", x: 0, y: 3, w: 6, h: 1 },
    { i: "l", x: 6, y: 3, w: 2, h: 1 },
    { i: "m", x: 0, y: 4, w: 4, h: 1 },
    { i: "n", x: 4, y: 4, w: 4, h: 1 },
    { i: "o", x: 0, y: 5, w: 8, h: 2 },
    { i: "p", x: 8, y: 5, w: 8, h: 1 },
    { i: "q", x: 8, y: 6, w: 4, h: 1 },
    { i: "r", x: 12, y: 6, w: 4, h: 1 },
    { i: "s", x: 8, y: 6, w: 4, h: 1 },
    { i: "t", x: 12, y: 6, w: 4, h: 1 },
    { i: "u", x: 0, y: 7, w: 6, h: 1 },
    { i: "v", x: 6, y: 7, w: 2, h: 1 },
    { i: "w", x: 8, y: 7, w: 4, h: 2 },
    { i: "x", x: 12, y: 7, w: 4, h: 2 },
    { i: "y", x: 0, y: 8, w: 6, h: 1 },
    { i: "z", x: 6, y: 8, w: 2, h: 1 },
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout}}
      breakpoints={{ lg: 900}}
      cols={{ lg: 16}}
      rowHeight={160}
      isDraggable={false}
      isBounded={true}
    >
      {generateDivs(layout)}
    </ResponsiveGridLayout>
  );
};

export default Grid;
