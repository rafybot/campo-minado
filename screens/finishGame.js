import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native'

export default props => {
  return (
    <Modal
      visible={props.isVisible}
      animationType='slide'
      transparent={true} >
      <View style={styles.frame} >
        <View style={styles.container} >
          <Text style={styles.title}>
            {props.win ? 'Parabéns! :)' : 'Que pena! :('}
          </Text>
          <Text style={styles.text}>
            {props.win ? 'Você ganhou! ' : 'Você perdeu! '}
            Deseja começar uma nova partida?
          </Text>

          <TouchableOpacity
            style={[styles.button, styles.bgButton]}
            onPress={props.onNewGame}>
            <Text style={styles.buttonLabel}>Recomeçar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20
  },
  buttonLabel: {
    fontSize: 18,
    color: '#EEE',
    fontWeight: 'bold',
  },
  bgButton: {
    backgroundColor: '#49B65D'
  }
})