import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { isAndroid } from '../../constants/device';
import { useStyles } from '../../helpers/hooks/useStyles';
import { useTheme } from '../../helpers/hooks/useTheme';
import loaderState from '../../mobx/LoaderState';
import { createStyles } from './styles';

const ANDROID_LOADER_SIZE = 60;
const IOS_LOADER_SIZE = 'large';

const LoaderProvider: FC = ({ children }) => {
  const styles = useStyles(createStyles);
  const { theme } = useTheme();

  return (
    <View style={styles.outerWrapper}>
      {children}
      {loaderState.loading && (
        <View style={styles.innerWrapper}>
          <ActivityIndicator
            size={isAndroid ? ANDROID_LOADER_SIZE : IOS_LOADER_SIZE}
            color={theme.info}
          />
        </View>
      )}
    </View>
  );
};

export default observer(LoaderProvider);
