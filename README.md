# react-native-callout
Simple Callout View for react-native which can be used on both iOS/Android

<p align="center">
  <img src="https://raw.githubusercontent.com/mayuur/react-native-callout/master/examples/Demo.gif"/>
</p>

### Content
- [Installation](#installation)
- [Usage example](#usage-example)
- [Properties](#properties)
- [Live example](#live-example)
- [Questions?](#questions)

### Installation
```bash
npm install react-native-callout
```

### Usage example
```javascript
import MJCallout from 'react-native-callout'
import {Text,View} from 'react-native'
import React, {Component} from 'react'

class Application extends Component{

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <View>
        <Text>
          MJCallout Example
        </Text>
        <View style={{position:'absolute', top:100, left:100}}>
          <MJCallout width={200} visibility={1} calloutText={"Sample Callout Text"} arrowDirection={'up'}>
          </MJCallout>
        </View>

        <View style={{position:'absolute', top:300, left:300}}>
          <MJCallout width={200} visibility={1}
            backgroundColor={'#fff'}
            calloutView={<Text style={{height:60,margin: 5}}>my custom calloutView</Text>}
            arrowDirection={'down'}/>
        </View>

      </View>
    );
  }
}
```

### Properties
* `width` (Number) - Width of the Callout (default is 200)
* `backgroundColor` (String) - Sets the background color of the callout (default is #EF4836)
* `arrowDirection` (Enum) - Directions for the arrow of the callout, namely: up, down, left & right
* `visibility` (Number) - Set 0 for hiding the callout and 1 to show the callout
* `calloutText` (String) - Text to be shown inside the callout,
* `calloutView` (Component) - Component to be shown inside the callout (takes precedence over `calloutText`),
* `textStyle` ({}) - Extends the styles of the `calloutText` view
* `caretStyle`: ({}) - Extends the styles of the caret of the callout
* `calloutSquareStyle` ({}) - Extends the styles of the container of the callout

### Live example
```sh
git clone https://github.com/mayuur/react-native-callout.git
cd react-native-callout/examples
npm install
react-native run-ios
OR
react-native run-android
```
Additionally, you can open the iOS or Android Project and debug it accordingly

### License
MIT License

### Questions?
Feel free to [create an issue](https://github.com/mayuur/react-native-callout/issues)
or
Talk to me [@mayuur](https://twitter.com/mayuur)
