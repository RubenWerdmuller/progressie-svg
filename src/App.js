import CircularProgress from "./CircularProgress";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CircularProgress
        size={250}
        strokeWidth={20}
        percentage={25}
        color="green"
      />
    </div>
  );
}
