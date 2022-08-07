import styled from "styled-components";
import img1 from "imgs/img1.png";
import img2 from "imgs/img2.png";
import img3 from "imgs/img3.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Image1 = styled.img.attrs({
  src: `${img1}`,
})`
  width: 300px;
  height: 300px;
  margin-right: 30px;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const Image2 = styled.img.attrs({
  src: `${img2}`,
})`
  width: 300px;
  height: 300px;
  margin-right: 30px;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const Image3 = styled.img.attrs({
  src: `${img3}`,
})`
  width: 300px;
  height: 300px;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;
