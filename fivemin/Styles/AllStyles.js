import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 26,
  },
  header: {
    backgroundColor: '#F7CF3757',
    width: '100%',
    height: 60,
  },
  footer: {
    backgroundColor: '#F7CF3757',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
  },
  justify: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowHorizontal: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  gap: {
    width: '100%',
    gap: 10,
  },
  hr: {
    backgroundColor: '#F7CF3757',
    width: '100%',
    height: 6,
  },
  title: {
    fontFamily: 'InriaSerif-Bold',
    color: '#F7CF37',
    fontWeight: 'bold',
    fontSize: 30,
  },
  subText: {
    fontSize: 26,
  },
  text: {
    fontSize: 16,
  },
  imgLogo: {
    backgroundColor: '#F7CF3757',
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#F7CF3757',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: 40,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  buttonMaior: {
    backgroundColor: '#F7CF3757',
    width: 380,
    height: 40,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 4,
  },
});

export default styles;
