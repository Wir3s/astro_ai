
export function updateGradient() {
  const currentTime = new Date().getHours();
  let yellowPercent = 1 + (currentTime % 10);
  let orangePercent = 30 + (currentTime % 10);
  let pinkPercent = 50 + (currentTime % 10);

  const newGradient = `radial-gradient(at 0% 100%, yellow ${yellowPercent}%, orange ${orangePercent}%, pink ${pinkPercent}%, darkblue 100%)`;

  document.documentElement.style.setProperty(
    "--primary-background",
    newGradient
  );
}
