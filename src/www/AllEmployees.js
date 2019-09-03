import React, {Component} from "react";


class AllEmployees extends Component {
  render() {
    const rs=this.props.anstallda.map((i) =>
              <Entry key={i.id} value={i}
                     onClick={()=>this.props.onClick(i)} />
          );
    return (
      <div>
        <h2>Fleen-departementet</h2>
        <div className="employees">{rs}</div>
      </div>
    );
  }
}

class Entry extends Component {
  renderActive(isActive) {
    return (isActive)?"YES":"NO";
  }

  render() {
    const that=this.props.value;
    return (
      <ul onClick={this.props.onClick}>
        <li key="name">{that.name}</li>
        <li key="total">{that.hours} timmar</li>
        <li key="atWork">{this.renderActive(that.active)}</li>
      </ul>);
  }
}

export default AllEmployees;

