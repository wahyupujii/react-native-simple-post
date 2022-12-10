import {
    SafeAreaView,
    View,
    Text,
    TextInput
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { InputField, CustomButton } from "../components"
import axios from 'axios';

// import user from "../constants/user"

const Login = ({ navigation }) => {
    const [inputs, setInputs] = useState({});
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setUsers(res.data)
                setLoading(false)
            })
    }, [])

    const handleChange = (name, value) => {
        setInputs({ ...inputs, [name]: value })
    }

    const submit = () => {
        let selectedUser = users.filter(user => (user.email === inputs.email) && (user.username === inputs.username))
        if (selectedUser[0]) {
            navigation.navigate('Home', { ...selectedUser[0] })
        } else {
            alert("isi lah")
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'white'
            }}
        >
            {
                loading ? (
                    <Text>Please Wait ... </Text>
                ) : (
                    <View
                        style={{
                            padding: 25,
                            shadowColor: '#171717',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.2,
                            shadowRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 28,
                                fontWeight: '500',
                                color: '#333',
                                marginBottom: 30
                            }}
                        >
                            Login
                        </Text>

                        <InputField
                            label={'Username'}
                            name="username"
                            onChangeValue={handleChange}
                        />

                        <InputField
                            label={'Email'}
                            name="email"
                            onChangeValue={handleChange}
                        />

                        <CustomButton
                            onPress={submit}
                            label="Login"
                        />

                    </View>
                )
            }

        </SafeAreaView>
    )
}

export default Login