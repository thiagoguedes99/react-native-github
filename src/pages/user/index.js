import React, {useEffect, useState} from 'react';
import {View, Text, Button, Share} from 'react-native';

import api from '../../services';

// export default () => (
//   <View>
//     <Text>foi aqui User</Text>
//   </View>
// );

// export default function User() {
//   return (
//     <View>
//       <Text>foi aqui User</Text>
//     </View>
//   );
// }

// const User = props => (
//   <View>
//     <Text>foi aqui User</Text>
//     <Button
//       title="Go to Details"
//       onPress={() => props.navigation.navigate('Main')}
//     />
//   </View>
// );

const User = props => {
  const [user, setUser] = useState('');
    //   <View>
    //     <Text>foi aqui User</Text>
    //     <Button
    //       title="Go to Details"
    //       onPress={() => props.navigation.navigate('Main')}
    //     />
    //   </View>
    // ); useState('');
  const [stars, setStars] = useState('');

  useEffect(() => {
    setUser(props.navigation.getParam('user'));

    const resquest = async () => {
      const resp = await api.get(`/users/${user.login}/starred`);

      setStars(resp.data);
      console.log(user);
      console.log(resp.data);
    };

    resquest();
  }, []);


  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <View>
      <Text>foi aqui User</Text>
      <Text>{user.name}</Text>
      <Text>{user.bio}</Text>
      {/* <Text>{stars.reduce()}</Text> */}
      {/* <Text>{props.navigation.getParam('user')}</Text> */}
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Main')}
      />
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

// User.navigationOptions = {
//   title: 'Título do user no comp.',
// };

User.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('user').name,
});

// YourComponent.navigationOptions = screenProps => ({
//   title: screenProps.navigation.getParam("yourParam")
// });
export default User;
