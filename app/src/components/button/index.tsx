import { ReactNode } from 'react';
import { Text } from '../Text';
import { Container } from './styles';

type ButtonProps = {
  children: ReactNode;
  onPress?(): void;
  disabled?: boolean;
}

export function Button({ children, onPress, disabled = false }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight='600' color='#fff'>
        {children}
      </Text>
    </Container>
  );
}
