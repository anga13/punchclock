import React, {Component} from "react";


class SingleEmployee extends Component {
  renderActive(isActive) { return (isActive)?"is on station":"has left"; }

  render() {
    const ps=this.props
    const c=ps.aktiv;
    const rs=ps.stamps.map((i) =>
              <Entry key={i.time} value={i} />);
    return (
      <div>
        <h2>{c.name} {this.renderActive(c.active)}</h2>
        <input placeholder="From..."
               onChange={(v)=>ps.handleFrom(v)} />
        <input placeholder="...to"
               onChange={(v)=>ps.handleTo(v)} />
        <button onClick={()=>ps.onClick()}>Go back</button>
        <div className="employee">{rs}</div>
      </div>
    );
  }
}

class Entry extends Component {
  renderType(isIn) { return (isIn)?"In":"Ut"; }

  render() {
    const stamp=this.props.value;
    return (
      <ul>
        <li>{this.renderType(stamp.in)}</li>
        <li>{stamp.time}</li>
      </ul>);
  }
}

export default SingleEmployee;

