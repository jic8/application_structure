import dataBase from "./dataBase.js";
import { COLOR_TEXT, COLOR_ARROW } from "./vars.js";

const [nodeDataArray, linkDataArray] = dataBase;

// создание диаграммы
const $ = go.GraphObject.make;
const diagram = new go.Diagram("diagram", {
  "draggingTool.dragsTree": true,
  "commandHandler.deletesTree": true,
  layout: $(go.TreeLayout, {
    angle: 90,
    arrangement: go.TreeLayout.ArrangementFixedRoots,
  }),
  "undoManager.isEnabled": true,
});

// определение шаблона для элементов
diagram.nodeTemplate = $(
  go.Node,
  "Auto",
  { cursor: "pointer" },
  $(go.Shape, "RoundedRectangle", new go.Binding("fill", "color")),
  $(
    go.TextBlock,
    { margin: 8, stroke: COLOR_TEXT },
    new go.Binding("text", "key")
  )
);

// установка модели данных для диаграммы
diagram.model = new go.GraphLinksModel({
  nodeDataArray: nodeDataArray,
  linkDataArray: linkDataArray,
});

// установка настройки для стрелок
diagram.linkTemplate = $(
  go.Link,
  $(go.Shape, { stroke: COLOR_ARROW, strokeWidth: 2 }),
  $(go.Shape, { toArrow: "Standard", fill: COLOR_ARROW, stroke: null })
);

/* добавление обработчика события ObjectSingleClicked
  для вызова пояснительной бригады */
diagram.addDiagramListener("ObjectSingleClicked", (e) => {
  const part = e.subject.part;
  if (part instanceof go.Node) {
    aside.classList.remove("hide");
    title.innerHTML = part.data.key;
    description.innerHTML = part.data.description;
  }
});

// Пояснительная бригада
const aside = document.querySelector("aside.description");
const title = aside.querySelector(".description__file-name");
const description = aside.querySelector(".description__content");
const closeButton = aside.querySelector(".description__to-right");

closeButton.addEventListener("click", () => aside.classList.add("hide"));
