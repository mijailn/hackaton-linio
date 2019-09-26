import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap,
    GoogleMap,
    Marker,
    DirectionsRenderer } from "react-google-maps"
import axios from 'axios'
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");


const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
/*global google*/
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAXZTJXvEgehQOxG8Vdc3MgwzdD3dsYGUI",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    warningPlaces: [],
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {

      axios.get('http://192.168.11.234:8080/v1/incidents/')
        .then(({data}) => {
            this.setState({
                warningPlaces: data
            })
        })
    },
    componentWillMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState(prevState => ({
                            center: {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            }
                    }), () => console.log('esto' ,this.state))
                }
            )
        } 
        const refs = {}
  
        this.setState({
          bounds: null,
        //   center: {
        //     lat: 41.9, lng: -87.624
        //   },
          markers: [],
          onMapMounted: ref => {
            refs.map = ref;
          },
          onBoundsChanged: () => {
            this.setState({
              bounds: refs.map.getBounds(),
              center: refs.map.getCenter(),
            })
          },
          onSearchBoxMounted: ref => {
            refs.searchBox = ref;
          },
          onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();
            const bounds = new google.maps.LatLngBounds();
  
            places.forEach(place => {
              if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport)
              } else {
                bounds.extend(place.geometry.location)
              }
            });
            const nextMarkers = places.map(place => ({
              position: place.geometry.location,
            }));
            // const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
  
            this.setState({
            //   center: nextCenter,
              markers: nextMarkers,
            });

        const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: new google.maps.LatLng(this.state.center.lat, this.state.center.lng),
        destination: new google.maps.LatLng(nextMarkers[0].position.lat(), nextMarkers[0].position.lng()),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
            // refs.map.fitBounds(bounds);
          },
        })
      },
  })
)((props) =>
  <GoogleMap
      defaultZoom={15}
    center={props.center}
    options={{
        mapTypeControl: false
    }}
  >
      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Busca tu destino..."
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `350px`,
          height: `60px`,
          marginTop: `27px`,
          marginLeft: '27px',
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `16px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
      </ SearchBox>
      <MarkerClusterer
         onClick={props.onMarkerClustererClick}
         averageCenter
         enableRetinaIcons
         gridSize={30}
      >
        {props.isMarkerShown && props.warningPlaces.map((marker, idx) =>
            <Marker key={idx} position={{ lat: marker.latitude, lng: marker.longitude }}
                onClick={props.onMarkerClick} />)
        }

      </MarkerClusterer>)
        <DirectionsRenderer directions={props.directions} />
  </GoogleMap>
)

export default class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
    center: {
    }
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyDfPtihRG-qQbblUsDyGrvLrv25ZIjDf7k')
//   })(MapContainer)