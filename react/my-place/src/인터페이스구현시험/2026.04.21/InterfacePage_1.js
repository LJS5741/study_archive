import img1 from "../../img/노시환.jpg";
import img2 from "../../img/노시환2.jpg";
import styled from "styled-components";

const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  padding: 25px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 20px;
`;

const Content = styled.p`
  width: 500px;
  margin-top: -10px;
`;

const TitleBox = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const RightImage = styled.img`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  width: 100%;
`;

const LeftImage = styled.img`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  width: 500px;
`;

const ContentTop = styled.p`
  width: 450px;
  margin: 0 auto;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

/* 🔥 핵심 */
const ContentBottom = styled.p`
  width: 450px;
  margin: 0 25px;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
`;

const InterfacePage = () => {
  return (
    <>
      <Container>
        <TitleBox>
          <h1>
            타격은 김기태·수비는 김성갑…한화 노시환 살리기 직접 나선 레전드들
            ‘23일 1군 복귀 예정’
          </h1>
          <Content>
            노시환은 20일까지 올 시즌 1군 13경기에 출전해 타율 0.145, 3타점,
            6득점을 올리는 데 그쳤다. 장타율도 0.164에 머물렀다. 설상가상으로
            수비에서도 실수가 겹쳤다. 결국 13일 1군 엔트리에서 제외됐다
          </Content>
        </TitleBox>

        <RightImage src={img1} alt="노시환1" />
        <LeftImage src={img2} alt="노시환2" />
        <ContentTop>
          노시환의 재정비를 도운 코칭스태프는 김기태 2군 타격총괄(57), 김성갑
          잔류군 총괄(64)이다. 김기태 총괄은 1994년 홈런(25), 1997년 타율(0.344)
          부문 1위에 올랐던 타격 전문가다. LG 트윈스, KIA 타이거즈의 감독까지
          지냈다. 현역 시절 뛰어난 내야수비를 자랑했던 김성갑 총괄은 현대
          유니콘스, 넥센 히어로즈(현 키움)의 수비코치를 맡았다. 팀 내 타격과
          수비 파트서 최고의 능력을 자랑하는 전문가들이다. 두 전문가와 함께
          부족한 점을 보완한 노시환은 18일 서산 울산 웨일즈와 3연전 첫날 1번
          지명타자로 출전해 3타수 1안타 3볼넷 2득점을 기록했다. 다음날(19일)은
          1번타자 3루수로 선발출전해 5타수 1안타 1타점을 기록했다. 2군행 이후 첫
          장타(2루타)를 생산했지만, 삼진 3개를 당한 게 아쉬웠다. 3볼넷을 얻었던
          18일 경기와는 다소 대조적이었다. 20일에는 1번타자 3루수로 선발출전해
          5타수 1안타 1삼진을 기록했다.
        </ContentTop>
        <ContentBottom>
          잠시 자리를 비웠던 노시환이 본연의 모습을 보여주면 팀의 상승세도 더욱
          탄력을 받을 수 있다. 롯데와 3연전 마지막 날 복귀가 유력한 노시환이
          반등에 성공할 수 있을지 관심이 집중된다.
        </ContentBottom>
      </Container>
    </>
  );
};

export default InterfacePage;
