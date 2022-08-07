import * as LinesStyles from 'components/Lines/Lines.styled'

interface LinesProps {
  someProp?: any;
}

const Lines = ({ someProp }: LinesProps) => {
  return (
    <LinesStyles.Container>
    <h1>
      We are committed to building a responsible <br/>
      and environmentally sustainable business   <br/>
      with meaningful transparent realtionships <br />
      across every facet of our supply chian
      </h1>
    </LinesStyles.Container>
  );
};

export default Lines;