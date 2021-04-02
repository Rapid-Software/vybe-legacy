import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainNav } from "./navigators/MainNav";

// todo: store login creds (spotify id // etc / token)
// : mainNav ? welcome nav

export default function App() {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
}