import React from "react";
import Move from "./motion/Move";
import TurnClockWise from "./motion/TurnClockwise";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import GoToXY from "./motion/ToXY";
import MoveY from "./motion/MoveY";
import SayHello from "./looks/SayHello";
import Think from "./looks/Think";
import Hide from "./looks/Hide";
import Show from "./looks/Show";

// fetch components based on different keys
export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE":
      return <Move comp_id={id} />;
    case "TURN_CLOCKWISE":
      return <TurnClockWise comp_id={id} />;
    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise comp_id={id} />;
    case "GOTO":
      return <GoToXY comp_id={id} />;
    case "MOVE_Y":
      return <MoveY comp_id={id} />;
    case "SAYHELLO":
      return <SayHello comp_id={id}/>
    case "THINK":
      return <Think comp_id={id}/>
    case "HIDE":
      return <Hide comp_id={id}/>
    case "SHOW":
      return <Show comp_id={id}/>
    default:
      return React.null;
  }
};
