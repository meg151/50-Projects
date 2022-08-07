import Button from "components/Button/Button";
import Title from "components/Title/Title";
import Feature from "components/Feature/Feature";
import Lines from "components/Lines/Lines";
import Footer from "components/Footer/Footer";

interface HomeProps {
  someProp?: any;
}

const Home = ({ someProp }: HomeProps) => {
  return (
    <div>
      <Title />
      <Lines />
      <Feature />
      <Button />
      <Footer />
    </div>
  );
};

export default Home;
