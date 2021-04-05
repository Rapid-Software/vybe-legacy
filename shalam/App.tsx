import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootNav } from './navigators/RootNav';

export default function App() {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
}