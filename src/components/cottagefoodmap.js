import React from "react";
import USAMap from "react-usa-map";

export class CottageFoodMap extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      name: '',
    }

  }

  mapHandler = (event) => {
    console.log(event)
  // alert(event.target.dataset.name);
  };

  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };


  render(){
    return (
        <div>
          <div className="App">
                <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
          </div>
          <br /><br /><br /><br />

            <h4>How and where can you sell?</h4>

          <h6>Individuals, under most states rules may usually sell directly to other individuals, not businesses, such as restaurants or grocery stores.  A number of states limit the sales of home processed foods to farmers markets, bake sales and charity events. And usually, while you may have a website to promote your products, you may not sell online or across state lines. Indirect Sales (e.g., restaurants, retail, wholesale) are allowed in California, Maine and Ohio. New Hampshire and Pennsylvania  allow it indirectly only at farmers markets, and producers’ premises.</h6>

        </div>
          )
  }
}

export default CottageFoodMap
