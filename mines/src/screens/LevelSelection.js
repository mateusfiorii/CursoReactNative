import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Text
} from 'react-native'

const LevelSelection = ({
    onCancel,
    isVisible,
    onLevelSelected
}) => {
    return (
        <Modal onRequestClose={onCancel} visible={isVisible} animationType='slide' transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.bgEasy]}
                        onPress={() => onLevelSelected(0.01)}
                    >
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgNormal]}
                        onPress={() => onLevelSelected(0.09)}
                    >
                        <Text style={styles.buttonLabel}>Intermediário</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgHard]}
                        onPress={() => onLevelSelected(0.15)}
                    >
                        <Text style={styles.buttonLabel}>Díficil</Text>
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765f7'
    },
    bgHard: {
        backgroundColor: '#f26337'
    }
})

export default LevelSelection