import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-2 mt-3 mb-2">
        <h1 className="fs-3 text-center ">People</h1>
      </div>
      <div className="row p-5  text-muted ">
        <div className="col-6 p-5 text-center">
          <img
            src="media/devang.png"
            alt="Founder Logo"
            style={{ borderRadius: "100%", width: "55%" }}
          />
          <h4 className="mt-4">Devang Patel</h4>
          <h6>
          Founder, CEO
          </h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Devang bootstrapped and founded TradeOne in 2023 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            TradeOne has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a Full-stack Web Developer .
          </p>
          <p>
          Playing basketball is his zen.
          </p>
          <p>Connect on <a href="">Homepage</a>/ <a href=""> TradingQnA</a>  / <a href="">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
