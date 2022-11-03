import {ChakraProvider} from '@chakra-ui/react'
import Feed from './pages/mainpage/Feed';

function App() {
  return (
    <ChakraProvider>
      <Feed></Feed>
    </ChakraProvider>
    
  );
}

export default App;
