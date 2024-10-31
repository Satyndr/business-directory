import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUser } from '@clerk/clerk-expo'

const menuList = [
  {
    id: 1,
    name: 'Add Businesses',
    image: require("../../assets/images/add.png"),
    path: ''
  },
  {
    id: 2,
    name: 'My Businesses',
    image: require("../../assets/images/business-and-trade.png"),
    path: ''
  },
  {
    id: 3,
    name: 'Share App',
    image: require("../../assets/images/share.png"),
    path: ''
  },
  {
    id: 4,
    name: 'Logout',
    image: require("../../assets/images/logout.png"),
    path: ''
  },
]

export default function profile() {

  const { user } = useUser();

  return (
    <SafeAreaView style={{padding: 10,}}>
      <Text style={{fontSize:20, fontWeight:600}} >Profile</Text>
    <View 
    style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems:'center',
      paddingVertical: 10,
      gap: 10,
    }}>
      <Image source={{uri: user?.imageUrl}} 
      style={{ height: 100, width:100 , borderRadius: 99}}
      />
      <Text style={{fontFamily:'outfit-medium'}}>{user?.fullName}</Text>
      <Text>{user?.primaryEmailAddress.emailAddress}</Text>

      <FlatList
      data={menuList}
      numColumns={2}
      style={{
        display: 'flex',
        gap: 20,
        marginTop: 20,
      }}
      renderItem={({item, key})=>(
        <View style={{ 
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          backgroundColor:"#fff", 
          borderRadius:10,
          padding: 10,
          width: '47%',
          margin:6,
          }}>
          <Image source={item.image} style={{height:30, width:30}}/>
          <Text >{item.name}</Text>
        </View>
      )}
      />

    </View>
    </SafeAreaView>
  )
}