import React from 'react';
import * as d3 from 'd3';

export const useD3 = (renderChartFn, dependencies: any[]) => {
    const ref = React.useRef(null);
    dependencies.push(renderChartFn)
    dependencies.push(ref.current)
    React.useEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => {};
      }, dependencies);
    return ref;
}