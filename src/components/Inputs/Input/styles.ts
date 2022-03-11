import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  outerWrapper: {
    marginVertical: 5,
  },
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,

    borderWidth: 2,
    borderRadius: 10,
    borderTopLeftRadius: 0,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  label: {
    marginBottom: 10,
    marginLeft: 10,

    fontSize: 16,
  },
});
