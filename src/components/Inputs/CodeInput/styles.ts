import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';

// Be careful when change styles related to react-native-confirmation-code-field
// They can overlap each other
export const createStyles: CreateStyles = () => {
  const styles = StyleSheet.create({
    root: {
      minHeight: 300,

      padding: 20,
    },
    title: {
      textAlign: 'center',
      fontSize: 30,
    },
    codeFieldRoot: {
      width: 280,

      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cellRoot: {
      justifyContent: 'center',
      alignItems: 'center',

      width: 60,
      height: 60,

      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    cellText: {
      color: '#000',
      fontSize: 36,
      textAlign: 'center',
    },
    focusCell: {
      borderBottomWidth: 2,
      borderBottomColor: '#007AFF',
    },
  });

  return styles;
};
