import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 53.10,
      lng: 8.84
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCcX8uPZtuL4JtSTtP81mSRfq3ZttB2i4I' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          <div style={{borderRadius:'25px',padding:'2px',fontSize:'15px',width:'200px',opacity:'0.8',backgroundColor:'white'}}
            lat={53.10}
            lng={8.84}>
                <p><i class="fa fa-info-circle"> &nbsp; {`Universitätsallee 1, 28359`}</i></p>
                <p><i class="fa fa-phone"> &nbsp; + 49 (0) 1522 000 0000</i></p>
                <p><i class="fa fa-envelope-o" > &nbsp; contact at weatherdress dot com</i></p>
            </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;