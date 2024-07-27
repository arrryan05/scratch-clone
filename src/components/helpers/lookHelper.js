export const sayHello = (activeSprite) => {
  console.log(activeSprite + "hello");

  const helloElement = document.getElementById(activeSprite + "hello");
  const thinkElement = document.getElementById(activeSprite + "think");
  helloElement.style.display = "inline-block";
  thinkElement.style.display = "none";
};

export const think = (activeSprite) => {
  console.log(activeSprite + "think");

  const helloElement = document.getElementById(activeSprite + "hello");
  const thinkElement = document.getElementById(activeSprite + "think");
  helloElement.style.display = "none";
  thinkElement.style.display = "inline-block";
};

export const changeVisibility = (activeSprite, isShow) => {
  const spriteElement = document.getElementById(activeSprite);
  spriteElement.style.visibility = isShow ? "visible" : "hidden";
};
