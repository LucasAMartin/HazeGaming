import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GameDisplay = () => (
  <div className="bg-gray-400 rounded-lg w-full h-full" />
);

const MyFirstGrid = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
    { i: "d", x: 0, y: 2, w: 2, h: 2 },
    { i: "e", x: 2, y: 2, w: 2, h: 2 },
    { i: "f", x: 4, y: 2, w: 1, h: 1 },
    { i: "g", x: 4, y: 3, w: 1, h: 1 },
    { i: "h", x: 5, y: 0, w: 1, h: 4 },
    { i: "i", x: 6, y: 0, w: 2, h: 4 },
    { i: "j", x: 8, y: 0, w: 4, h: 4 },
    { i:"k",x :0 ,y :4 ,w :12 ,h :1}
    
  
];
  
return (
    
<ResponsiveGridLayout
className="layout"
layouts={{ lg : layout }}
breakpoints={{ lg :1200 }}
cols={{ lg :12 }}
rowHeight={30}
margin={[10 ,10 ]}
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

</ResponsiveGridLayout>
);
};

export default MyFirstGrid;
