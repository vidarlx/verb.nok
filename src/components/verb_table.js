import React, { Component } from 'react';
import { connect } from 'react-redux';

import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';

import { findVerbDetails } from '../actions';

class VerbTable extends Component {
  componentDidMount() {
    const verb = this.props.id;
    this.props.findVerbDetails(verb);
  }

  render() {
    if (!this.props.verb) {
      return (
        <p>Vente...</p>
      )
    }
    const { verb } = this.props;

    return (
      <div>
        <h3 className="languages">
          <img src="../../assets/polska.png" />{verb.polsk_verb} &rarr;
          <img src="../../assets/norge.png" />{verb.norsk_verb}
        </h3>
        {renderPolishTable(verb)}
        {renderNorwegianTable(verb)}

      </div>
    )
  }
}

function renderPolishTable(verb) {
  return (
    <div className="container">
      <Collapse accordion={true}>
        <Panel header="Czas przeszły" headerClass="tenseHeader past">
          <div className="row">
            <div className="col-4">ja</div>
            <div className="col">{verb.polsk.przeszły.ja}</div>
          </div>
          <div className="row">
            <div className="col-4">ty</div>
            <div className="col">{verb.polsk.przeszły.ty}</div>
          </div>
          <div className="row">
            <div className="col-4">on</div>
            <div className="col">{verb.polsk.przeszły.on}</div>
          </div>
          <div className="row">
            <div className="col-4">ona</div>
            <div className="col">{verb.polsk.przeszły.ona}</div>
          </div>
          <div className="row">
            <div className="col-4">ono</div>
            <div className="col">{verb.polsk.przeszły.ono}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">my</div>
            <div className="col">{verb.polsk.przeszły.my}</div>
          </div>
          <div className="row">
            <div className="col-4">wy</div>
            <div className="col">{verb.polsk.przeszły.wy}</div>
          </div>
          <div className="row">
            <div className="col-4">oni</div>
            <div className="col">{verb.polsk.przeszły.oni}</div>
          </div>
          <div className="row">
            <div className="col-4">one</div>
            <div className="col">{verb.polsk.przeszły.one}</div>
          </div>
        </Panel>
        <Panel header="Czas teraźniejszy" headerClass="tenseHeader">
          <div className="row">
            <div className="col-4">ja</div>
            <div className="col">{verb.polsk.terazniejszy.ja}</div>
          </div>
          <div className="row">
            <div className="col-4">ty</div>
            <div className="col">{verb.polsk.terazniejszy.ty}</div>
          </div>
          <div className="row">
            <div className="col-4">on</div>
            <div className="col">{verb.polsk.terazniejszy.on}</div>
          </div>
          <div className="row">
            <div className="col-4">ona</div>
            <div className="col">{verb.polsk.terazniejszy.ona}</div>
          </div>
          <div className="row">
            <div className="col-4">ono</div>
            <div className="col">{verb.polsk.terazniejszy.ono}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">my</div>
            <div className="col">{verb.polsk.terazniejszy.my}</div>
          </div>
          <div className="row">
            <div className="col-4">wy</div>
            <div className="col">{verb.polsk.terazniejszy.wy}</div>
          </div>
          <div className="row">
            <div className="col-4">oni</div>
            <div className="col">{verb.polsk.terazniejszy.oni}</div>
          </div>
          <div className="row">
            <div className="col-4">one</div>
            <div className="col">{verb.polsk.terazniejszy.oni}</div>
          </div>
        </Panel>
        <Panel header="Bokmål" headerClass="tenseHeader">
          <div className="row">
            <div className="col-4">Grunnform</div>
            <div className="col">{verb.bokmal.grunnform}</div>
          </div>
          <div className="row">
            <div className="col-4">Presens</div>
            <div className="col">{verb.bokmal.presens}</div>
          </div>
          <div className="row">
            <div className="col-4">Preteritum</div>
            <div className="col">{verb.bokmal.preteritum}</div>
          </div>
          <div className="row">
            <div className="col-4">Perfektum</div>
            <div className="col">{verb.bokmal.perfektum}</div>
          </div>
        </Panel>
        <Panel header="Nynorsk" headerClass="tenseHeader">
          <div className="row">
            <div className="col-4">Grunnform</div>
            <div className="col">{verb.nynorsk.grunnform}</div>
          </div>
          <div className="row">
            <div className="col-4">Presens</div>
            <div className="col">{verb.nynorsk.presens}</div>
          </div>
          <div className="row">
            <div className="col-4">Preteritum</div>
            <div className="col">{verb.nynorsk.preteritum}</div>
          </div>
          <div className="row">
            <div className="col-4">Perfektum</div>
            <div className="col">{verb.nynorsk.perfektum}</div>
          </div>
        </Panel>
      </Collapse>
    </div>
  )
}

function renderNorwegianTable(verb) {
  return (
    <div></div>
  )
}


const mapStateToProps = state => {
  return {
    verb: state.verbs.chosen
  }
}

export default connect(mapStateToProps, { findVerbDetails })(VerbTable);