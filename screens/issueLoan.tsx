import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Text, View, Pressable, Image } from 'react-native';
import ConfirmLoan from './confirmLoan'

const IssueLoan = () => {
  return (
    <View style={styles.container}>
      <ConfirmLoan />
    </View>
  );
}

export default IssueLoan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    }
})