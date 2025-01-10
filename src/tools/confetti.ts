import confetti from "canvas-confetti";
const scalar = 2;
const unicorn = confetti.shapeFromText({ text: "🧧", scalar });

const defaults = {
  zIndex: 100000,
  spread: 360,
  ticks: 60,
  gravity: 0,
  decay: 0.96,
  startVelocity: 20,
  shapes: [unicorn],
  scalar,
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 30,
  });

  confetti({
    ...defaults,
    particleCount: 5,
    flat: true,
  });

  confetti({
    ...defaults,
    particleCount: 15,
    scalar: scalar / 2,
    shapes: ["circle"],
  });
}

function shootConfetti() {
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
}

export default shootConfetti;