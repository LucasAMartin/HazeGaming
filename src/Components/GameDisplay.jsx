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
      {item.h >= 2 ? <LargeTile /> : item.w !== 6 ? <SmallTile /> : <MediumTile />}
    </div>
  ));
};



const Grid = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 8, h: 2 },
    { i: "b", x: 8, y: 0, w: 6, h: 1 },
    { i: "c", x: 8, y: 1, w: 6, h: 1 },
    { i: "d", x: 0, y: 3, w: 6, h: 1 },
    { i: "e", x: 6, y: 3, w: 2, h: 1 },
    { i: "f", x: 0, y: 4, w: 6, h: 1 },
    { i: "g", x: 6, y: 4, w: 2, h: 1 },
    { i: "h", x: 8, y: 2, w: 6, h: 2 },
    { i: "i", x: 0, y: 7, w: 8, h: 2 },
    { i: "j", x: 8, y: 7, w: 6, h: 2 },
    { i: "k", x: 0, y: 7, w: 2, h: 1 },
    { i: "l", x: 0, y: 8, w: 2, h: 1 },
    { i: "m", x: 2, y: 7, w: 6, h: 1 },
    { i: "n", x: 2, y: 8, w: 6, h: 1 },
    { i: "o", x: 8, y: 7, w: 2, h: 1 },
    { i: "p", x: 8, y: 8, w: 2, h: 1 },
    { i: "1", x: 10, y: 8, w: 4, h: 2 },

  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout}}
      breakpoints={{ lg: 900}}
      cols={{ lg: 14}}
      margin={[10,10]}
      rowHeight={160}
      isBounded={true}
    >
      {generateDivs(layout)}
    </ResponsiveGridLayout>
  );
};

export default Grid;
