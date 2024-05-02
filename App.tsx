import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='translucent'
        translucent={true}
      />
      <Home />
    </>
  );
} 


/*
git remote add upstream https://github.com/gilsondefreitas2014/imhereitPS
git add .
git commit -m "teste"
git push
*/