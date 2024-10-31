import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getAllCategories } from '../../service/operations/products';
import { useRouter } from 'expo-router';

export default function Category() {

  const router = useRouter();

    const [categories, setProducts] = useState([]);

    const getProducts = async()=>{
        const productList = await getAllCategories();
        setProducts(productList);
    }

    useEffect(()=>{
        getProducts();
    }
    ,[])

  return (
    <View>
      <Text
      style={{
        padding:20,
        fontFamily:'outfit-medium',
        fontSize:17,
      }}
      >Shop by Category</Text>

      <View>
      <FlatList
            data={categories}
            horizontal={true}
            style={{
                padding:5,
                display: 'flex',
                gap: 10,
            }}
            keyExtractor={(item, index) => index.toString()} 
            renderItem={({ item }) => (
                <TouchableOpacity
                onPress={()=>{
                  router.push('/businessList/'+item)
                }}
                style={{
                  backgroundColor: '#d6cbf5',
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  marginHorizontal: 5,
                  borderWidth: 1,
                }}
                >
                  <Text
                  style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 15,
                  }}
                  >{item.toUpperCase()}</Text>
                {/* <Image
                    source={{ uri: item.image}}
                    style={{
                        width: 90,
                        height: 90,
                        marginRight: 10,
                        borderRadius:99
                    }}
                    />
                    <Text>{item.name}</Text> */}
                </TouchableOpacity>
            )}
        />
      </View>
    </View>
  )
}