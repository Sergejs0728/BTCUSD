import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import { Constants } from 'expo';
import { getStatusBarHeight } from 'react-native-status-bar-height';
var { width, height } = Dimensions.get('window');
import Market_list from './stores/Market_list';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryCandlestick,
} from 'victory-native';
// You can import from local files
import AssetExample from './components/AssetExample';
import { Header, Button } from 'react-native-elements';
const data = [{ x: 10, open: 0.1234, close: 0.1236, high: 15, low: 5 }];
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import styles from './styles'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head_container}>
          <View style={styles.header}>
            <Text style={styles.title}>
              BTCUSD {'\n'}
              <Text style={styles.sub_title}>Bitcoin/US Dollar</Text>
            </Text>
            <Image style={styles.star} source={require('./assets/star.png')} />
          </View>
        </View>

        <View style={styles.chart_container}>
          <VictoryChart
           // height={height * 0.4}
            theme={VictoryTheme.material}
            domainPadding={{ x: 20 }}
            scale={{ x: 'time' }}>
            <VictoryAxis
              dependentAxis
              orientation="left"
              domain={[-0.1234, 0.1242]}
            />
            <VictoryCandlestick
              data={[
                {
                  x: new Date(2016, 6, 1),
                  open: 5,
                  close: 10,
                  high: 15,
                  low: 0,
                },
                {
                  x: new Date(2016, 6, 2),
                  open: 10,
                  close: 15,
                  high: 20,
                  low: 5,
                },
                {
                  x: new Date(2016, 6, 3),
                  open: 15,
                  close: 20,
                  high: 22,
                  low: 10,
                },
                {
                  x: new Date(2016, 6, 4),
                  open: 20,
                  close: 10,
                  high: 25,
                  low: 7,
                },
                {
                  x: new Date(2016, 6, 5),
                  open: 10,
                  close: 8,
                  high: 15,
                  low: 5,
                },
                {
                  x: new Date(2016, 6, 6),
                  open: 10,
                  close: 8,
                  high: 15,
                  low: 5,
                },
                {
                  x: new Date(2016, 6, 7),
                  open: 10,
                  close: 8,
                  high: 15,
                  low: 5,
                },
                {
                  x: new Date(2016, 6, 8),
                  open: 10,
                  close: 8,
                  high: 15,
                  low: 5,
                },
              ]}
              candleColors={{ positive: '#ca001a', negative: '#47dfba' }}
              // data={data}
            />
          </VictoryChart>
        </View>

        <View style={styles.market_container}>
          <Text style={styles.market_title}>Market Info</Text>
          <ScrollView>
            <Market_list />
          </ScrollView>
        </View>

        <View style={styles.bottom_view}>
          <View style={styles.footer}>
            <View style={styles.left_container}>
              <Text style={styles.footer_title}>
                SELL {'\n'}
                <Text style={styles.footer_title}>0.123456</Text>
              </Text>
            </View>

            <View style={styles.right_container}>
              <Text style={styles.footer_title}>
                BUY {'\n'}
                <Text style={styles.footer_title}>0.123467</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

 
