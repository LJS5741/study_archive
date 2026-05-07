import img1 from "../../img/이글스_오렌지유니폼.jpg";
import img2 from "../../img/이글스_화이트유니폼.jpg";
import img3 from "../../img/이글스_네이비유니폼.jpg";
import styled from "styled-components";

const Container = styled.div`
  width: 1140px;
  margin: 50px auto;
  background-color: lightgray;

  padding: 20px 50px;
  box-sizing: border-box;
`;

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Box = styled.div`
  background: white;
  border: 1px solid #ddd;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const Content = styled.div`
  text-align: center;
  padding: 0 30px 40px 30px;
`;

const Price = styled.p`
  color: #ff5e00;
  font-weight: bold;
`;

const Badge = styled.span`
  text-decoration: underline;
`;

const Interface = () => {
  const handleClick = () => {
    try {
      const information = null;

      if (!information) {
        throw new Error("상품 정보가 없습니다.");
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Container>
      <H1>NEW ITEM 26시즌 이글스 신제품</H1>
      <Wrapper>
        <Box onClick={handleClick}>
          <Img src={img1} alt="" />
          <Content>
            <h3 style={{ lineHeight: "0" }}>26 어센틱 홈 유니폼(오렌지)</h3>
            <Price>149,000원</Price>
            <p>단독 구매 상품</p>
            <Badge>회원 구매</Badge>
          </Content>
        </Box>
        <Box onClick={handleClick}>
          <Img src={img2} alt="" />
          <Content>
            <h3 style={{ lineHeight: "0" }}>26 어센틱 홈 유니폼(오렌지)</h3>
            <Price>149,000원</Price>
            <p>단독 구매 상품</p>
            <Badge>회원 구매</Badge>
          </Content>
        </Box>
        <Box onClick={handleClick}>
          <Img src={img3} alt="" />
          <Content>
            <h3 style={{ lineHeight: "0" }}>26 어센틱 홈 유니폼(오렌지)</h3>
            <Price>149,000원</Price>
            <p>단독 구매 상품</p>
            <Badge>회원 구매</Badge>
          </Content>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Interface;
