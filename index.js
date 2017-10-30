import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class MJCallout extends Component {
  static defaultProps = {
    backgroundColor: 'black',
    textStyle: {},
    caretStyle: {},
    calloutSquareStyle: {},
  };

  renderCallOutInner = () => {
    if (this.props.calloutView) {
      return this.props.calloutView
    }

    return (
      <Text style={[styles.labelHeader, this.props.textStyle]}>
        {this.props.calloutText}
      </Text>
    )
  }

  renderButton = () => {
    const { buttonTitle, buttonColor } = this.props;

    return (
      <View style={[styles.button, { backgroundColor: buttonColor }]}>
        <Text style={styles.buttonTitle}>
          {`${buttonTitle}`}
        </Text>
      </View>
    )
  }

  renderCallOutSubviews = () => {
    const containerStyle = [
      styles.container,
      { opacity: this.props.visibility, width: this.props.width },
    ];

    const triangleStyle = [
      styles.calloutTriangle,
      { borderBottomColor: this.props.buttonTitle && this.props.buttonColor && this.props.arrowDirection === 'down' ? this.props.buttonColor : this.props.backgroundColor },
    ];

    const calloutStyle = [
      styles.calloutSquare,
      { backgroundColor: this.props.backgroundColor },
    ];

    switch (this.props.arrowDirection) {
      case 'up': {
        containerStyle.push(styles.flexDirectionColumn);
        break;
      }

      case 'down': {
        containerStyle.push(styles.flexDirectionColumn);
        triangleStyle.push(styles.transformTriangleDown);
        break;
      }

      case 'left': {
        triangleStyle.push(styles.transformTriangleLeft);
        break;
      }

      case 'right': {
        triangleStyle.push(styles.transformTriangleRight);
        break;
      }

      default:

    }

    triangleStyle.push(this.props.caretStyle);
    calloutStyle.push(this.props.calloutSquareStyle);

    if (['up', 'right'].includes(this.props.arrowDirection)) {
      return (
        <Animated.View style={containerStyle}>
          <View style={triangleStyle}/>
          <View style={calloutStyle}>
            {this.renderCallOutInner()}
            {this.props.buttonTitle && this.renderButton()}
          </View>
        </Animated.View>
      );
    } else if (['down', 'left'].includes(this.props.arrowDirection)) {
      return (
        <Animated.View style={containerStyle}>
          <View style={calloutStyle}>
            {this.renderCallOutInner()}
            {this.props.buttonTitle && this.renderButton()}
          </View>
          <View style={triangleStyle}/>
        </Animated.View>
      );
    }

    return null; // arrowDirection prop is incorrect
  }

  render() {
    return (
      <View onLayout={event => {
          if (this.props.onLayout) {
            this.props.onLayout(event);
          }
        }}>
        {this.renderCallOutSubviews()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  flexDirectionColumn: {
    marginTop: -18,
    marginHorizontal: 15,
    flexDirection: 'column',
  },
  calloutSquare: {
    backgroundColor: 'black',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 8,
  },
  calloutTriangle: {
    backgroundColor: 'transparent',
    width: 20,
    height: 20,

    alignSelf: 'center',
    marginLeft: 20,

    borderStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: 15,

    borderLeftWidth: 10,
    borderLeftColor: 'transparent',

    borderRightWidth: 10,
    borderRightColor: 'transparent',
  },
  transformTriangleDown: {
    transform: [{ rotate: '180deg' }],
  },
  transformTriangleLeft: {
    marginLeft: -5,
    marginRight: -1,
    alignSelf: 'center',
    transform: [{ rotate: '90deg' }],
  },
  transformTriangleRight: {
    marginLeft: -5,
    marginRight: -1,
    alignSelf: 'center',
    transform: [{ rotate: '270deg' }],
  },
  labelHeader : {
    margin: 20,
    color: 'white',
    fontWeight: '500',
  },
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -10,
  },
  buttonTitle: {
    fontSize: 17,
    color: 'white',
    fontWeight: '500',
  },
})

MJCallout.propTypes = {
  arrowDirection: React.PropTypes.oneOf(['up', 'down', 'left', 'right'])
};
