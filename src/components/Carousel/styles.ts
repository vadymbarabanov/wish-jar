import { StyleSheet } from 'react-native';
import { CIRCLE_WIDTH } from './PaginationItem';

export const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    alignItems: 'center',

    paddingBottom: 30,
  },
  innerWrapper: {
    flex: 1,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',

    width: 100,
  },
  paginationItem: {
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,

    borderRadius: 5,

    backgroundColor: 'white',
  },
});
