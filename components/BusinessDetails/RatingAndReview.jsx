import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function RatingAndReview() {

    const [rating, setRating] = useState(4);

  return (
    <View style={{padding: 10,}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Reviews</Text>
      <Rating
      showRating
      onFinishRating={(rating)=>setRating(rating)}
      style={{ paddingVertical: 10 }}
      />
      <TextInput
      placeholder='Write your comments'
      numberOfLines={4}
      style={{
        padding:10,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 1,
        textAlignVertical: 'top',
      }}
      ></TextInput>
      <TouchableOpacity
      style={{
        padding:10,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 6,
        marginVertical: 10,
      }}
      >
        <Text
        style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 500,
        }}
        >Submit</Text>
      </TouchableOpacity>

    </View>
  )
}