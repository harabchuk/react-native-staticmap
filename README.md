# React Native Staticmap from Google and Yandex maps
A React Native component which shows a static image from Google or Yandex maps for the specified coordinates with optional markers.

[![npm version](https://badge.fury.io/js/react-native-staticmap.svg)](https://badge.fury.io/js/react-native-staticmap)

## Installation

```
cd <project directory>
npm i --save react-native-staticmap
```

## Usage

```javascript
import YandexStaticMapView from 'react-native-staticmap';

export default class DetailsScene extends Component{

  ...
  ...

  render(){
    let loc = this.state.location;
    return(
      <View>
        <YandexStaticMapView
          lat={loc.Latitude}
          lon={loc.Longitude}
          lang={en_US}
        />
      </View>  
    )
}
```

## Properties

#### lat,lon
Latitude and Longitude of the center

#### latDelta, lonDelta
Region span

#### width, height
Width and height of map image in pixels

#### mapType
Available types are 'map' - schematic map, 'sat' - satelite map

#### mapOverlay
Additional layers for the map. Available overlays: 'skl', 'trf', 'skl,trf'

#### markCenter
Place a marker in the center of the region

#### lang
Language, available values are 'ru_RU', 'en_US', 'ru_UA', 'uk_UA', 'tr_TR'

#### apiKey
Optional API key
