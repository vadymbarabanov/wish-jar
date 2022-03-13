import { CreateStyles, Variant } from '../../types/Styles';
import { useTheme } from './useTheme';

export const useStyles = (createStyles: CreateStyles, variant?: Variant) => {
  const { theme } = useTheme();
  return createStyles(theme, variant);
};
