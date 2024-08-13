import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation();

  const user = {
    name: 'Dr Vishnu Reddy',
    title: 'ENT',
    location: 'Hyderabad, India',
    followers: '❤️7300',
    profilePicture: require('../assets/myimage.jpeg'),
    posts: [
      { id: '1', image: require('../assets/doctor.jpeg'), screen: 'DoctorProfile' },
      { id: '2', image: require('../assets/food.jpeg'),   screen:'FoodPage' },
      { id: '3', image: require('../assets/p1.jpg') , screen: 'PersonImage'},
      { id: '4', image: require('../assets/p2.jpg') },
      { id: '5', image: require('../assets/p3.jpg')},
      { id: '6', image: require('../assets/p4.jpg') ,},
    ],
  };

  const handlePress = (screen) => {
    if (screen) {
      navigation.navigate(screen);
    }
  };

  const renderPost = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.screen)} style={styles.touchable}>
      <Image source={item.image} style={styles.postImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={user.profilePicture} style={styles.profileImage} />
        <View style={styles.profileDetailsContainer}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.title}>{user.title}</Text>
          <Text style={styles.location}>{user.location}</Text>
          <Text style={styles.bio}>
            Talks about #MicroSurgery, #ENT, #MicroSurgery, #ENT, #MicroSurgery, #ENT...
          </Text>
          <View style={styles.followContainer}>
            <Text style={styles.followers}>{user.followers} followers</Text>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Personal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Professional</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Company</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={user.posts}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        numColumns={3}
        style={styles.postList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  profileContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileDetailsContainer: {
    alignItems: 'center',
    marginBottom: 20,
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
  location: {
    fontSize: 16,
    color: '#666',
  },
  bio: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  followContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  followers: {
    fontSize: 14,
    marginRight: 10,
  },
  followButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  followButtonText: {
    color: 'white',
    fontSize: 14,
  },
  shareButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  shareButtonText: {
    color: 'white',
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#007AFF',
    marginHorizontal: 5,
    borderRadius: 20,
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
  postList: {
    marginHorizontal: 10,
  },
  touchable: {
    flex: 1,
    margin: '1.5%',
    aspectRatio: 1, // Ensures square images
  },
  postImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

export default UserProfile;
