import React from "react";

export default function Support(props) {
  return (
    <div className="support" id="body">
      <p className="col-12" id="title">
        Help Others Hear With Ruby
      </p>
      <p className="col-12">
        Thank you for your interest in supporting the Hear With Ruby fund.
      </p>
      <ul className="col-12">
        To support our fund, from which 100% of gifts are donated to families
        with hearing imapired children:
        <div className="col-12">
          <li>
            Send a check, made out to Lindsay Ganci, memo "Hear With Ruby", to
            <br />
            35 5th Avenue, <br /> Port Washington, NY 10015
          </li>
          <li>Venmo @Lindsay-Ganci with memo "Hear With Ruby Fund</li>
          <li>Zelle lindsay.ganci@gmail.com with memo "Hear With Ruby Fund</li>
        </div>
      </ul>
      <p className="col-12" onClick={() => props.closePopUp()}>close</p>
    </div>
  );
}
