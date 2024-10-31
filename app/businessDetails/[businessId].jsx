import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { getProductDetails } from '../../service/operations/products'
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import ActionButtons from '../../components/BusinessDetails/ActionButtons'
import RatingAndReview from '../../components/BusinessDetails/RatingAndReview';

export default function businessId() {
  
  const [loading, setLoading] = useState(false);
  const [businessDetails, setBusinessDetails] = useState('null');
  const router = useRouter();

  const { businessId } = useLocalSearchParams();

  const getDetails = async()=>{
    try {
      setLoading(true);
  
      const details = await getProductDetails(businessId);
      setBusinessDetails(details);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getDetails();
  },[businessId])

  if(loading){
    return(
        <Text>Loading...</Text>
    )
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff', paddingBottom:20,}} showsVerticalScrollIndicator={false}>

      {/* header Nav */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>router.back()}>
          <Ionicons name='arrow-back-circle' size={40} color="black"/>
        </TouchableOpacity>
        <Ionicons name='heart-outline' size={40} color="black"/>
      </View>


      <View style={{objectFit: 'cover', backgroundColor: '#fff',}}>
        
        <Image source={{uri: businessDetails.image}}
        style={{
          height: 300,
          width: "100%",
          objectFit: 'contain',
          marginVertical: 33,
        }}
        />

      </View>

      {/* details */}
      <View style={styles.box}>
          <Text style={styles.title}>{businessDetails.title}</Text>
          <Text style={styles.desc}>{businessDetails.description}</Text>
      </View>

      {/* action buttons */}
      <ActionButtons/>

      {/* rating and review */}
      <RatingAndReview />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header:{
    position: 'absolute',
    zIndex: 10,
    width: '100%', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 35,
  },
  box:{
    padding: 10,
    marginTop: -5,
    // backgroundColor: '#cccccc',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  title:{
    fontFamily: 'outfit-bold',
    fontSize: 20,
    padding: 5,
  },
  desc:{
    fontFamily: 'outfit',
    fontSize: 15,
    padding: 5,
  }
})