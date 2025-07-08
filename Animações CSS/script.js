const container = document.getElementById('container');
const box = document.getElementById('box');
const animationName = document.getElementById('animationName');
const animationDuration = document.getElementById('animationDuration');
const animationTimingFunction = document.getElementById('animationTimingFunction');

function updateAnimation() {
  box.style.animation = `${animationName.value} ${animationDuration.value}s ${animationTimingFunction.value} infinite`;
}

animationName.addEventListener('change', updateAnimation);
animationDuration.addEventListener('input', updateAnimation);
animationTimingFunction.addEventListener('change', updateAnimation);

updateAnimation();

const flexDirection = document.getElementById('flexDirection');
const justifyContent = document.getElementById('justifyContent');
const alignItems = document.getElementById('alignItems');

function updateFlex() {
  container.style.flexDirection = flexDirection.value;
  container.style.justifyContent = justifyContent.value;
  container.style.alignItems = alignItems.value;
}

flexDirection.addEventListener('change', updateFlex);
justifyContent.addEventListener('change', updateFlex);
alignItems.addEventListener('change', updateFlex);

updateFlex();