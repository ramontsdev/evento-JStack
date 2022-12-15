
import { Button } from '../components/button';
import { Categories } from '../components/categories';
import { Header } from '../components/header';
import { Menu } from '../components/menu';
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>

      <Footer>
        <FooterContainer>
          <Button onPress={() => alert('Novo Pedido')}>
            Novo Pedido
          </Button>
        </FooterContainer>
      </Footer>
    </>
  );
}
