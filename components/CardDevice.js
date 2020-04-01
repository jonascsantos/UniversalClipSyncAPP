

import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { theme } from "../constants";
import Block from "./Block";
import Text from "./Text";
import Icon from '../components/Icons';

export default class CardDevice extends Component {

  handleColors() {
    const { status } = this.props;

    switch ( status ) {
      case 'warning': 
        return {
          colorText: "white",
          colorCard: theme.colors.warningCard,
          colorIconWrapper: theme.colors.grayIconWrapper,
          colorIcon: "white",
        }
      case 'ready':
        return {
          colorText: theme.colors.gray3,
          colorCard: theme.colors.primary,
          colorIconWrapper: theme.colors.grayIconWrapper,
          colorIcon: theme.colors.gray3,
        }
      case 'disabled':
        return {
          colorText: theme.colors.disabledIconTextGray,
          colorCard: theme.colors.disabledCard,
          colorIconWrapper: theme.colors.disabledIconWrapper,
          colorIcon: theme.colors.disabledIconTextGray,
        }
      default:
        return {
          colorText: theme.colors.disabledIconTextGray,
          colorCard: theme.colors.disabledCard,
          colorIconWrapper: theme.colors.disabledIconWrapper,
          colorIcon: theme.colors.disabledIconTextGray,
        };
    }
  }

  render() {
    const {
      color,
      style,
      children,
      status,
      iconSet,
      iconName,
      ...props
    } = this.props;

    const cardDeviceStyles = [
      styles.cardDevice,
      style
    ];

    var IconSets = {
      Entypo: Icon.Entypo,
      MaterialCommunityIcons: Icon.MaterialCommunityIcons,
      SimpleLineIcons: Icon.SimpleLineIcons,
      MaterialIcons: Icon.MaterialIcons,
      FontAwesome: Icon.FontAwesome,
      Foundation: Icon.Foundation,
      EvilIcons: Icon.EvilIcons,
      Ionicons: Icon.Ionicons,
      Octicons: Icon.Octicons,
      Feather: Icon.Feather,
      Entypo: Icon.Entypo,
      Zocial: Icon.Zocial
    }

    var IconSet = IconSets[this.props.iconSet];
    console.log(IconSet)
    return (
      <Block color={this.handleColors().colorCard} row center style={cardDeviceStyles} {...props}>
        <Block
          color={this.handleColors().colorIconWrapper}
          middle
          center
          flex={false}
          style={styles.wrapIcon}
        >
          <IconSet name={this.props.iconName} size={20} color={this.handleColors().colorIcon} />
        </Block>
        <Text caption style={styles.textCard} color={this.handleColors().colorText}>
          {children}
        </Text>
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  cardDevice: {
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
