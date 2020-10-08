import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class __Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {
    TextInput_14: "",
    DateTimePicker_16: new Date("10/08/2020"),
    Switch_18: true
  }
  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_5}>
        <View style={styles.View_6}>
          <Button
            title="Press me!"
            color="#3366FF"
            style={styles.Button_9}
            onPress={() => alert("Pressed!")}
          />
          <TextInput
            placeholder="Sample text input placeholder"
            editable={true}
            style={styles.TextInput_14}
            value={this.state.TextInput_14}
            onChangeText={nextValue =>
              this.setState({ TextInput_14: nextValue })
            }
          />
          <DateTimePicker
            showIcon={false}
            style={styles.DateTimePicker_16}
            date={this.state.DateTimePicker_16}
            onDateChange={selectedDate =>
              this.setState({ DateTimePicker_16: selectedDate })
            }
          />
          <Switch
            activeColor="#409EFF"
            inactiveColor="#C0CCDA"
            disabled={false}
            trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
            style={styles.Switch_18}
            value={this.state.Switch_18}
            onValueChange={nextChecked =>
              this.setState({ Switch_18: nextChecked })
            }
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
            <Image
              resizeMode="center"
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/WHT218FSW008_SIZE.jpg"
              }}
              style={styles.Image_20}
            />
          </TouchableOpacity>
          <Icon
            iconFont="FontAwesome Icons"
            name="star"
            style={styles.Icon_43}
          />
        </View>
        <View style={styles.View_7}>
          <Text style={styles.Text_12}>Sample text content</Text>
          <Slider
            value={50}
            minimumValue={0}
            maximumValue={100}
            step={1}
            disabled={false}
            maximumTrackTintColor="#E4E7ED"
            minimumTrackTintColor="#3366FF"
            thumbTintColor="#3366FF"
            style={styles.Slider_41}
          />
        </View>
      </View>
    </View>
  )
}

_Blank = withStyles(__Blank, theme => ({
  container: { backgroundColor: theme["color-basic-100"] }
}))

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(_Blank)
