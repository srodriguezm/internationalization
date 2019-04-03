import React from 'react';
import Job from "./job";
import {IntlProvider,FormattedMessage} from 'react-intl';
import detectBrowserLanguage from 'detect-browser-language'

export default class JobsList extends React.Component {

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col"><FormattedMessage id="Position"/></th>
              <th scope="col"><FormattedMessage id="Company"/></th>
              <th scope="col"><FormattedMessage id="Salary"/></th>
              <th scope="col"><FormattedMessage id="City"/></th>
              <th scope="col"><FormattedMessage id="PulibicationDate"/></th>
              <th scope="col"><FormattedMessage id="Views"/></th>
            </tr>
          </thead>
          <tbody>
              {this.props.data.offers.map( (e,i) =><Job key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}
