import React, { useCallback, useEffect, useRef, useState } from "react";
import * as echarts from "echarts/core";

type Props = {
  options: any; // 应该直接用ECOption就可以
};

const BaseEcharts: React.FC<Props> = (props) => {
  const { options } = props;

  const chartRef = useRef<HTMLInputElement>(null);
  const [chart, setChart] = useState<echarts.ECharts>();

  const handleResize = useCallback(() => {
    if (chart) {
      chart.resize();
    }
  }, [chart]);

  // 定义初始化方法
  const initEchart = useCallback(() => {
    if (chart) {
      window.removeEventListener("resize", handleResize);
      chart?.dispose();
    }
    const newChart = echarts?.init(chartRef?.current as HTMLElement);
    newChart.setOption(options, true);
    window.addEventListener("resize", handleResize);
    setChart(newChart);
  }, [chart, handleResize, options]);

  useEffect(() => {
    const myChart = echarts.getInstanceByDom(chartRef?.current as HTMLElement);
    if (myChart) {
      myChart.setOption(options);
      return;
    }
    initEchart();
  }, [initEchart, options]);

  return <div ref={chartRef} style={{ height: "300px", width: "600px" }}></div>;
};

export default BaseEcharts;
