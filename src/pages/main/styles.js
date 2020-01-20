import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    // backgroundColor: '#333',
  },
  form: {
    flexDirection: 'row',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,

    // paddingTop: 0,
    // paddingBottom: 0,
    // paddingLeft: 15,
    // paddingRight: 15,
    paddingVertical: 0,
    paddingHorizontal: 15,

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eee',
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
    borderRadius: 4,
    marginLeft: 10,

    // paddingTop: 0,
    // paddingBottom: 0,
    // paddingLeft: 12,
    // paddingRight: 12,
    paddingVertical: 0,
    paddingHorizontal: 15,
  },
  list: {
    marginTop: 20,
  },
  user: {
    alignItems: 'center',
    marginVertical: 0,
    marginHorizontal: 30,
  },
  userImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },
  userName: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',
  },
  userBio: {
    fontSize: 13,
    lineHeight: 18,
    color: '#999',
    marginTop: 5,
    textAlign: 'center',
  },
  buttonDetail: {
    marginTop: 10,
    alignSelf: 'stretch',
    borderRadius: 4,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
  },
  buttonDetailText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default styles;
