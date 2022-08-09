import * as FeatureStyles from "components/Feature/Feature.styled";

interface FeatureProps {
  someProp?: any;
}

const Feature = ({ someProp }: FeatureProps) => {
  return (
    <FeatureStyles.Container>
      <FeatureStyles.Image1 />
      <FeatureStyles.Image2 />
      <FeatureStyles.Image3 />
    </FeatureStyles.Container>
  );
};

export default Feature;
