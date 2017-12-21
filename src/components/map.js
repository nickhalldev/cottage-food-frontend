import React from 'react'
import Map, { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



const apiKey =  ('AIzaSyCsmeDgEFx6LZXsP0WqJN0B_9bm61_c1ZQ')


export class MapContainer extends React.Component {

  constructor(props){
    super(props)
    console.log('props in my map container',this.props)
    this.state = {
      lat: 40.748541,
      lng: -73.985763,
      addresses: [{lat: 40.748541,lng: -73.985763}],
    }


  }


render() {
  const style = {
    display: 'block',
    width: '50%',
    height: '50%'
  }

    return (
      <div>

        {(this.state.lat && this.state.lng) ?
          <Map
          google={this.props.google}
          zoom={13}
          style={style}
          initialCenter={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          >
          {this.state.addresses.map(result => <Marker position={
            {
              lat: result.lat,
              lng: result.lng
            }}/>)}
          </Map> :
          <p>loading map.....</p>
        }
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyCsmeDgEFx6LZXsP0WqJN0B_9bm61_c1ZQ')
})(MapContainer)
