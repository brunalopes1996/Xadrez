import { 
    StyleSheet, 
    Text,
    Dimensions
 } from "react-native"

const {width, height} = Dimensions.get('window')
 
const Botao = (props) => {

    const estilosBotao = [estilos.botao]
    if(props.duplo) estilosBotao.push(estilos.botao)
}
const estilos = StyleSheet.create({
    botao: {
        fontSize: 50,
        width: width / 4,
        height: width / 4,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    botao: {
        width: width/4 * 2
    },

})

export default Botao