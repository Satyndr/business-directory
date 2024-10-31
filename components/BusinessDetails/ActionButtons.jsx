import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const actionBtns=[
    {
        id:1,
        name: 'Call',
        iconName: 'call-outline',
    },
    {
        id:2,
        name: 'Location',
        iconName: 'location-outline',
    },
    {
        id:3,
        name: 'Website',
        iconName: 'globe-outline',
    },
    {
        id:4,
        name: 'Share',
        iconName: 'share-social-outline',
    },
]

export default function ActionButtons() {
  return (
    <View style={{
      width: '100%',
    }}>
      <FlatList
      data={actionBtns}
      keyExtractor={(item, index) => index.toString()}
      numColumns={4}
      columnWrapperStyle={{justifyContent: 'space-between', padding: 15,}}
      renderItem={({item, index})=>(
        <View
        key={index}
        >
          <View
          style={{
            height: 70,
            width: 70,
            borderRadius: 99,
            backgroundColor: '#d6cbf5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}
          >
            <Ionicons name={item.iconName} size={35} color='black'></Ionicons>
          </View>
          <Text style={{textAlign:'center'}}>{item.name}</Text>
        </View>
      )}
      />

    </View>
  )
}