import React from "react";
import Support from "./support"
import Apply from "./apply"

export default class Help extends React.Component {
  state = {
    clicked: "",
  };

  closePopUp = () => {
    this.setState({
      clicked: ""
    })
  }

  render() {
    return (
      <div className={this.state.clicked !== "" && "fade"}>
        {this.state.clicked !== "" && (
          <div className="row popup">
            {this.state.clicked === "support" ? <Support closePopUp={this.closePopUp}/> : <Apply closePopUp={this.closePopUp}/>}
          </div>
        )}
        <div className="row help" id="body" >
          <p className="col-12">
            New York State, along with many others, does not require insurance
            companies to cover the expenses of hearing impairment. Thus,
            families with children with hearing loss pay, out of pocket, for
            hearing aids, hearing aid molds, batteries, cleaning supplies,
            personal FM/microphone systems, and more. We are exceptionally
            fortunate that, with the support of our family, we have been able to
            cover the costs associated with Ruby’s hearing loss. To be able to
            give our daughters what they need is a privilege and a blessing.
          </p>
          <p className="col-12">
            It is that blessing that motivates us to support all families with
            hearing impaired children to do the same.
          </p>
          <p className="col-12">
            For more information about hearing aid insurance laws by state,
            visit these websites:
          </p>
          <div className="col-10 link-container">
            <a
              href="https://www.hearingloss.org/hearing-help/financial-assistance/state-hearing-aid-insurance-laws/"
              target="_blank"
              rel="noopener noreferrer"
              className="col-6"
            >
              HearingLoss.org
            </a>
            <a
              href="https://www.asha.org/advocacy/state/issues/ha_reimbursement/"
              target="_blank"
              rel="noopener noreferrer"
              className="col-6"
            >
              American Speech-Language-Hearing Association
            </a>
          </div>
          <div className="col-12 link-container">
            <div
              className="col-6"
              onClick={() => {
                this.setState({
                  clicked: "apply",
                });
              }}
            >
              Apply for Support
            </div>
            <div
              styles={this.state.clicked !== "" && {hover: 'none'}}
              className="col-6"
              onClick={() => {
                this.setState({
                  clicked: "support",
                });
              }}
            >
              Support Others
            </div>
          </div>
        </div>
      </div>
    );
  }
}
