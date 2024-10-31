import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {

  const { signOut } = useAuth();

    const {user} = useUser();

  return (
    <View
    style={{
        padding:20,
        paddingTop:50,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    }}
    >
      <View
      style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
      }}
      >
        <Image source={{uri:user?.imageUrl}}
        style={{
            width:45,
            height:45,
            borderRadius:99,
        }}
        ></Image>

        <View>
            <Text
            style={{
                color:'#fff'
            }}
            >Welcome,</Text>
            <Text
            style={{
                fontSize:20,
                fontFamily:'outfit-medium',
                color:'#fff'
            }}
            >{user?.fullName}</Text>
        </View>

        <Text
        style={{
          color:'#fff',
          marginLeft:120,
        }}
        onPress={()=>{
          signOut();
        }}
        >Logout</Text>

      </View>

      <View
      style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:10,
        marginVertical:10,
        marginTop:15,
        borderRadius:15,
      }}
      >
        <Ionicons name="search" size={24} color="black" />
        <TextInput placeholder='Search...' />
      </View>
    </View>
  )
}