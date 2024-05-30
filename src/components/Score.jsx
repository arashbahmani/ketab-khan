import { SCORE_1 } from "../helpers/Colors";

const Score = ({ activeNumber, score, onScoreClick, color }) => {
  return (
    <div
      id={score.toString()}
      value={score.toString()}
      className="rounded-circle text-center"
      style={
        activeNumber === score
          ? {
              backgroundColor: color,
              width: "3.2rem",
              height: "3.2rem",
              fontFamily: "B NAZANIN",
              fontSize: "1.5rem",
              border: "3px solid",
              padding: "0.4rem",
              transform: "scale(1.3)",
            }
          : {
              backgroundColor: color,
              width: "3.2rem",
              height: "3.2rem",
              fontFamily: "B NAZANIN",
              fontSize: "1.5rem",
              padding: "0.5rem",
            }
      }
      onClick={onScoreClick}
    >
      {score}
    </div>
  );
};

export default Score;
