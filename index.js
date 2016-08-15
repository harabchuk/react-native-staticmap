import React, { PropTypes, Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default class YandexMapStatic extends Component {

  static propTypes = {
    lat: PropTypes.any,
    lon: PropTypes.any,
    latDelta: PropTypes.any,
    lonDelta: PropTypes.any,
    mapType: PropTypes.oneOf(['map', 'sat']),
    mapOverlay: PropTypes.oneOf(['skl', 'trf', 'skl,trf']),
    width: PropTypes.any,
    height: PropTypes.any,
    apiKey: PropTypes.string,
    lang: PropTypes.oneOf(['ru_RU', 'en_US', 'ru_UA', 'uk_UA', 'tr_TR']),
    markCenter: PropTypes.bool
  };

  static defaultProps = {
    lat: 55.753630,
    lon: 37.620070,
    width: 450,
    height: 450,
    latDelta: 0.01,
    lonDelta: 0.01,
    mapType: 'map',
    markCenter: true,
    lang: 'en_US',
    apiKey: ''
  };

  constructor(props, context){
    super(props);
  }

  _joinNonEmpty(arr){
    return arr.filter((s)=>s!=false).join(',');
  }

  render (){
    let p = this.props;

    let url='https://static-maps.yandex.ru/1.x/'
      +'?size='+p.width+','+p.height
      +'&ll='+p.lon+','+p.lat
      +'&spn='+p.lonDelta+','+p.latDelta
      +'&l='+this._joinNonEmpty([p.mapType, p.mapOverlay])
      +'&lang='+p.lang
      +'&key='+p.apiKey

    if(p.markCenter){
      url+='&pt='+p.lon+','+p.lat+',pm2rdl';
    }
    url = 'https://static-maps.yandex.ru/1.x/?ll=37.620070,55.753630&size=450,450&spn=0.01,0.01&l=sat&pt=37.620070,55.753630,pmwtm1~37.64,55.76363,pmwtm99&key=';
    return (
      <Image source={{uri:url}} style={{flex:1, height:p.height, resizeMode: 'cover'}} />
    )
  }

}
