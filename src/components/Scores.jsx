import { SCORE_1, SCORE_2, SCORE_3, SCORE_4 } from "../helpers/Colors";
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";
import { useLocation } from "react-router-dom";
import Score from "./Score";

const Scores = ({ score }) => {
  const { setSingleBook, singleBook } = useContext(BookContext);

  const [activeNumber, setActiveNumber] = useState(0);
  useEffect(() => {
    setActiveNumber(parseInt(score));
  }, [score]);

  const onScoreClick = (event) => {
    setActiveNumber(parseInt(event.target.id));
    setSingleBook({ ...singleBook, score: `${event.target.id}` });
  };

  return (
    <div className="container score-boxes">
      <div className="row mb-2 score-label" dir="rtl">
        <h4 className="h4 text-black" style={{ fontWeight: "200" }}>
          نمره کتاب:
        </h4>
      </div>
      <div className="row text-black" style={{ fontWeight: "bold" }}>
        <div className="col-lg-3 col-6 p-1">
          <Score
            score={1}
            activeNumber={activeNumber}
            onScoreClick={onScoreClick}
            color={SCORE_1}
          />
        </div>
        <div className="col-lg-3 col-6 p-1">
          <Score
            score={2}
            activeNumber={activeNumber}
            onScoreClick={onScoreClick}
            color={SCORE_2}
          />
        </div>
        <div className="col-lg-3 col-6 p-1">
          <Score
            score={3}
            activeNumber={activeNumber}
            onScoreClick={onScoreClick}
            color={SCORE_3}
          />
        </div>
        <div className="col-lg-3 col-6 p-1">
          <Score
            score={4}
            activeNumber={activeNumber}
            onScoreClick={onScoreClick}
            color={SCORE_4}
          />
        </div>
      </div>
    </div>
  );
};

export default Scores;
