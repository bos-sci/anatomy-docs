import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Averages } from './CarbonMetrics';

interface LineChartProps {
  data: Averages[];
  yValue: 'carbon' | 'percent';
}

const SparkChart = (props: LineChartProps): JSX.Element => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(928);

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.innerHTML = '';
    }
    const height = width / 4 >= 32 ? width / 4 : 32;
    const marginTop = 4;
    const marginRight = 4;
    const marginBottom = 4;
    const marginLeft = 4;

    // Declare the x (horizontal position) scale.
    const x = d3
      .scaleUtc(d3.extent(props.data, (d) => new Date(d.date)) as [Date, Date], [marginLeft, width - marginRight])
      .nice();

    // Declare the y (vertical position) scale.
    const y = d3
      .scaleLinear(d3.extent(props.data, (d) => d[props.yValue]) as [number, number], [
        height - marginBottom,
        marginTop
      ])
      .nice();

    // Declare the line generator.
    const line = d3
      .line<Averages>()
      .x((d) => x(new Date(d.date)))
      .y((d) => y(d[props.yValue]));

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height]);

    // Append a path for the line.
    svg.append('path').attr('class', 'line').attr('fill', 'none').attr('stroke-width', 1.5).attr('d', line(props.data));
  }, [props.data, props.yValue, width]);

  useEffect(() => {
    const resizeChart = () => {
      if (containerRef.current?.clientWidth) {
        setWidth(containerRef.current?.clientWidth);
      }
    };

    resizeChart();

    window.addEventListener('resize', resizeChart);
    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  return (
    <div ref={containerRef} className="docs-chart-container">
      <svg ref={svgRef} className="docs-spark-chart" />
    </div>
  );
};

export default SparkChart;
