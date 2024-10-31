import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Stores = [
    {
        id: 1,
        title: 'Modern Clothing Center',
        desc: '525 N Tryon Streets NC 28117',
        image: 'https://images.pexels.com/photos/4053267/pexels-photo-4053267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 2,
        title: 'Modern Clothing Center',
        desc: '525 N Tryon Streets NC 28117',
        image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 3,
        title: 'Modern Clothing Center',
        desc: '525 N Tryon Streets NC 28117',
        image: 'https://images.pexels.com/photos/11835352/pexels-photo-11835352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 4,
        title: 'Modern Clothing Center',
        desc: '525 N Tryon Streets NC 28117',
        image: 'https://images.pexels.com/photos/4053267/pexels-photo-4053267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 5,
        title: 'Modern Clothing Center',
        desc: '525 N Tryon Streets NC 28117',
        image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
]

export default function Shops() {
  return (
    <View
    style={{
        display: 'flex',
        gap: 10,
    }}
    >
        <Text
        style={{ padding:20, fontFamily:'outfit-medium', fontSize:17}}
        >Stores here</Text>
      {/* <FlatList
      data={Stores}
      renderItem={({item, index})=>(
        <View
        style={{
            borderRadius: 20,
            backgroundColor: '#fff',
            margin: 10,
            overflow: 'hidden'
        }}
        >
            <Image source={{uri: item.image}}
                style={{
                    width: '100%',
                    height: 220,
                    objectFit: 'cover',
                }}
            />
            <Text
            style={{
                fontFamily: 'outfit-medium',
                fontSize: 15,
                padding: 10,
            }}
            >{item.title}</Text>
            <Text
            style={{
                padding: 10,
                paddingTop: 0,
            }}
            >{item.desc}</Text>
        </View>
      )}
      /> */}

      {Stores.map((item, key)=>(
        <View
        style={{
            borderRadius: 20,
            backgroundColor: '#fff',
            margin: 10,
            overflow: 'hidden'
        }}
        key={key}
        >
            <Image source={{uri: item.image}} 
                style={{
                    width: '100%',
                    height: 220,
                    objectFit: 'cover',
                }}
            />
            <Text
            style={{
                fontFamily: 'outfit-medium',
                fontSize: 15,
                padding: 10,
            }}
            >{item.title}</Text>
            <Text
            style={{
                padding: 10,
                paddingTop: 0,
            }}
            >{item.desc}</Text>
        </View>
      ))}
    </View>
  )
}