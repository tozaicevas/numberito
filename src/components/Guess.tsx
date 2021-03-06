import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Layout, Theme } from '../constants/index';
import { SingleGuess } from '../types/index';
import SvgBull from './SvgBull';

interface GuessProps {
  guess: SingleGuess;
}

const Guess: React.FC<GuessProps> = ({ guess }) => {
  return (
    <TouchableOpacity style={styles.overlay}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={styles.text}>{guess.input}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 4 }}>
          <Text>{guess.bulls}</Text>
          <SvgBull />
          <Text>{guess.cows}</Text>
          <MaterialCommunityIcons
            name="cow"
            color={Theme.colors.primary}
            size={19}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

interface Style {
  text: TextStyle;
  overlay: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  text: {
    fontSize: 18,
    color: 'black',
  },
  overlay: {
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.sizes.radius,
    padding: Layout.height * 0.007,
    margin: Layout.width * 0.02,
  },
});

export default Guess;
