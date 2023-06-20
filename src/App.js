import { Route, Routes } from "react-router-dom";
import Navigator from "./Navigator/Navigator";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";

//Material UI Layout
//Material UI 기본적인 사항들 정리

//Global Reset import
import CssBaseline from "@mui/material/CssBaseline";
//Default font import
//Material UI에 맞는 Roboto font로 설정한다.
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
//emotion styled component import
import styled from "@emotion/styled";
import Font from "./Pages/Font";
import ImageLists from "./Pages/ImageLists";

//App Container
const AppContainer = styled.div``;

const App = () => {
  return (
    <>
      {/* 브라우저 기본 css사항들을 모두 reset한다. (default margin, padding 등등...) */}
      <CssBaseline />
      <Navigator />
      <AppContainer>
        {/* MUI Pages... */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/font" element={<Font />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/imagelist" element={<ImageLists />} />
        </Routes>
      </AppContainer>
    </>
  );
};

export default App;
