import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import LargeTile from "./LargeTile";
import MediumTile from "./MediumTile";
import SmallTile from "./SmallTile";

const ResponsiveGridLayout = WidthProvider(Responsive);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const gameTitles = [
  "Red Dead Redemption",
  "Grand Theft Auto",
  "The Witcher 3",
  "Tomb Raider",
  "Mass Effect",
  "Skyrim",
];
shuffleArray(gameTitles);

const generateDivs = (layout) => {
  let largeTileCount = 0;
  let mediumTileCount = 0;
  let smallTileCount = 0;
  return layout.map((item) => (
    <div key={item.i}>
      {item.h >= 2 ? (
        <>
          <LargeTile gameTitle={gameTitles[largeTileCount]} />
          {largeTileCount++}
        </>
      ) : item.w !== 6 ? (
        <>
          <SmallTile gameTitle={gameTitles[smallTileCount]} />
          {smallTileCount++}
        </>
      ) : (
        <>
          <MediumTile gameTitle={gameTitles[mediumTileCount]} />
          {mediumTileCount++}
        </>
      )}
    </div>
  ));
};

const Grid = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 2 },
    { i: "b", x: 6, y: 0, w: 6, h: 1 },
    { i: "c", x: 6, y: 1, w: 6, h: 1 },
    { i: "d", x: 12, y: 0, w: 2, h: 1 },
    { i: "e", x: 12, y: 1, w: 2, h: 1 },
    { i: "f", x: 0, y: 3, w: 6, h: 1 },
    { i: "g", x: 6, y: 3, w: 2, h: 1 },
    { i: "h", x: 0, y: 4, w: 6, h: 1 },
    { i: "i", x: 6, y: 4, w: 2, h: 1 },
    { i: "j", x: 8, y: 2, w: 6, h: 2 },
    { i: "k", x: 0, y: 7, w: 8, h: 2 },
    { i: "l", x: 8, y: 7, w: 6, h: 2 },
    { i: "m", x: 0, y: 9, w: 6, h: 2 },
    { i: "n", x: 6, y: 9, w: 6, h: 1 },
    { i: "o", x: 12, y: 9, w: 2, h: 1 },
    { i: "p", x: 6, y: 10, w: 6, h: 1 },
    { i: "q", x: 12, y: 10, w: 2, h: 1 },
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 900 }}
      cols={{ lg: 14 }}
      margin={[10, 10]}
      rowHeight={160}
      isBounded={true}
      isResizable={false}
      useCSSTransforms={true}
      allowOverlap={false}
      resizeHandle={false}
    >
      {generateDivs(layout)}
    </ResponsiveGridLayout>
  );
};

export default Grid;
