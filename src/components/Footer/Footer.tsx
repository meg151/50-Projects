import * as FooterStyles from "components/Footer/Footer.styled";
interface FooterProps {
  someProp?: any;
}

const Footer = ({ someProp }: FooterProps) => {
  return (
    <FooterStyles.Container>
      <h3>
        Privacy Policy | Terms & Conditions All rights reserved © 2021 Market
        Lane Coffee Pty Ltd
      </h3>
    </FooterStyles.Container>
  );
};

export default Footer;
