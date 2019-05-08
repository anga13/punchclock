import React, {Component} from "react";
import AllEmployees from "./AllEmployees";
import SingleEmployee from "./SingleEmployee";


class Main extends Component {
  constructor(ps) {
    super(ps);
    this.state={aktiv: undefined,
                listed:[{id:0, name:"F. Flintstone", hours:9, active:true},
                        {id:1, name:"B. Rubble", hours: 17, active:false}],
                stamps: [{id:0, in:true, time:9},
                         {id:0, in:false, time:11},
                         {id:0, in:true, time:13}]};
  }

  detailed(i) {
    this.setState(ps=>({aktiv: i,
                        stamps: [{id:0, in:true, time:9},
                                 {id:0, in:false, time:11},
                                 {id:0, in:true, time:13}]}));
  }

  goBack() { this.setState(ps=>({aktiv: undefined})); }

  handleChangeFrom(val) {
    alert("c"+val);
  }
  handleChangeTo(val) {
    alert("q"+val);
  }

  render() {
    const stated=this.state;
    return (
      <article>
        <h1>Rockys Stenbrott</h1>
        <section className="content">
          { this.state.aktiv===undefined ?
            <AllEmployees anstallda={stated.listed}
                          onClick={i=>this.detailed(i)} />
          :
            <SingleEmployee aktiv={stated.aktiv}
                            stamps={stated.stamps}
                            onClick={i=>this.goBack()}
                            handleFrom={()=>this.handleChangeFrom()}
                            handleTo={()=>this.handleChangeTo()} />
          }
        </section>
      </article>
    );
  }
}

export default Main;

