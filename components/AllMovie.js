import React from 'react';
import {ScrollView} from 'react-native';
import Movie from './Movie';


const AllMovies = () => {
  return (
    <ScrollView>
      <Movie title="Doctor Sleep" year={2019} icon_name="paw" poster={require("../img/doctor-sleep.jpg")}/>
      <Movie title="Midway" year={2020} icon_name="person-rifle" poster={require("../img/midway.jpg")}/>
    </ScrollView>
  );
};

export default AllMovies;
