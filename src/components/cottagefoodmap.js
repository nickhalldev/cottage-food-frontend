import React from "react";
import USAMap from "react-usa-map";
import '../index.css'


export class CottageFoodMap extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      name: '',
    }
  }

  mapHandler = (event) => {
  };

  statesCustomConfig = () => {
    let statesAndColors = {};
    const blueStates = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV']
    const redStates = ['NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA']
    const purpleStates = ['RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

    const blueFilling = {fill: "navy"}
    const redFilling = {fill: "red"}
    const purpleFilling = {fill: "purple"}

    blueStates.forEach(state => {
      statesAndColors[state] = blueFilling
    })
    redStates.forEach(state => {
      statesAndColors[state] = redFilling
    })
    purpleStates.forEach(state => {
      statesAndColors[state] = purpleFilling
    })
    return statesAndColors
    };

  render(){
    return (
        <div>
        <br /> <br />
        <div className="map-key">
        Map Key
        <div>
          <div className="key-red"></div>
          No cottage food is able to be sold
        </div>
        <div>
          <div className="key-blue"></div>
          Cottage food is allowed, besides meat and dairy products
        </div>
        <div>
          <div className="key-purple"></div>
            All cottage food is allowed
          </div>
        </div>
          <div className="App">
                <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
          </div>
        </div>
          )
  }
}

export default CottageFoodMap

          //
          //   <h4>How and where can you sell?</h4>
          //
          // <h6>Individuals, under most states rules may usually sell directly to other individuals, not businesses, such as restaurants or grocery stores.  A number of states limit the sales of home processed foods to farmers markets, bake sales and charity events. And usually, while you may have a website to promote your products, you may not sell online or across state lines. Indirect Sales (e.g., restaurants, retail, wholesale) are allowed in California, Maine and Ohio. New Hampshire and Pennsylvania  allow it indirectly only at farmers markets, and producers’ premises.</h6>
