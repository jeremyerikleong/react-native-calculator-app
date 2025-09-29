import Calculator from '@/components/Calculator';
import { Stack } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS } from '@/constants/Theme';

export default function Index() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen options={{
        title: '',
        headerStyle: {
          backgroundColor: COLORS.background
        },
        headerShadowVisible: false,
        headerTintColor: COLORS.defaultText
      }} />

      <SafeAreaView style={{ flex: 1, paddingBottom: insets.bottom, backgroundColor: COLORS.background }}>
        <Calculator />
      </SafeAreaView>
    </>
  );
}