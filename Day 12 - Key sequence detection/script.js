"use strict";

const pressed = [];
const secretCode = "abc";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("").includes(secretCode)) {
    alert("Secret code entered!");
  }
  //   console.log(pressed);
});
