import React, { Component } from "react";
import { connect } from "react-redux";

import Collapse, { Panel } from "rc-collapse";
import "rc-collapse/assets/index.css";

import { findVerbDetails } from "../actions";
import Spinner from "./spinner";

class VerbTable extends Component {
  constructor() {
    super();

    this.state = {
      verb: {}
    };
  }

  componentDidMount() {
    const verb = this.props.id;
    if (!this.props.verb) {
      this.props.findVerbDetails(verb);
    }
  }

  render() {
    if (!this.props.verb) {
      return <Spinner />;
    }

    const { verb } = this.props;
    return (
      <div>
        <h3 className="languages">
          <img src="../../assets/polska.png" />
          {verb.polsk_verb} &rarr;
          <img src="../../assets/norge.png" />
          {verb.norsk_verb}
        </h3>
        {renderTables(verb)}
      </div>
    );
  }
}

function renderTables(verb) {
  return (
    <div className="container">
      <Collapse accordion={true}>
        {renderPolishPast(verb)}
        {renderPolishPresent(verb)}
        {renderPolishFuture(verb)}
        {renderBokmalTable(verb)}
        {renderNynorskTable(verb)}
      </Collapse>
    </div>
  );
}

function renderBokmalTable(verb) {
  return (
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
  );
}

function renderNynorskTable(verb) {
  return (
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
  );
}

function renderPolishPast(verb) {
  return (
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
      <hr />
      <h4>Przykłady</h4>
      {showExamples(verb.polsk.przeszły)}
    </Panel>
  );
}

function renderPolishPresent(verb) {
  return (
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
      <hr />
      <h4>Przykłady</h4>
      {showExamples(verb.polsk.terazniejszy)}
    </Panel>
  );
}

function renderPolishFuture(verb) {
  // standard be + basic form of a verb
  if (!verb.polsk.przyszły) {
    verb.polsk.przyszły = {
      ja: `będę ${verb.polsk_verb}`,
      ty: `będziesz ${verb.polsk_verb}`,
      on: `będzie ${verb.polsk_verb}`,
      ona: `będzie ${verb.polsk_verb}`,
      ono: `będzie ${verb.polsk_verb}`,
      my: `będziemy ${verb.polsk_verb}`,
      wy: `będziecie ${verb.polsk_verb}`,
      oni: `bedą ${verb.polsk_verb}`,
      one: `będą ${verb.polsk_verb}`
    };
  }

  return (
    <Panel header="Czas przyszły" headerClass="tenseHeader">
      <div className="row">
        <div className="col-4">ja</div>
        <div className="col">{verb.polsk.przyszły.ja}</div>
      </div>
      <div className="row">
        <div className="col-4">ty</div>
        <div className="col">{verb.polsk.przyszły.ty}</div>
      </div>
      <div className="row">
        <div className="col-4">on</div>
        <div className="col">{verb.polsk.przyszły.on}</div>
      </div>
      <div className="row">
        <div className="col-4">ona</div>
        <div className="col">{verb.polsk.przyszły.ona}</div>
      </div>
      <div className="row">
        <div className="col-4">ono</div>
        <div className="col">{verb.polsk.przyszły.ono}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">my</div>
        <div className="col">{verb.polsk.przyszły.my}</div>
      </div>
      <div className="row">
        <div className="col-4">wy</div>
        <div className="col">{verb.polsk.przyszły.wy}</div>
      </div>
      <div className="row">
        <div className="col-4">oni</div>
        <div className="col">{verb.polsk.przyszły.oni}</div>
      </div>
      <div className="row">
        <div className="col-4">one</div>
        <div className="col">{verb.polsk.przyszły.oni}</div>
      </div>
      <hr />
      <h4>Przykłady</h4>
      {showExamples(verb.polsk.przyszły)}
    </Panel>
  );
}

function showExamples(verb) {
  const examples = verb.przykłady;
  if (examples) {
    return examples.map(example => (
      <div className="row example" key={example}>{example}</div>
    ));
  }

  return <div className="no_examples">Na razie brak przykładów</div>;
}

const mapStateToProps = state => {
  return {
    verb: state.verbs.chosen
  };
};

export default connect(
  mapStateToProps,
  { findVerbDetails }
)(VerbTable);
