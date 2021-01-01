import React from "react";

export default function Apply(props) {
  return (
    <div className="support" id="body">
      <p className="col-12" id="title">
        Apply for Support
      </p>
      <p className="col-12">
        No one should struggle to afford the costs of hearing impairment.
      </p>
      <p className="col-12">
        In need of support from the Hear With Ruby fund? <br /> Please {" "}
        <a href="mailto:HearWithRuby@gmail.com">email us</a> to be connected to
        our fund.
      </p>
      <p className="col-12" onClick={() => props.closePopUp()}>close</p>
    </div>
  );
}
