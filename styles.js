'use strict';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
var { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  head_container: {
    paddingTop: 10,
  },

  header: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    textAlign: 'center',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#414141',
  },

  sub_title: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },

  star: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    right: 10,
  },

  chart_container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: height * 0.5,
  },

  market_container: {
    height: height * 0.3,
  },

  market_title: {
    textAlign: 'left',
    marginVertical: 10,
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#414141',
  },

  market_box: {
    borderColor: '#979797',
    backgroundColor: '#d3d2d3',
    padding: 5,
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 10,
  },

  market_box_title: {
    color:'#414141', fontSize:20, fontWeight:'bold'
  },

  market_box_content: {
    color:'#414141', fontSize:16,
  },

  bottom_view: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    padding: 10,
    paddingBottom: 0,
  },

  footer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },

  left_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 2,
    marginRight: 2,
    borderColor: '#979797',
    backgroundColor: '#d3d2d3',
    padding: 5,
    marginTop: 10,
  },

  right_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    textAlign: 'center',
    marginLeft: 2,
    borderColor: '#979797',
    backgroundColor: '#d3d2d3',
    padding: 5,
    marginTop: 10,
  },

  footer_title: {
    textAlign: 'center',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#414141',
  },
});
