import Calculator from '@/components/Calculator';
import { Stack } from 'expo-router';

import { COLORS } from '@/constants/Theme';

export default function Index() {
  return (
    <>
      <Stack.Screen options={{
        title: '',
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.defaultText
      }} />
      <Calculator />
    </>
  );
}
