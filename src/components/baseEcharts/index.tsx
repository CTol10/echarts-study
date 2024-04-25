import React, { useCallback, useEffect, useRef, useState } from "react";
import * as echarts from "echarts/core";
import { ECOption } from "./config";

type Props = {
  options: ECOption; // 应该直接用ECOption就可以
  height?: string;
  width?: string;
  isLoading?: boolean;
};

const BaseEcharts: React.FC<Props> = (props) => {
  const { options, height = "300px", width = "600px", isLoading } = props;

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
    isLoading && newChart.showLoading();
    newChart.setOption(options, true);
    window.addEventListener("resize", handleResize);
    setChart(newChart);
  }, [chart, handleResize, options, isLoading]);

  useEffect(() => {
    const myChart = echarts.getInstanceByDom(chartRef?.current as HTMLElement);
    if (myChart) {
      !isLoading && chart?.hideLoading();
      myChart.setOption(options);
      return;
    }
    initEchart();
  }, [isLoading, options]);

  return <div ref={chartRef} style={{ height, width }}></div>;
};

export default BaseEcharts;
