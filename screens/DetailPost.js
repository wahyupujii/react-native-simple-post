import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

const DetailPost = ({ route }) => {
    const data = route.params;

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
            .then(res => {
                setComments(res.data)
                setLoading(false)
            })
    }, [])

    return (
        <ScrollView
            style={{
                backgroundColor: 'white',
                flex: 1,
                padding: 20
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 22,
                    fontWeight: '900'
                }}
            >
                {data.title}
            </Text>
            <Text
                style={{
                    marginTop: 30,
                    lineHeight: 20,
                }}
            >
                {data.body}
            </Text>
            
            <Text
                style={{
                    fontSize: 18,
                    marginTop: 20,
                    fontWeight: '700'
                }}
            >
                Comments :
            </Text>
            {
                loading ? (
                    <Text>Please Wait ...</Text>
                ) : (
                    <View>
                        {
                            comments.map((item, id) => {
                                return (
                                    <View
                                        style={{
                                            padding: 10,
                                            marginBottom: 10
                                        }}
                                        key={id}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                borderBottomColor: '#171717',
                                                borderBottomWidth: 1,
                                                paddingVertical: 3
                                            }}
                                        >
                                            <Text>{item.email}</Text>
                                            <FontAwesome5Icon
                                                name='user-circle'
                                                size={20}
                                                color="#171717"
                                            />
                                        </View>
                                        <Text
                                            style={{
                                                marginVertical: 5
                                            }}
                                        >
                                            {item.body}
                                        </Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                )
            }
        </ScrollView>
    )
}

export default DetailPost