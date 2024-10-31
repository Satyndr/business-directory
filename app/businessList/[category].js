import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { getproductsByCategory } from '../../service/operations/products';
import BusinessListCard from '../../components/BusinessList/BusinessListCard';

export default function BusinessListByCategory() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    const {category} = useLocalSearchParams();
    // console.log("Category is :", category);

    const getBusinessList = async()=>{
        try {
            setLoading(true)
            const productList = await getproductsByCategory(category);
            setProducts(productList);
            // console.log("Products are:", productList);
            setLoading(false)
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:category,
        })

        getBusinessList();
    }, [category])

    if(loading){
        return(
            <Text>Loading...</Text>
        )
    }
    

    return (
        <View>
            {products.length === 0 ? (
                <Text>No Products Found</Text> 
            ) : (
                <FlatList
                    data={products}
                    onRefresh={getBusinessList}
                    refreshing={loading}
                    keyExtractor={(item, index) => index.toString()}  // Add a keyExtractor for better performance
                    renderItem={({ item }) => (
                        <BusinessListCard
                            product={item}
                        />
                    )}
                />
            )}
        </View>
    );
}