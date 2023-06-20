//MUI Layout
//MUI의 기본적인 Layout 정리

import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const LayoutContainer = styled.div`
  padding: 15px;
  .inner-box {
    padding: 30px;
  }
  .title {
    margin: 0 0 10px 20px;
    font-weight: 500;
  }
`;

const Item = styled.div`
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Typography className="title" variant="h2">
        Layout
      </Typography>
      {/* Box Container는 MUI를 구성하는 기본적인 Box이다(div같은) */}
      <Box className="inner-box">
        <Typography variant="h5">Box style(sx props)</Typography>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "green",
              opacity: 0.9,
            },
          }}
        />
        <hr />
        <Typography variant="h5">Overriding MUI components</Typography>
        <br />
        <Box component="span" sx={{ p: 3, border: "1px dashed grey" }}>
          <Button variant="contained">Save</Button>
          <br />
        </Box>
        <br />
        <hr />
        <Typography variant="h5">Container</Typography>
        {/* Container는 Contents를 가로로 중앙에 배치한다. 기본적인 레이아웃 요소 */}
        <Typography variant="p">maxWidth="lg"</Typography>
        {/* maxWidth : Container 최대 너비( xs /sm / md / lg / xl ) */}
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
        </Container>
        <br />
        <Typography variant="p">maxWidth="md"</Typography>
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "#ebfccf", height: "100vh" }} />
        </Container>
        <br />
        <Typography variant="p">maxWidth="xs"</Typography>
        <Container maxWidth="xs">
          <Box sx={{ bgcolor: "#ebfccf", height: "100vh" }} />
        </Container>
        <br />
        <Typography variant="p">fixed</Typography>
        <Container fixed>
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
        </Container>
        <br />
        <hr />
        <Typography variant="h5">Grid v2</Typography>
        <Typography variant="p">Basic Grid</Typography>
        {/* 반응형 Layout Grid : 화면 크기와 방향에 맞게 조정되어 레이아웃 간에 일관성을 유지하는 요소 */}
        {/* Grid의 열 너비는 1~12사이의 정수 값 */}
        {/* 중단점은 사이즈 별로 여러개를 만들 수 있다 */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Grid들은 "container" prop이 정의된 부모 Grid로 감싸져야 한다 */}
          {/* spacing : Grid간 간격 */}
          <Grid container spacing={2}>
            <Grid xs={8} md={6}>
              <Item>xs=8 md=6</Item>
            </Grid>
            <Grid xs={4} md={6}>
              <Item>xs=4 md=6</Item>
            </Grid>
            <Grid xs={4} md={6}>
              <Item>xs=4 md=6</Item>
            </Grid>
            <Grid xs={8} md={6}>
              <Item>xs=8 md=6</Item>
            </Grid>
          </Grid>
        </Box>
        <br />
        <Typography variant="p">반응형 Grid</Typography>
        {/* 브라우저 너비에 따라 행과 열 등이 변경되는 반응형 Grid를 만들 수 있다 */}
        {/* 응답 값 : colums, columSpacing, direction, rowSpacing, spacing */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid xs={1} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
            <Grid xs={1} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
            <Grid xs={1} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
            <Grid xs={1} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
            <Grid xs={1} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
            <Grid xs={1} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
          </Grid>
        </Box>
        <br />
        <Typography variant="p">자동 layout</Typography>
        {/* 값을 따로 설정하지 않았을때 자동으로 사이즈를 조정되는 기능*/}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs>
              <Item>xs</Item>
            </Grid>
            <Grid xs={6}>
              <Item>xs=6</Item>
            </Grid>
            <Grid xs>
              <Item>xs</Item>
            </Grid>
          </Grid>
        </Box>
        <br />
        <Typography variant="p">가변 너비 contents</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid xs="auto">
              <Item>variable width content</Item>
            </Grid>
            <Grid xs={6}>
              <Item>xs=6</Item>
            </Grid>
            <Grid xs>
              <Item>xs</Item>
            </Grid>
          </Grid>
        </Box>
        <br />
        <hr />
        <Typography variant="h5">Stack</Typography>
        {/* Stack은 요소를 세로 또는 가로로 배열하기 위한 Container 요소 입니다. */}
        {/* Stack은 1차원 레이아웃에 이상적이며 Grid는 수직 및 수평이 모두 필요한 경우에 적합 */}
        {/* 세로 Stack */}
        <Typography variant="p">세로 Stack</Typography>
        <Stack spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
        <br />
        {/* 가로 Stack */}
        <Typography variant="p">가로 Stack</Typography>
        <Stack direction="row" spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
        <br />
        {/* Divider */}
        <Typography variant="p">Divider</Typography>
        <Stack
          direction="row"
          divider={
            <Divider
              sx={{ backgroundColor: "red" }}
              orientation="vertical"
              flexItem
            />
          }
          spacing={2}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
        <br />
        {/* 반응 값 */}
        <Typography variant="p">반응 값</Typography>
        {/* 중단점을 기준으로 direction, spacing 값을 전환할 수 있습니다. */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>
    </LayoutContainer>
  );
};

export default Layout;
