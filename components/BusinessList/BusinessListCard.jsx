import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function BusinessListCard({product}) {

  const router = useRouter();
    // console.log(product);
  return (
    <TouchableOpacity
    style={{
        padding:10,
        margin:10,
        borderRadius:15,
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'row',
        gap: 7,
    }}

    onPress={()=>router.push('/businessDetails/'+product.id)}
    >
      <Image
      source={{uri:product.image}}
      style={{
        width:120,
        height:120,
        borderRadius:15,
      }}
      ></Image>

      <View
      style={{
        flex:1,
      }}
      >
        <Text
        style={{
            fontFamily:'outfit-medium',
            padding:10,
        }}
        >{product.title}</Text>
        <Text
        style={{
            fontFamily:'outfit-bold',
            paddingLeft:10,
            fontSize:20
        }}
        >₹ {product.price}</Text>
      </View>
    </TouchableOpacity>
  )
}