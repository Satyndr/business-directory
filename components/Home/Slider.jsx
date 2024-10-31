import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../service/operations/products'
import { useRouter } from 'expo-router'

export default function Slider() {

    const [products, setProducts] = useState([]);
    const router = useRouter();

    const getProducts = async()=>{
        const productList = await getAllProducts();
        setProducts(productList);
        // console.log(products);
    }

    useEffect(()=>{
        getProducts();
    }
    ,[])

  return (
    <View>
      <Text
      style={{
        fontFamily:'outfit-medium',
        fontSize:20,
        paddingLeft:20,
        paddingTop:20,
        marginBottom:5,
      }}
      >
        #Special For you
      </Text>

      <FlatList
        data={products}
        horizontal={true}
        style={{
            padding:10
        }}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
          <TouchableOpacity 
          style={{
            backgroundColor: '#fff',
            padding: 10, 
            borderRadius:12,
            marginRight: 10,
            }}
          onPress={()=>router.push('/businessDetails/'+item.id)}
            >
            <Image
                source={{ uri: item.image }}  
                style={{
                    width: 170,
                    height: 220,
                    objectFit: 'contain',
                }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}