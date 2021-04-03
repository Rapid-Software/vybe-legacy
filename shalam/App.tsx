import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainNav } from "./navigators/MainNav";
import { WelcomeNav } from "./navigators/WelcomeNav";
import { SecureStore } from "./lib/securestore";

export default function App() {
  return (
    <NavigationContainer>
      {SecureStore.isTokenAvailable() ? <MainNav /> : <WelcomeNav />}
    </NavigationContainer>
  );
}