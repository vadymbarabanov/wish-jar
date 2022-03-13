import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';
import buttonStyles from '../styles';

export const createStyles: CreateStyles = (theme) => {
  const styles = StyleSheet.create({
    text: {
      color: theme.link,
      fontSize: buttonStyles.fontSize,
      textAlign: 'center',
    },
    linkButton: {
      alignSelf: 'center',

      padding: buttonStyles.padding,
      marginVertical: buttonStyles.marginVertical,
    },
  });

  return styles;
};
