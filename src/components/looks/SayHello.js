import React from "react";
import { useSelector } from "react-redux";
import {sayHello} from "../helpers/lookHelper"



const SayHello = ({ comp_id }) => {
  const activeSprite = useSelector((state) => state.mid.activeChar);
  console.log(activeSprite);
  return (
    <div
      id={comp_id}
      className={`text-center rounded bg-purple-500 text-white p-2 my-2 text-sm cursor-pointer mx-auto w-full`}
      onClick={() => {
        console.log("--hello")
        sayHello(activeSprite);
      }}
    >
      Say Hello...
    </div>
  );
};
export default SayHello;
