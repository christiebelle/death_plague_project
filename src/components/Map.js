import React from "react";
import GoogleMapReact from "google-map-react";
import Locations from "../db/locations.js"


class Map extends React.Component {
  constructor(props){
    super(props);
    this.map = null;
    this.maps = null;
    this.state = {
      markers: Locations
    };

    this.storeMaps = this.storeMaps.bind(this);
  }

  storeMaps({map, maps}){
    this.map = map;
    this.maps = maps;
    let markers = this.state.markers
    for (let marker of markers){
      this.renderMarker(marker)
    }

  }

  renderMarker(point){
    let infoWindow = new this.maps.InfoWindow({
      content: point.text
    });

    let icon={
      url: "../marker-x.svg",
      anchor: new this.maps.Point(32,32),
      scaledSize: new this.maps.Size(32,32)}

    let marker = new this.maps.Marker({
      position:  {lat:point.lat, lng:point.lng},
      map: this.map,
      animation: this.maps.Animation.DROP,
      icon: icon
    });

    marker.addListener("mouseover", (event) => {
      infoWindow.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
    infoWindow.close();
});


  }


  render(){
    return (
      <div className="map-canvas">

        <GoogleMapReact
          center = {{lat: 40.142, lng: 94.661}}
          zoom = {1}
          options = {{styles: mapStyles,
            disableDefaultUI: true }}
            onGoogleApiLoaded={this.storeMaps}
            yesIWantToUseGoogleMapApiInternals={true}

          />
        </div>
      );
    }
  }


const mapStyles = [
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#f49f53"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#f9ddc5"
            },
            {
                "lightness": -7
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 43
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "color": "#645c20"
            },
            {
                "lightness": 38
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#1994bf"
            },
            {
                "saturation": -69
            },
            {
                "gamma": 0.99
            },
            {
                "lightness": 43
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f19f53"
            },
            {
                "weight": 1.3
            },
            {
                "visibility": "on"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi.business"
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "color": "#645c20"
            },
            {
                "lightness": 39
            }
        ]
    },
    {
        "featureType": "poi.school",
        "stylers": [
            {
                "color": "#a95521"
            },
            {
                "lightness": 35
            }
        ]
    },
    {},
    {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 38
            },
            {
                "visibility": "off"
            }
        ]
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
        "elementType": "labels"
    },
    {
        "featureType": "poi.sports_complex",
        "stylers": [
            {
                "color": "#9e5916"
            },
            {
                "lightness": 32
            }
        ]
    },
    {},
    {
        "featureType": "poi.government",
        "stylers": [
            {
                "color": "#9e5916"
            },
            {
                "lightness": 46
            }
        ]
    },
    {
        "featureType": "transit.station",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 22
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "lightness": 38
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#f19f53"
            },
            {
                "lightness": -10
            }
        ]
    },
    {},
    {},
    {}
]

  export default Map;
