import React from 'react'

import { View, Text, TextInput } from 'react-native'
import styles from './Input.style'

const Input = () => {
  return (
    <View>
        <TextInput
        style={styles.input}
        placeholder='Search something...'
        placeholderTextColor="gray"

        />
    </View>
  )
}

export default Input