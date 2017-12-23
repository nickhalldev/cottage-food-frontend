import React from 'react'
import Map, { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends React.Component {
  constructor(props){
    super(props)
    console.log('latitude props in my map container',this.props.latitude)
    console.log('longitude props in my map container',this.props.longitude)
    this.state = {
      // latitude: 40.748541,
      // longitude: -73.985763,
      // addresses: [{latitude: 40.748541,longitude: -73.985763},{latitude: 40.758541,longitude: -73.985763}]
    }
  }

mapResults = () => {
  return ( this.props.addresses.map(result => {
    console.log('result in map results',result.longitude)
    return (<Marker position={
      {
        lat: parseInt(result.latitude),
        lng: parseInt(result.longitude)
      }
    }/>)
  }))
}

map =  () => {
  console.log(this.props.latitude)
  const style = {
    display: 'block',
    width: '50%',
    height: '50%'
  }
  return (<Map
  google={this.props.google}
  zoom={13}
  style={style}
  initialCenter={{
    lat: parseInt(this.props.latitude),
    lng: parseInt(this.props.longitude)
  }}
  >
  {this.mapResults()}
  </Map>)
}

render() {


    return (
      <div>

        {(this.props.latitude && this.props.longitude) ?
           this.map() :
          <p>loading map.....</p>
        }
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCsmeDgEFx6LZXsP0WqJN0B_9bm61_c1ZQ')
})(MapContainer)
