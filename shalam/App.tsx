import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainNav } from "./navigators/MainNav";

export default function App() {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
}