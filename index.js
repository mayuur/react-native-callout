/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Animated,
  View,
  Dimensions,
} from 'react-native';

let { screenWidth, screenHeight } = Dimensions.get('window')
var MJCallout = require('./MJCallout');

class calloutExample extends Component {
  constructor(props) {
    super(props);

    this.topButton = TouchableHighlight;
    this.state = {
      calloutOpacity: new Animated.Value(0),
      calloutText: 'Sample Callout Text',
      calloutTop:0,
      calloutLeft:0,
      calloutWidth:200,
      arrowPosition:'up',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          MJCallout Example
        </Text>
        <View style = {styles.buttonsView}>
          <TouchableHighlight
            ref = {component => this.topButton = component}
            style={[styles.buttonCallout, styles.buttonTop]} onPress={this.buttonClicked.bind(this,0)}>
            <Text style={styles.buttonText}> Top </Text>
          </TouchableHighlight>
          <TouchableHighlight
            ref = {component => this.leftButton = component}
            style={styles.buttonCallout} onPress={this.buttonClicked.bind(this,1)}>
            <Text style={styles.buttonText}> Left </Text>
          </TouchableHighlight>
          <TouchableHighlight
            ref = {component => this.rightButton = component}
            style={styles.buttonCallout} onPress={this.buttonClicked.bind(this,2)}>
            <Text style={styles.buttonText}> Right </Text>
          </TouchableHighlight>
          <TouchableHighlight
            ref = {component => this.downButton = component}
            style={styles.buttonCallout} onPress={this.buttonClicked.bind(this,3)}>
            <Text style={styles.buttonText}> Bottom </Text>
          </TouchableHighlight>
        </View>

        {this.renderCallOut()}
      </View>
    );
  }

  renderCallOut() {
    //show callout only when needed
    if(!this.state.calloutOpacity) {
      return
    }

    //add callout if needed
    return (
      <View style={{position:'absolute', top:this.state.calloutTop, left:this.state.calloutLeft}}>
        <MJCallout width={this.state.calloutWidth} visibility={this.state.calloutOpacity} calloutText={this.state.calloutText} arrowDirection={this.state.arrowPosition}>
        </MJCallout>
      </View>
    )
  }

  buttonClicked(index) {
    var calloutX = 0;
    var calloutY = 0;
    if(index == 0) {
      this.topButton.measure( (fx, fy, width, height, px, py) => {
        this.setState({
          calloutText:'Callout at top position',
          calloutOpacity: new Animated.Value(1),
          arrowPosition:'down',
          calloutTop:py-30,
          calloutLeft:px,
          calloutWidth:190,
        })
      })
    }
    else if(index == 1) {
      this.leftButton.measure( (fx, fy, width, height, px, py) => {
        this.setState({
          calloutText:'Left Side Callout',
          calloutOpacity: new Animated.Value(1),
          arrowPosition:'left',
          calloutTop:py+5,
          calloutLeft:px-85,
          calloutWidth:175,
        })
      })
    }
    else if(index == 2) {
      this.rightButton.measure( (fx, fy, width, height, px, py) => {
        this.setState({
          calloutText:'Right Side Callout',
          calloutOpacity: new Animated.Value(1),
          arrowPosition:'right',
          calloutTop:py+5,
          calloutLeft:px+120,
          calloutWidth:175,
        })
      })
    }
    else if(index == 3) {
      this.downButton.measure( (fx, fy, width, height, px, py) => {
        this.setState({
          calloutText:'Callout at down position',
          calloutOpacity: new Animated.Value(1),
          arrowPosition:'up',
          calloutTop:py+55,
          calloutLeft:px,
          calloutWidth:200,
        })
      })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    marginTop:30,
    fontSize: 30,
    fontWeight: '300',
    height:50,
  },
  buttonsView: {
    flex:1,
    alignSelf:'stretch',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonCallout: {
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',
    width:200,
    height: 50,

    borderColor: 'black',
    borderWidth:2,
    borderRadius:10,
    backgroundColor:'green',
  },
  buttonTop : {
    marginTop:-50,
  },
  buttonText: {
    textAlign:'center',
    color:'white',
  },
});

AppRegistry.registerComponent('calloutExample', () => calloutExample);
