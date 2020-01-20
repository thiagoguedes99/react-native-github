import React, {useState, useEffect} from 'react';
// import {View, Text, Button} from 'react-native';
import {View, Text, TextInput, Keyboard, FlatList, Image, ActivityIndicator} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services';

import styles from './styles';

// export default () => (
//   <View>
//     <Text>foi aqui main</Text>
//   </View>
// );

// export default function Main() {
//   return (
//     <View>
//       <Text>foi aqui main</Text>
//     </View>
//   );
// }

// const Main = props => (
//   <View style={styles.container}>
//     <Text>foi aqui main</Text>
//     <Button
//       title="Go to Details"
//       onPress={() => props.navigation.navigate('User')}
//     />
//   </View>
// );

// const Main = props => (
//   <View style={styles.container}>
//     <View style={styles.form}>

//       <TextInput
//         style={styles.input}
//         selectionColor="#428AF8"
//         placeholderTextColor="#999"
//         autoCorrect={false}
//         autoCapitalize="none"
//         placeholder="Adicionar usuário"
//       />

//       <RectButton style={styles.submit}>
//         <Icon name="add" size={20} color="#FFF" />
//       </RectButton>

//     </View>
//   </View>
// );

const Main = props => {
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function save() {
      try {
        // setUsers(JSON.parse(await AsyncStorage.getItem('users')));
        const usersStorage = await AsyncStorage.getItem('users');
        usersStorage && setUsers(JSON.parse(usersStorage));
      } catch (e) {
        // saving error
      }
    }

    save();
  }, []);

  useEffect(() => {
    try {
      AsyncStorage.setItem('users', JSON.stringify(users));
    } catch (e) {
      // saving error
    }
  }, [users]);

  const handleAddUser = async () => {
    setLoading(true);

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    // setUsers([]);
    setUsers([...users, data]);
    // setUsers([data]);
    setNewUser('');
    setLoading(false);
    Keyboard.dismiss();
    // alert(users);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>

        <TextInput
          style={styles.input}
          selectionColor="#428AF8"
          placeholderTextColor="#999"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
          value={newUser}
          onChangeText={text => setNewUser(text)}
          returnKeyType="send"
          onSubmitEditing={handleAddUser}
        />

        <RectButton style={[styles.submit, {opacity: loading ? 0.7 : 1}]} onPress={handleAddUser}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Icon name="add" size={20} color="#FFF" />
          )}
        </RectButton>

      </View>

      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={user => user.login}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.user}>
            <Image style={styles.userImage} source={{uri: `${item.avatar}`}} />
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userBio}>{item.bio}</Text>

            <RectButton style={styles.buttonDetail} onPress={() => props.navigation.navigate('User', {user: item})}>
              <Text style={styles.buttonDetailText}>ver perfil</Text>
            </RectButton>
          </View>
        )}
      />
    </View>
  );
};

export default Main;
