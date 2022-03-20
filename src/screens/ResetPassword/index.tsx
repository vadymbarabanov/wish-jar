import React from 'react';
import { Button } from '../../components/Buttons/Button';
import { EmailInput } from '../../components/Inputs/EmailInput';
import { Title } from '../../components/Title';
import { Wrapper } from '../../components/Wrapper';
import { useStyles } from '../../helpers/hooks/useStyles';
import { AuthScreenProps } from '../../navigation/AuthStack';
import { AuthStackRoutes } from '../../navigation/routes';
import { createStyles } from './styles';

export const ResetPassword = ({ navigation }: AuthScreenProps) => {
  const styles = useStyles(createStyles);

  return (
    <Wrapper>
      <Title style={styles.marginBottom} text="Reset Password" />
      <EmailInput style={styles.marginBottom} />
      <Button
        onPress={() => navigation.navigate(AuthStackRoutes.RESET_PASSWORD)}
        style={styles.marginBottom}
        text="Reset"
      />
    </Wrapper>
  );
};
