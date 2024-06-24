export const useTimer = (timeleft) => {
  const min =
    Math.floor(timeleft / 60) < 10
      ? "0" + Math.floor(timeleft / 60)
      : Math.floor(timeleft / 60);
  const sec = timeleft % 60 < 10 ? "0" + (timeleft % 60) : timeleft % 60;
  return { min, sec };
};
