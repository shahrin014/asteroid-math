export const useCanControlUsingKeyboard = () => {
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
    if (event.key === " ") {
      controls.action01 = true;
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
    if (event.key === " ") {
      controls.action01 = false;
    }
  });

  return {
    controls,
    isControlled() {
      return (
        this.controls.down ||
        this.controls.up ||
        this.controls.left ||
        this.controls.right
      );
    },
  };
};
