import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useOAuth } from '@clerk/clerk-expo'
import { useWarmUpBrowser } from './../hooks/useWarmUpBrowser';
import * as Linking from 'expo-linking'

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

    const onPress = React.useCallback(async () => {
        try {
        const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
            redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
        })

        if (createdSessionId) {
            setActive({ session: createdSessionId })
        } else {
            // Use signIn or signUp for next steps such as MFA
        }
        } catch (err) {
        console.error('OAuth error', err)
        }
    }, [])


    return (
    <View>
        <View 
        style={{
            display:'flex',
            alignItems:'center',
            marginTop:100,
        }}
        >
        <Image source={require('./../assets/images/login.jpg')}
        style={{
            width:220,
            height:300,
        }}
        />
        </View>

        <View 
        style={styles.subContainer}
        >
            <Text 
                style={{
                    fontSize:30,
                    fontFamily:'outfit-bold',
                    textAlign:'center'
                }}>
                Your Ultimate 
                <Text
                style={{
                    color:Colors.PRIMARY
                }}
                > Business Directory</Text>
            </Text>
            <Text
            style={{
                fontSize:15,
                fontFamily:'outfit',
                textAlign:'center',
                marginVertical:15,
                color:Colors.GRAY,
            }}
            >
                Find your favourite business near you and post your own business to your community
            </Text>

            <TouchableOpacity style={styles.btn} onPress={onPress}
            >                
                <Text
                style={{
                    textAlign:"center",
                    color:"#fff",
                    fontFamily:"outfit-medium"
                }}
                >Let's get Started</Text>
            </TouchableOpacity>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    subContainer:{
        backgroundColor:'#fff',
        padding:30,
        marginTop:-20,
    },
    btn:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        borderRadius:40,
        marginTop:20,
    }
})