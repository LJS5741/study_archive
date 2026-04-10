import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: lightgray;
  height: 20px;
`;

const Footer = styled.footer`
  background: orange;
  height: 20px;
`;

const Main = styled.main`
  flex: 1;
`;

const Layout = () => {
  return (
    <Container>
      <Header>여기는 헤더 영역 입니다.</Header>
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
    </Container>
  );
};
export default Layout;
