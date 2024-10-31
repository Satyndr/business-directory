import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import Shops from '../../components/Home/Shops'

export default function home() {
  return (
    <View>
      {/* header */}
      <Header></Header>

      <ScrollView showsVerticalScrollIndicator={false}>
      {/* slider */}
      <Slider></Slider>

      {/* category */}
      <Category></Category>

      {/* popular businesses */}
      <Shops/>
      </ScrollView>
    </View>
  )
}