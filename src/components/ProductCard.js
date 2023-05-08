import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from './database/Database';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductCard = ({data, navigation}) => {
    return (
      <TouchableOpacity style={{width: '48%', marginVertical: 14}} onPress={() => navigation.navigate('ProductInfo')}>
        <View style={styles.productCardStyle1}>
          {data.isOff ? (
            <View style={styles.productCardStyle2}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                {data.offPercentage}%
              </Text>
            </View>
          ) : null}

          <Image
            source={data.productImage}
            style={{
              width: '80%',
              height: 80,
              resizeMode: 'contain',
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 12,
            color: COLORS.black,
            fontWeight: '600',
            marginBottom: 2,
          }}>
          {data.productName}
        </Text>

        {data.category == 'accessory' ? (
          data.isAvailable ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome
                name="circle"
                style={{fontSize: 12, marginRight: 10, color: COLORS.green}}
              />
              <Text style={{fontSize: 12, color: COLORS.green}}>Available</Text>
            </View>
          ) : (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome
                name="circle"
                style={{fontSize: 12, marginRight: 10, color: COLORS.red}}
              />
              <Text style={{fontSize: 12, color: COLORS.red}}>
                Unavailable
              </Text>
            </View>
          )
        ) : null}

        <Text style={{color: 'black'}}>Rs {data.productPrice}.00</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    productCardStyle1: {
        width: '100%',
        height: 100,
        backgroundColor: COLORS.backgroundLight,
        position: 'relative',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
      },
      productCardStyle2: {
        position: 'absolute',
        width: '20%',
        height: 24,
        backgroundColor: COLORS.green,
        top: 0,
        left: 0,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });

export default ProductCard;