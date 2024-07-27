import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";

const motionHelperList = [
  "MOVE",
  "TURN_CLOCKWISE",
  "TURN_ANTI_CLOCKWISE",
  "GOTO",
  "MOVE_Y",
];

const lookHelperList = [
  "SAYHELLO",
  "THINK",
  "SHOW",
  "HIDE"
];

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
        {" "}
        {"Motion"}{" "}
      </div>
      <Droppable
        droppableId="motion"
        type="COMPONENT"
        isDropDisabled={false}
        isCombineEnabled={true}
      >
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {motionHelperList.map((x, i) => {
              return (
                <Draggable draggableId={x} index={i} type="COMPONENT" key={i}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {getComponent(x)}
                    </div>
                  )}
                </Draggable>
              );
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>


      <div className="bg-red-500 text-white font-bold py-2 px-4 rounded">
        {" "}
        {" "}
        {"Looks"}{" "}
      </div>
      <Droppable
        droppableId="looks"
        type="COMPONENT"
        isDropDisabled={false}
        isCombineEnabled={true}
      >
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="grid grid-cols-2 gap-2">
            {lookHelperList.map((x, i) => {
              return (
                <Draggable draggableId={x} index={i} type="COMPONENT" key={i}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {getComponent(x)}
                    </div>
                  )}
                </Draggable>
              );
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
