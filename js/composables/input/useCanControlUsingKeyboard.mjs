export const useCanControlUsingKeyboard = (entity) => {
  const controls = {
    up: false,
    down: false,
    left: false,
    right: false,
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      controls.left = true;
    }
    if (event.key === "ArrowRight") {
      controls.right = true;
    }
    if (event.key === "ArrowUp") {
      controls.up = true;
    }
    if (event.key === "ArrowDown") {
      controls.down = true;
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowLeft") {
      controls.left = false;
    }
    if (event.key === "ArrowRight") {
      controls.right = false;
    }
    if (event.key === "ArrowUp") {
      controls.up = false;
    }
    if (event.key === "ArrowDown") {
      controls.down = false;
    }
  });

  return {
    controls,
  };
};
