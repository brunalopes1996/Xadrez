import { useState } from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native'

import Visor from './components/Visor'
import Botao from './components/Botao'

export default function App() {

  return (
    <SafeAreaView style={estilos.container}>
      <Visor valor={estadoCalculadora.valorVisor}/>
      <View style={estilos.botoes}>
        <Botao label="" triplo onClick={limparMemoria} />
        <Botao label=""  operacao onClick={setOperacao} />
        <Botao label="7" onClick={adicionarDigito} />
        <Botao label="8" onClick={adicionarDigito}/>
        <Botao label="9" onClick={adicionarDigito}/>
        <Botao label="*" operacao onClick={setOperacao}/>
        <Botao label="4" onClick={adicionarDigito}/>
        <Botao label="5" onClick={adicionarDigito}/>
        <Botao label="6" onClick={adicionarDigito}/>
        <Botao label="-" operacao onClick={setOperacao}/>
        <Botao label="1" onClick={adicionarDigito}/>
        <Botao label="2" onClick={adicionarDigito}/>
        <Botao label="3" onClick={adicionarDigito}/>
        <Botao label="+" operacao onClick={setOperacao}/>
        <Botao label="0" duplo onClick={adicionarDigito}/>
        <Botao label="." onClick={adicionarDigito}/>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  botoes: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});