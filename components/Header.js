import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Flag from './Bandeira'

export default props => {
  return (
    <View style={styles.container}>
        <View style={styles.flagContainer}>
          <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton} >
            <Flag bigger />
          </TouchableOpacity>
          <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnInst} onPress={props.onInstructionPress}>
            <Text style={styles.buttonLabel}>Instruções</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNew} onPress={props.onNewGame}>
            <Text style={styles.buttonLabel}>Novo Jogo</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  flagContainer: {
    flexDirection: 'row',
  },
  flagButton: {
    marginTop: 2,
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  btnContainer: {
    padding: 0
  },
  btnNew: {
    backgroundColor: '#07F',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 4
  },
  btnInst: {
    backgroundColor: '#777',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 4
  },
  buttonLabel: {
    fontSize: 16,
    color: '#FAFAFA',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})