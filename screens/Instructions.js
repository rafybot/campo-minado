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
            Instruções
          </Text>
          <Text style={styles.text}>
            Olá, jogador!<br/> Para jogar o campo minado, seu objetivo é 
            <b> marcar todas as bombas existentes</b>. A cada bomba marcada, 
            o contador localizado na parte superior do jogo diminuirá. Ao chegar 
            no 0 sem clicar em nenhuma bomba, você vence!
          </Text>
          <Text style={styles.text}>
            • <b>Selecionar a dificuldade:</b><br/>
            Aperte na bandeira ao lado superior esquerdo.<br/>
          </Text>
          <Text style={styles.text}>
            • <b>Marcar uma bomba com uma bandeira: </b><br/>
            Clique e segure na mina.
          </Text>

          <TouchableOpacity
            style={[styles.button, styles.bgButton]}
            onPress={props.closeModal}>
            <Text style={styles.buttonLabel}>Entendi!</Text>
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
    padding: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 4
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    margin: 2
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