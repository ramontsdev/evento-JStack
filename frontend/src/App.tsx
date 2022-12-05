import { Header } from './components/header';
import { Orders } from './components/orders/index.';
import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Orders/>
    </>
  );
}
