import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Averages } from './CarbonMetrics';

interface LineChartProps {
  data: Averages[];
  yValue: 'carbon' | 'percent';
}

const LineChart = (props: LineChartProps): JSX.Element => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(928);

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.innerHTML = '';
    }
    const height = width / 2 >= 200 ? width / 2 : 200;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    // Declare the x (horizontal position) scale.
    const x = d3
      .scaleUtc(d3.extent(props.data, (d) => new Date(d.date)) as [Date, Date], [marginLeft, width - marginRight])
      .nice();

    // Declare the y (vertical position) scale.
    const y = d3
      .scaleLinear(
        [0, props.yValue === 'percent' ? 100 : (d3.max(props.data, (d) => d[props.yValue]) as number)],
        [height - marginBottom, marginTop]
      )
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

    // Add the x-axis.
    svg
      .append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );

    // Add the y-axis, remove the domain line, add grid lines and a label.
    svg
      .append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(height / 40))
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .selectAll('.tick line')
          .clone()
          .attr('x2', width - marginLeft - marginRight)
          .attr('stroke-opacity', 0.1)
      );

    // Append a path for the line.
    svg.append('path').attr('class', 'line').attr('fill', 'none').attr('stroke-width', 1.5).attr('d', line(props.data));

    svg
      .append('g')
      .attr('class', 'points')
      .selectAll('circle')
      .data(props.data)
      .enter()
      .append('circle')
      .attr('class', 'point')
      .attr('cx', (d) => x(new Date(d.date)))
      .attr('cy', (d) => y(d[props.yValue]))
      .attr('r', 4);
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
      <svg ref={svgRef} className="docs-line-chart" />
    </div>
  );
};

export default LineChart;
