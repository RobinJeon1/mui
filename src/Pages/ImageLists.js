//Image List Component
//Image List를 보여주는 방식을 나열함
import styled from "@emotion/styled";
import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { itemData1, itemData2 } from "../Data/imageSrcData";

const ImageListsContainer = styled.div`
  padding: 15px;
  .inner-box {
    padding: 30px;
  }
  .title {
    margin: 0 0 10px 20px;
    font-weight: 500;
  }
`;

const ImageLists = () => {
  return (
    <ImageListsContainer>
      <Typography className="title" variant="h2">
        Image Lists
      </Typography>
      {/* Image List : Grid에 이미지 모음을 표시한다. */}
      <Box className="inner-box">
        <Typography variant="h5">기본 이미지 목록</Typography>
        {/* 기본적인 Grid 형태로 이미지를 나열한다. */}
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData1.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <br />
        <Typography className="title" variant="p">
          제목 표시줄이 있는 Image Lists
        </Typography>
        <ImageList sx={{ width: 2500, height: 450 }}>
          <ImageListItem key="Subheader" cols={10}>
            <ListSubheader component="div">December</ListSubheader>
          </ImageListItem>
          {itemData2.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </ImageListsContainer>
  );
};

export default ImageLists;
