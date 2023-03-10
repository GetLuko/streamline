import React, { useCallback } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';

import { GeneratedRegularIcons } from '@getluko/streamline';
import { Icon, IconProps } from '@getluko/streamline';

const iconNames = [
  ...Object.keys(GeneratedRegularIcons),
] as IconProps['iconName'][];

export const IconsSandbox = () => {
  const onPress = useCallback(
    (iconName: IconProps['iconName']) => () => {
      Alert.alert(iconName);
    },
    []
  );
  return (
    <View
      style={{ paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap' }}
    >
      {iconNames.map((iconName) => (
        <TouchableOpacity key={iconName} onPress={onPress(iconName)}>
          <Icon iconName={iconName} size="regular" />
        </TouchableOpacity>
      ))}

      <View style={{ marginTop: 40, flexDirection: 'row', flexWrap: 'wrap' }}>
        {iconNames.map((iconName) => (
          <TouchableOpacity key={iconName} onPress={onPress(iconName)}>
            <Icon iconName={iconName} size="large" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
