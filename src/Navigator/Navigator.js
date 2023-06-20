//Navigator Component
//Menu Navigator
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

const NavContainer = styled.div`
  .title {
    margin: 15px;
  }
  .button-group {
    margin-left: 15px;
  }
  .homeBtns {
    margin: 5px;
  }
`;

const Navigator = () => {
  return (
    <NavContainer>
      {/* Typography : MUI text component */}
      <Typography className="title" variant="h1">
        MUI
      </Typography>
      <div className="button-group">
        <Button
          className="homeBtns"
          variant="contained"
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          className="homeBtns"
          variant="contained"
          component={Link}
          to="/font"
        >
          Fonts
        </Button>
        <Button
          className="homeBtns"
          variant="contained"
          component={Link}
          to="/layout"
        >
          Layout
        </Button>
        <Button
          className="homeBtns"
          variant="contained"
          component={Link}
          to="/imagelist"
        >
          ImageList
        </Button>
      </div>
      <hr />
    </NavContainer>
  );
};

export default Navigator;
