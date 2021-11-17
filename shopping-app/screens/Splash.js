import React from 'react';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const image = { uri: 'https://i.pinimg.com/564x/c1/0b/66/c10b66b6de3018c1e15510bbb8ba8908.jpg' };

const SplashScreen = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>

    <TouchableOpacity 
    onPress={()=>{navigation.navigate("StartScreen")}}
       style={styles.TouchableOpacity}>
        <Text style={{color:"#FFE5CC",marginRight:10,textAlign:'center',fontSize:25,fontWeight:'bold'}}>Get Started</Text>
        <AntDesign name ="forward" size={30} color="#ff9933"/>
        </TouchableOpacity>

      <Text style={styles.text}>Dainty</Text>
      <Text style={{
        fontSize:20,
        color:'#FFE5CC',
        textAlign:'center',
        fontFamily:'papyrus',
        marginLeft:20,
        marginRight:10
        }}>by Rebecca
        </Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginTop:10,
    color: '#FFE5CC',
    fontFamily: 'Brush Script MT',
    fontSize: 50,
    fontWeight: '700',
    textAlign: 'center',
  },
    TouchableOpacity:{
          textAlign:'center',
          flexDirection:"row",
          backgroundColor:'black',
          justifyContent:'center',
          opacity:0.7,
          borderWidth:10,
          borderRadius:30,
          marginHorizontal:50,
          marginTop:500,
    },
});

export default SplashScreen;