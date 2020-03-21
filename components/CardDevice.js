import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { theme } from "../constants";

export default class CardDevices extends Component {
  render() {
    const {
      color,
      style,
      children,
      // warning,
      // ready,
      // disabled,
      ...props
    } = this.props;

    const cardDeviceStyles = [
      styles.cardDevice,
      //warning && { color:  },
      style
    ];

    return (
      <Block color={theme.colors.primary} row center style={cardDeviceStyles} {...props}>
        <Block
          color="rgba(0,0,0,0.10)"
          middle
          center
          flex={false}
          style={styles.wrapIcon}
        >
          <Icon.Entypo name="windows-store" size={20} color={theme.colors.gray3} />
        </Block>
        {children}
        <Text caption style={styles.textCard} color={theme.colors.gray3}>Desktop Windows</Text>
      </Block>
    );
  }
}





// <Card row center style={styles.deviceItem} color={theme.colors.primary}>
//   <Block
//     color="rgba(0,0,0,0.10)"
//     middle
//     center
//     flex={false}
//     style={styles.wrapIcon}
//   >
//     <Icon.Entypo name="windows-store" size={20} color={theme.colors.gray3} />
//   </Block>
//   <Text caption style={styles.textCard} color={theme.colors.gray3}>Desktop Windows</Text>
// </Card>

//   <Card row center style={styles.deviceItem} color="#E74C3C">
//     <Block
//       color="rgba(0,0,0,0.10)"
//       middle
//       center
//       flex={false}
//       style={styles.wrapIcon}
//     >
//       <Icon.Ionicons name="ios-phone-portrait" size={20} color="white" />
//     </Block>
//     <Text caption style={styles.textCard} color="white">My Android</Text>
//   </Card>

//   <Card row center style={styles.deviceItem} color="rgba(0,0,0,0.07)">
//     <Block
//       color="#F9F9F9"
//       middle center
//       flex={false}
//       style={styles.wrapIcon}
//     >
//       <Icon.Ionicons name="ios-phone-portrait" size={20} color="rgba(0,0,0,0.4)" />
//     </Block>
//     <Text caption style={styles.textCard} color="rgba(0,0,0,0.4)">IPhone 11</Text>
//   </Card>

export const styles = StyleSheet.create({
    cardDevice: {
      // borderRadius: theme.sizes.radius,
      // padding: theme.sizes.base + 4,
      marginBottom: theme.sizes.base,
      marginHorizontal: 4,
      flex: 0,
      borderRadius: 40,
      padding: 4,
    },

    deviceItem: {
      marginHorizontal: 4,
      flex: 0,
      borderRadius: 40,
      padding: 4,
    },
    textCard: {
      paddingHorizontal: 10,

    },
    wrapIcon: {
      width: 30,
      borderRadius: 30,
      height: 30,
    }
  });
