import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5"
import axios from 'axios'

const headerHome = (data, navigation) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5
            }}
        >
            <View>
                <Text
                    style={{
                        fontSize: 18,
                        color: '#C4C4C4',
                        lineHeight: 20
                    }}
                >
                    Halo !!
                </Text>
                <Text>{data.name}</Text>
            </View>
            <View>
                <FontAwesomeIcon
                    name='user-circle'
                    size={30}
                    color="#666"
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
        </View>
    )
}

const postList = (data, navigation) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)
            .then(res => {
                setPosts(res.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {
                loading ? (
                    <Text>Please Wait ...</Text>
                ) : (
                    <View>
                        <StatusBar animated={true} backgroundColor="#001F2D" />
                        {
                            posts.map((item, id) => {
                                return (
                                    <View
                                        key={id}
                                        style={{
                                            padding: 20,
                                            margin: 10,
                                            borderColor: '#171717',
                                            borderWidth: 1,
                                            borderRadius: 10,
                                            shadowColor: '#171717',
                                            shadowOffset: { width: 0, height: 0 },
                                            shadowOpacity: 1,
                                            shadowRadius: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 15,
                                            }}
                                        >
                                            {item.title}
                                        </Text>
                                        <TouchableOpacity
                                            style={{
                                                marginTop: 10,
                                            }}
                                            onPress={() => navigation.navigate("Detail Post", { ...item })}
                                        >
                                            <Text
                                                style={{
                                                    color: 'blue',
                                                    textAlign: 'right',
                                                    fontWeight: '900',
                                                }}
                                            >
                                                See More ...
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                )
            }
        </>
    )
}

const Home = ({ route, navigation }) => {
    const data = route.params
    return (
        <ScrollView>
            <SafeAreaView
                style={{
                    flex: 1,
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                    backgroundColor: 'white'
                }}
            >
                {headerHome(data, navigation)}
                {postList(data, navigation)}
            </SafeAreaView>
        </ScrollView>
    )
}

export default Home