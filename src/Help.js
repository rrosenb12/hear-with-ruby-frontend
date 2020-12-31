import React from "react";

export default class Help extends React.Component {
  render() {
    return (
      <help className="row" id="body">
        <p className="col-12">
          New York State, along with many others, does not require insurance
          companies to cover the expenses of hearing impairment. Thus, families
          with children with hearing loss pay, out of pocket, for hearing aids,
          hearing aid molds, batteries, cleaning supplies, personal
          FM/microphone systems, and more. We are exceptionally fortunate that,
          with the support of our family, we have been able to cover the costs
          associated with Ruby’s hearing loss. To be able to give our daughters
          what they need is a privilege and a blessing.
        </p>
        <p className="col-12">
          It is that blessing that motivates us to support all families with
          hearing impaired children to do the same.
        </p>
        <ul>
          For more information about hearing aid insurance laws by state, visit
          these websites:
          <li>
            <a
              href="https://www.hearingloss.org/hearing-help/financial-assistance/state-hearing-aid-insurance-laws/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HearingLoss.org
            </a>
          </li>
          <li>
            <a
              href="https://www.asha.org/advocacy/state/issues/ha_reimbursement/"
              target="_blank"
              rel="noopener noreferrer"
            >
              American Speech-Language-Hearing Association
            </a>
          </li>
        </ul>
        <div className="col-6">Apply for Support</div>
        <div className="col-6">Help Others</div>
      </help>
    );
  }
}
