import React, { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
import BaseEcharts from "../../components/baseEcharts";
import { ECOption } from "../../components/baseEcharts/config";

const BaseBarChart: React.FC = () => {
  // const navigate = useNavigate();
  const dataSource1 = useMemo(
    () => [
      ["product", "2015", "2016", "2017"],
      ["Matcha Latte", 43.3, 85.8, 93.7],
      ["Milk Tea", 83.1, 73.4, 55.1],
      ["Cheese Cocoa", 86.4, 65.2, 82.5],
      ["Walnut Brownie", 72.4, 53.9, 39.1],
    ],
    []
  );

  // 基础柱状图
  const barOption1: ECOption = useMemo(
    () => ({
      dataset: {
        // 提供一份数据。
        source: dataSource1,
      },
      legend: {
        // orient: "vertical",
        // show: true,
      },
      tooltip: {
        show: true,
      },
      xAxis: [{ type: "category", gridIndex: 0 }],
      yAxis: [{ gridIndex: 0 }],
      grid: [{ bottom: "40%" }],
      series: [
        { type: "bar", seriesLayoutBy: "row" },
        { type: "bar", seriesLayoutBy: "row" },
        { type: "bar", seriesLayoutBy: "row" },
        { type: "bar", seriesLayoutBy: "row" },
        // 同数据源使用折线图
        { type: "line", seriesLayoutBy: "column", smooth: true },
        { type: "line", seriesLayoutBy: "column", smooth: true },
        { type: "line", seriesLayoutBy: "column", smooth: true },
        // 同数据源使用饼图
        {
          type: "pie",
          seriesLayoutBy: "row",
          xAxisIndex: 1,
          yAxisIndex: 1,
          radius: "20%",
          center: ["25%", "90%"],
        },
        {
          type: "pie",
          seriesLayoutBy: "column",
          xAxisIndex: 2,
          yAxisIndex: 2,
          radius: "20%",
          center: ["70%", "90%"],
        },
      ],
    }),
    [dataSource1]
  );

  const dataSource2 = useMemo(
    () => [
      // seriesLayout数据
      ["weekday", "Mon", "Tue", "Wed", "Thu", "Fri"],
      ["zz", 23, 14, 55, 77, 99],
      ["xx", 24, 88, 42, 54, 75],
      ["cc", 32, 90, 43, 87, 21],
      ["vv", 51, 24, 88, 42, 54],
      ["bb", 77, 14, 55, 77, 99],
    ],
    []
  );

  // 基础柱状图数据集写法
  const barOption2: ECOption = useMemo(
    () => ({
      dataset: {
        source: dataSource2,
      },
      legend: {},
      xAxis: { type: "category" },
      yAxis: {},
      tooltip: {
        show: true,
      },
      series: [
        {
          name: "zz",
          type: "bar",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 1 },
        },
        {
          name: "xx",
          type: "bar",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 2 },
        },
        {
          name: "cc",
          type: "bar",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 3 },
        },
        {
          name: "vv",
          type: "bar",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 4 },
        },
        {
          name: "bb",
          type: "bar",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 5 },
        },
        // 同数据源使用折线图
        {
          name: "zz",
          type: "line",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 1 },
        },
        {
          name: "line2",
          type: "line",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 2 },
        },
        {
          name: "line3",
          type: "line",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 3 },
        },
        {
          name: "line4",
          type: "line",
          lineStyle: {
            color: "red",
            width: 4,
            type: "dotted",
          },
          seriesLayoutBy: "row",
          encode: { x: 0, y: 4 },
        },
        {
          name: "line5",
          type: "line",
          lineStyle: {
            color: "green",
            width: 4,
            type: "dashed",
          },
          seriesLayoutBy: "row",
          encode: { x: 0, y: 5 },
        },
      ],
    }),
    [dataSource2]
  );

  // 堆叠柱状图
  const barOption3: ECOption = useMemo(
    () => ({
      dataset: {
        source: dataSource2,
      },
      legend: {},
      xAxis: { type: "category" },
      yAxis: {},
      tooltip: {
        show: true,
      },
      series: [
        {
          name: "zz",
          type: "bar",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 1 },
          stack: "day",
        },
        {
          name: "xx",
          type: "bar",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 2 },
          stack: "day",
        },
        {
          name: "cc",
          type: "bar",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 3 },
        },
        {
          name: "vv",
          type: "bar",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 4 },
        },
        {
          name: "bb",
          type: "bar",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 5 },
        },
        {
          name: "zz",
          type: "line",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 1 },
          stack: "x",
          areaStyle: {},
        },
        {
          name: "xx",
          type: "line",
          seriesLayoutBy: "row",
          encode: { x: 0, y: 2 },
          stack: "x",
          areaStyle: {},
        },
        {
          type: "pie",
          seriesLayoutBy: "column",
          roseType: "area",
          center: ["20%", "25%"],
          radius: "30%",
        },
      ],
    }),
    [dataSource2]
  );
  const initRandomArray = (index: number) => {
    let randomArray: number[] = [];
    for (let i = 0; i < index; i++) {
      randomArray.push(Math.round(Math.random() * 200));
    }
    return randomArray;
  };

  const initRandom = initRandomArray(5) || [];
  const [dataSource3, setDataSource3] = useState<number[]>(initRandom);

  // 动态排序图
  const barOption4 = useMemo(
    () => ({
      xAxis: {
        max: "dataMax",
      },
      yAxis: {
        type: "category",
        data: ["A", "B", "C", "D", "E"],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        // 只有3个bar会被展示
        max: 2,
      },
      series: [
        {
          realtimeSort: true,
          name: "data",
          type: "bar",
          data: dataSource3,
          label: {
            show: true,
            position: "right",
            valueAnimation: true,
          },
        },
      ],
      legend: {
        show: true,
      },
      animationDuration: 3000,
      animationDurationUpdate: 3000,
      animationEasing: "linear",
      animationEasingUpdate: "linear",
    }),
    [dataSource3]
  );

  const updateData3 = () => {
    if (Math.random() > 0.9) {
      setDataSource3((pre) => {
        return pre.map((item) => (item += Math.round(Math.random() * 100)));
      });
    } else {
      setDataSource3((pre) => {
        return pre.map((item) => (item += Math.round(Math.random() * 50)));
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(updateData3, 3000);
    return () => clearInterval(interval);
  }, []);

  const scatterOption = useMemo(
    () => ({
      dataset: {
        // 提供一份数据。
        source: dataSource1,
      },
      legend: {},
      tooltip: {
        show: true,
      },
      xAxis: { type: "category" },
      yAxis: {},
      series: [
        { type: "scatter", seriesLayoutBy: "row" },
        { type: "scatter", seriesLayoutBy: "row" },
        { type: "scatter", seriesLayoutBy: "row" },
      ],
    }),
    [dataSource1]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>基础柱状图</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <BaseEcharts options={barOption1} />
        <BaseEcharts options={barOption2} />
      </div>
      <h2>堆叠柱状图</h2>
      <b style={{ color: "red" }}>表现数据之和的变化</b>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <BaseEcharts options={barOption3} />
      </div>
      <h2>动态排序柱状图</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <BaseEcharts options={barOption4} />
      </div>
      <h2>散点图</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <BaseEcharts options={scatterOption} />
      </div>
    </div>
  );
};

export default BaseBarChart;
