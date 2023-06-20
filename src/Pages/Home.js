//Material UI Home
//Menu

//emotion styled component import
import styled from "@emotion/styled";
//Material UI Component import
import { Typography } from "@mui/material";

const HomeContainer = styled.div`
  padding: 15px;
  .title {
    margin: 0 0 10px 0;
    font-weight: 500;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      {/* title */}
      <Typography className="title" variant="h2">
        Welcome MUI!!
      </Typography>
    </HomeContainer>
  );
};

export default Home;
