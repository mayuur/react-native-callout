import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Animated,
} from 'react-native';


class MJCallout extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
      {this.renderCallOutSubviews()}
      </View>
    )
  }

  renderCallOutSubviews() {
    if(this.props.arrowDirection == 'up') {
      return (
        <Animated.View style={[styles.container, styles.flexDirectionColumn,
          {
            opacity: this.props.visibility,
            width:this.props.width,
          }
        ]}>
          <View style = {styles.calloutTriangle}>
          </View>

          <View style = {styles.calloutSquare}>
            <Text style={styles.labelHeader}>
              {this.props.calloutText}
            </Text>
          </View>
        </Animated.View>
      );
    }
    else if(this.props.arrowDirection == 'down') {
      return (
        <Animated.View style={[styles.container, styles.flexDirectionColumn,
          {
            opacity: this.props.visibility,
            width:this.props.width,
          }
        ]}>
          <View style = {styles.calloutSquare}>
            <Text style={styles.labelHeader}>{this.props.calloutText}</Text>
          </View>

          <View style = {[styles.calloutTriangle, styles.transformTriangleDown]}>
          </View>
        </Animated.View>
      );
    }
    else if(this.props.arrowDirection == 'right'){
      return (
        <Animated.View style={[styles.container,
          {
            opacity: this.props.visibility,
            width:this.props.width,
          }
        ]}>
          <View style = {[styles.calloutTriangle, styles.transformTriangleRight]}>
          </View>

          <View style = {styles.calloutSquare}>
            <Text style={styles.labelHeader}>
              {this.props.calloutText}
            </Text>
          </View>
        </Animated.View>
      );
    }
    else {
      return (
        <Animated.View style={[styles.container,
          {
            opacity: this.props.visibility,
            width:this.props.width,
          }
        ]}>
          <View style = {styles.calloutSquare}>
            <Text style={styles.labelHeader}>{this.props.calloutText}</Text>
          </View>

          <View style = {[styles.calloutTriangle, styles.transformTriangleLeft]}>
          </View>
        </Animated.View>
      );
    }
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  flexDirectionColumn: {
    width:300,
    marginTop:-18,
    flexDirection: 'column',
  },

  calloutSquare: {
    backgroundColor: '#EF4836',
    flex:1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 8,
    height:40,
  },

  calloutTriangle: {
    backgroundColor: 'transparent',
    width: 20,
    height: 20,

    alignSelf:'center',
    marginLeft: 20,

    borderStyle: 'solid',
    borderBottomColor: '#EF4836',
    borderBottomWidth:15,

    borderLeftWidth:10,
    borderLeftColor: 'transparent',

    borderRightWidth:10,
    borderRightColor: 'transparent',
  },

  transformTriangleDown: {
    transform: [
      {rotate: '180deg'}
    ]
  },

  transformTriangleLeft: {
    marginLeft:-5,
    marginRight:-1,
    alignSelf:'center',
    transform: [
      {rotate: '90deg'}
    ]
  },

  transformTriangleRight: {
    marginLeft:-5,
    marginRight:-1,
    alignSelf:'center',
    transform: [
      {rotate: '270deg'}
    ]
  },

  labelHeader : {
    margin: 20,
    color: 'white',
    fontWeight: '500',
  },
})

MJCallout.propTypes = {arrowDirection: React.PropTypes.oneOf(['up', 'down', 'left', 'right'])};
module.exports = MJCallout;
