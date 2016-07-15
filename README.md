# react-native-callout
Simple Callout View for react-native which can be used on both iOS/Android

<p align="center">
https://raw.githubusercontent.com/mayuur/react-native-callout/master/Demo.gif
</p>

### Content
- [Installation](#installation)
- [Usage example](#usage-example)
- [Properties](#properties)
- [Live example](#live-example)
- [Questions?](#questions)

### Installation
```bash
npm install react-native-material-switch
```

### Usage example
```javascript
var MJCallout = require('react-native-callout');

var Application = React.createClass({
  render: function() {
    return (
      <View>
        <Text>
          MJCallout Example
        </Text>
        <View style={{position:'absolute', top:100, left:100}}>
          <MJCallout width={200} visibility={1} calloutText={"Sample Callout Text"} arrowDirection={'up'}>
          </MJCallout>
        </View>
      </View>
    );
  }
});
```

### Properties
* `width` (Number) - Width of the Callout (default is 200)
* `arrowDirection` (Enum) - Directions for the arrow of the callout, namely: up, down, left & right
* `visibility` (Number) - Set 0 for hiding the callout and 1 to show the callout
* `calloutText` (String) - Text to be shown inside the callout,

### Live example
```sh
git clone git@github.com:mayuur/react-native-callout.git
cd react-native-callout
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
