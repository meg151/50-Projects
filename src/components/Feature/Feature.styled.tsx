import styled from "styled-components";
import img1 from "imgs/img1.png";
import img2 from "imgs/img2.png";
import img3 from "imgs/img3.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image1 = styled.img.attrs({
  src: `${img1}`,
})`
  width: 300px;
  height: 300px;
  margin-right: 30px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 30px;

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
  transition: 0.3s;
  border-radius: 30px;

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
  transition: 0.3s;
  border-radius: 30px;

  &:hover {
    opacity: 1;
  }
`;
