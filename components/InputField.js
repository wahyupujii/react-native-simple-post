import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const InputField = ({
    label,
    inputType,
    name,
    onChangeValue,
    ...rest
}) => {
    return (
        <View
            style={{
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 10
            }}
        >
            {inputType === 'password' ? (
                <TextInput 
                    placeholder={label}
                    secureTextEntry={true}
                    style={{
                        paddingVertical: 0,
                        height: 40
                    }}
                    onChangeText={(value) => onChangeValue(name, value)}
                    {...rest}
                />
            ): (
                <TextInput
                    placeholder={label}
                    style={{
                        paddingVertical: 0,
                        height: 40
                    }}
                    onChangeText={(value) => onChangeValue(name, value)}
                    {...rest}
                />
            )}
        </View>
    )
}

export default InputField