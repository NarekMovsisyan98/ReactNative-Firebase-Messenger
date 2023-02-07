import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import {Button, Image, Input} from 'react-native-elements';


const LoginScreen = (props) => {
    return (
      <SafeAreaView>
          <Image source={{
              uri:"https://zammad.com/media/pages/product/features/chat/43e3b749a7-1630946043/chat-256x.png",
          }} style={{width:200,height:200}}/>

<View className="h-7 w-7 bg-white"></View>
      </SafeAreaView>
    );
}

export default LoginScreen;
