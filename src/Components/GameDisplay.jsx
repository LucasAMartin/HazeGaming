import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


const ResponsiveGridLayout = WidthProvider(Responsive);

const GameDisplay = () => (
  <div className="bg-gray-400 rounded-lg w-full h-full" />
);

const Grid = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 8, h: 2 },
    { i: "b", x: 8, y: 0, w: 8, h: 2 },
    { i: "c", x: 0, y: 2, w: 4, h: 2 },
    { i: "d", x: 4, y: 2, w: 4, h: 2 },
    { i: "e", x: 8, y: 2, w: 4, h: 2 },
    { i: "f", x: 12, y: 2, w: 4, h: 2 },
    { i: "g", x: 0, y: 4, w: 2, h: 1 },
    { i: "h", x: 2, y: 4, w: 2, h: 1 },
    { i: "i", x: 4, y: 4, w: 2, h: 1 },
    { i: "j", x: 6, y: 4, w: 2, h: 1 }
  ];
  
  
return (
    
<ResponsiveGridLayout
className="layout"
layouts={{ lg : layout }}
breakpoints={{ lg :1200 }}
cols={{ lg :16 }}
rowHeight={160}
margin={[10 ,10 ]}
isBounded={true}
compactType={null}
>
<div key="a">
<GameDisplay />
</div>
<div key="c">
<GameDisplay />
</div>
<div key="d">
<GameDisplay />
</div>
<div key="b">
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

</ResponsiveGridLayout>
);
};

export default Grid;
