// src/DoctorProfile.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DoctorProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/doctor.jpeg')} style={styles.profileImage} />
      <Text style={styles.name}>Dr Vishnu Reddy</Text>
      <Text style={styles.title}>ENT Specialist</Text>
      {/* Add more content as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    color: '#666',
  },
});

export default DoctorProfile;
