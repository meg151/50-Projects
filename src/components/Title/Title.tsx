import * as TitleStyles from "components/Title/Title.styled";
interface TitleProps {
  someProp?: any;
}

const Title = ({ someProp }: TitleProps) => {
  return (
    <TitleStyles.Container>
      <h1>Market Lane Coffee</h1>
    </TitleStyles.Container>
  );
};

export default Title;
