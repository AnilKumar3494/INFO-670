
import { useState } from 'react';
import { Text, View, Image, Button, FlatList } from 'react-native';

const Tiger = (prop) => {
  const [isHungry, setIsHungry] = useState(true)
  const tigerImageList = {
    tiger1: {

      link: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3JvYl9yYXdwaXhlbF9jbG9zZS11cF9vbl9mYWNlX3RpZ2VyX2xvb2tpbmdfYXRfdGhlX2NhbWVyYV9mcm9udF8zODdhYzlhZC00ZWY5LTRiYzktODcyZC1lZjFiMjc0ODUzY2YuanBn.jpg"
    }
  }

  return (
    <View>
      <Text style={{
        fontSize: 25
      }}>Hello, I am {prop.name} </Text>
      <Image source={{
        uri: tigerImageList.tiger1.link,
      }}
        style={{
          width: 100,
          height: 100
        }}
      ></Image>
      <Button
        onPress={
          () => {
            setIsHungry(false)
          }
        }
        title={isHungry ? "I am Hungry - Click to feed" : "Thanks for feeding, I am full :)"}

        style={{

        }}
      ></Button>
    </View>
  )
}

const Tigers = () => {
  return (
    <View>
      <FlatList
        data={
          [
            { name: "Tiger 1" },
            { name: "Tiger 2" },
            { name: "Tiger 3" },
          ]
        }
      >


      </FlatList>
      <Text>"Checking"</Text>


    </View>
  )
}



export default Tigers
