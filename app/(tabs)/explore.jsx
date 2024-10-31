import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import Category from '../../components/Home/Category'
import Shops from '../../components/Home/Shops'

export default function explore() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        padding: 20,
        paddingTop: 40,
      }}
      >Explore More</Text>

      <View
      style={{
        display:"flex",
        flexDirection:'row',
        gag:10,
        alignItems:'center',
        backgroundColor: '#ffffff',
        padding: 10,
        // marginVertical: 10,
        marginTop: 5,
        borderRadius: 8,
        borderColor: Colors.PRIMARY,
        borderWidth:1,
        margin: 20,
      }}
      >
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput placeholder='Search here'
        style={{
          fontFamily:'outfit',
          fontSize:16,
        }}
        />
      </View>


      {/* Category */}
      <Category/>

      <Shops/>

    </ScrollView>
  )
}