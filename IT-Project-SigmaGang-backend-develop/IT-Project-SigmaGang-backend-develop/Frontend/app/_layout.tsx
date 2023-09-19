import CustomHeader from '@/components/CustomHeader';
import { Slot, Stack, useNavigation, useRouter, useSegments } from 'expo-router';
import React, { useEffect } from 'react';

const RootLayoutNav = () => {
  return (
      <Stack screenOptions={{
      headerStyle: {
        backgroundColor: 'pink',
      },
      headerTintColor: 'black',
      headerBackTitle: 'Back',
      headerTitleStyle: {
        fontWeight: 'bold'    
      },
    }}>
      <Stack.Screen name='index' options={{
        headerShown: false,
      }} />
      <Stack.Screen name='(public)/login' options={{
        headerTitle: 'Login',
        headerShown: true,
      }} />
      <Stack.Screen name='(public)/register' options={{
        headerTitle: 'Create Account',
        headerShown: true,
      }} />
      <Stack.Screen name='(public)/account-verify' options={{
        headerTitle: 'Forgot Password',
        headerShown: true,
      }} />
      <Stack.Screen name='(public)/reset' options={{
        headerTitle: 'Reset Password',
        headerShown: true,
      }} />
      <Stack.Screen name='(auth)/home_page' options={{
        header: () => <CustomHeader />,
        headerTitle: 'Home Page',
        headerShown: true,
      }} />
    </Stack>
  );
};

export default RootLayoutNav;
