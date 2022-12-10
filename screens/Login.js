import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { InputField, CustomButton } from "../components"
import axios from 'axios';

import LoginSVG from "../assets/Login.svg";

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
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: 'white',
                paddingVertical: 40,
                paddingHorizontal: 25,
            }}
        >
            <SafeAreaView>
                {
                    loading ? (
                        <Text>Please Wait ... </Text>
                    ) : (
                        <View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}
                            >
                                {/* <Image
                                    source={require("../assets/Login.png")}
                                    style={{
                                        width: 200,
                                        height: 200
                                    }}
                                /> */}
                                <LoginSVG 
                                    width={200}
                                    height={200}
                                />
                            </View>

                            <View
                                style={{
                                    shadowColor: '#171717',
                                    shadowOffset: { width: 0, height: 0 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 10,
                                    marginVertical: 25
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 28,
                                        fontWeight: '900',
                                        color: '#333',
                                        marginBottom: 10
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

                            <Text
                                style={{
                                    marginBottom: 25,
                                    textAlign: 'center',
                                    color: '#ad40af'
                                }}
                            >Or Login With</Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    paddingHorizontal: 25,
                                    justifyContent: 'space-between'
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        Alert.alert(
                                            "Icon Google",
                                            "You clicked icon google",
                                        )
                                    }}
                                >
                                    <Image
                                        source={require("../assets/google.png")}
                                        style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        Alert.alert(
                                            "Icon Linkedin",
                                            "You clicked icon linkedin",
                                        )
                                    }}
                                >
                                    <Image
                                        source={require("../assets/linkedin.png")}
                                        style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        Alert.alert(
                                            "Icon Github",
                                            "You clicked icon github",
                                        )
                                    }}
                                >
                                    <Image
                                        source={require("../assets/github.png")}
                                        style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
            </SafeAreaView>
        </ScrollView>
    )
}

export default Login