import { COLOR_MODELS, COLOR_PAGE } from "./vars.js";

// определение массива элементов и связей между ними
const nodeDataArray = [
  {
    key: "App.py",
    description:
      "Основной файл<br> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque harum dignissimos quis ad officiis eaque voluptates odit soluta, unde nobis ut iste accusamus distinctio aliquam consequatur iure voluptas enim nisi.",
    color: COLOR_MODELS,
  },
  { key: "config.py", color: COLOR_MODELS },
  { key: "database.py", color: COLOR_MODELS },
  { key: "date_recovery.py", color: COLOR_MODELS },
  { key: "delayedexecution.py", color: COLOR_MODELS },
  { key: "operation_scenario.py", color: COLOR_MODELS },
  { key: "page_info.py", color: COLOR_PAGE },
  { key: "page_input_sum.py", color: COLOR_PAGE },
];

const linkDataArray = [
  { from: "App.py", to: "config.py" },
  { from: "config.py", to: "database.py" },
  { from: "database.py", to: "date_recovery.py" },
  { from: "date_recovery.py", to: "delayedexecution.py" },
  { from: "delayedexecution.py", to: "operation_scenario.py" },
  { from: "operation_scenario.py", to: "page_info.py" },
  { from: "operation_scenario.py", to: "page_input_sum.py" },
];

export default [nodeDataArray, linkDataArray];
