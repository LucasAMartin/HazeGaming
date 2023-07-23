import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GameDisplay = () => (
  <div className="bg-gray-400 rounded-lg w-full h-full" />
);

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
      breakpoints={{ lg: 1200}}
      cols={{ lg: 16}}
      rowHeight={160}
      margin={[10, 10]}
      isDraggable={false}
      isBounded={true}
    >
      <div key="a">
        <GameDisplay />
      </div>
      <div key="b">
        <GameDisplay />
      </div>
      <div key="c">
        <GameDisplay />
      </div>
      <div key="d">
        <GameDisplay />
      </div>
      <div key="e">
        <GameDisplay />
      </div>
      <div key="f">
        <GameDisplay />
      </div>
      <div key="g">
        <GameDisplay />
      </div>
      <div key="h">
        <GameDisplay />
      </div>
      <div key="i">
        <GameDisplay />
      </div>
      <div key="j">
        <GameDisplay />
      </div>
      <div key="k">
        <GameDisplay />
      </div>
      <div key="l">
        <GameDisplay />
      </div>
      <div key="m">
        <GameDisplay />
      </div>
      <div key="n">
        <GameDisplay />
      </div>
      <div key="o">
        <GameDisplay />
      </div>
      <div key="p">
        <GameDisplay />
      </div>
      <div key="q">
        <GameDisplay />
      </div>
      <div key="r">
        <GameDisplay />
      </div>
      <div key="s">
        <GameDisplay />
      </div>
      <div key="t">
        <GameDisplay />
      </div>
      <div key="u">
        <GameDisplay />
      </div>
      <div key="v">
        <GameDisplay />
      </div>
      <div key="w">
        <GameDisplay />
      </div>
      <div key="x">
        <GameDisplay />
      </div>
      <div key="y">
        <GameDisplay />
      </div>
      <div key="z">
        <GameDisplay />
      </div>
    </ResponsiveGridLayout>
  );
};

export default Grid;
