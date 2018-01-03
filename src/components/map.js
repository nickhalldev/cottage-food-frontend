import React from 'react'
import Map, { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    }

mapResults = () => {

  return (this.props.addresses.map(result => {
    return (
      <Marker
      key={(result.id)}
      onClick={this.onMarkerClick}
      name={(result.username)}
      position={
      {
        lat: parseFloat(result.latitude),
        lng: parseFloat(result.longitude)
      }
    }
    />

  )
  }))
}

mapDisplay =  () => {
  const style = {
    display: 'block',
    width: '50%',
    height: '50%'
  }
  return (<Map
  onClick={this.onMapClicked}
  google={this.props.google}
  zoom={13}
  style={style}

  initialCenter={{
    lat: parseFloat(this.props.latitude),
    lng: parseFloat(this.props.longitude)
  }}
  >

  {this.mapResults()}
  <InfoWindow
    marker={this.state.activeMarker}
    visible={this.state.showingInfoWindow}>
    <div>

      <h1>{this.state.selectedPlace.name}</h1>
    </div>
 </InfoWindow>
  </Map>)
}

render(){
return (
  <div>
        <div>
        {(this.props.latitude && this.props.longitude) ?
           this.mapDisplay() :
          <p>loading map.....</p>
        }
      </div>
      </div>
)}
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCsmeDgEFx6LZXsP0WqJN0B_9bm61_c1ZQ')
})(MapContainer)
