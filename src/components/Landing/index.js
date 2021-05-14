import React, { useRef, useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  const [btn, setBtn] = useState(false);
  const refWolverine = useRef(null);
  console.log(btn);
  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      setBtn(true);
    }, 3000);
  }, []);
  const setleftImg = () => {
    refWolverine.current.classList.add("leftImg");
  };
  const clearImg = () => {
    if (refWolverine.current.classList.contains("leftImg")) {
      refWolverine.current.classList.remove("leftImg");
    } else if (refWolverine.current.classList.contains("rightImg")) {
      refWolverine.current.classList.remove("rightImg");
    }
  };
  const setrightImg = () => {
    refWolverine.current.classList.add("rightImg");
  };

  const displayBtn = btn && (
    <Fragment>
      <div onMouseOver={setleftImg} onMouseOut={clearImg} className="leftBox">
        <Link className="btn-welcome" to="/signup">
          Inscription
        </Link>
      </div>
      <div className="rightBox" onMouseOver={setrightImg} onMouseOut={clearImg}>
        <Link className="btn-welcome" to="/login">
          Connexion
        </Link>
      </div>
    </Fragment>
  );
  return (
    <main ref={refWolverine} className="welcomePage">
      {displayBtn}
    </main>
  );
};

export default Landing;
