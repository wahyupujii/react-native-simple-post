import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({
    label,
    onPress
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: '#ad40af',
                padding: 10,
                borderRadius: 10,
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#fff'
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton