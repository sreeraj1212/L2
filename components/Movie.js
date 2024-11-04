import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const Movie = ({title, year ,icon_name , poster })=> {
  return (
    <View>
      <Image source = {poster} style={{width:400,height:500}} />
      <Text>
        {title} {year}
      </Text>
      <Icon name={icon_name} size={20} color="#B23B23" />
    </View>
  );

};

// const display =() => {
//   return (
//     <View>
//       <Movie title="Doctor Sleep" year={2019} icon_name="paw" poster={require("./img/doctor-sleep.jpg")}/>
//     </View>
//   );
// };


export default Movie;
