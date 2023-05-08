import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, Items} from '../../components/database/Database';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../../components/ProductCard';

const Home = ({navigation, props}) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();

      return unsubscribe;
    });
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  //create a product reusable card

  return (
    <View
      style={{width: '100%', height: '100%', backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="shopping-bag" style={styles.bagIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="shopping-cart" style={styles.cartIcon} />
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 10, padding: 16}}>
          <Text style={styles.text1}>Kaja shop & services</Text>
          <Text style={styles.text2}>
            Audio shop in Sri Lanka
            {'\n'}This shop offers both products and services
          </Text>
        </View>

        <View style={{padding: 16}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.text3}>Products</Text>
              <Text style={styles.text4}>41</Text>
            </View>
            <Text style={styles.text5}>SeeAll</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {products.map(data => {
              return <ProductCard data={data} key={data.id} navigation={props.navigation}/>;
            })}
          </View>
        </View>

        <View style={{padding: 16}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.text3}>Accessories</Text>
              <Text style={styles.text4}>71</Text>
            </View>
            <Text style={styles.text5}>SeeAll</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {accessory.map(data => {
              return <ProductCard data={data} key={data.id} navigation={props.navigation}/>;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bagIcon: {
    fontSize: 18,
    color: COLORS.backgroundMedium,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  cartIcon: {
    fontSize: 18,
    color: COLORS.backgroundMedium,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  text1: {
    fontSize: 26,
    color: COLORS.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  text2: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '400',
    letterSpacing: 1,
    marginBottom: 10,
    lineHeight: 24,
  },
  text3: {
    fontSize: 18,
    color: COLORS.black,
    fontWeight: '500',
    letterSpacing: 1,
  },
  text4: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: 10,
  },
  text5: {
    fontSize: 14,
    color: COLORS.blue,
    fontWeight: '400',
  },
});

export default Home;
