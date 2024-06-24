import { usePomodoro } from "../../context/PomodoroContextApp";
import { useTimer } from "../../hooks/useTimer";

function Timer() {
  const { pomodoro } = usePomodoro();
  const { min, sec } = useTimer(pomodoro.timeleft);

  return (
    <p className="time">
      <span className="time__minutes">{min}</span>:
      <span className="time__seconds">{sec}</span>
    </p>
  );
}
export { Timer };
