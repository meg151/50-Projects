import * as ButtonStyles from 'components/Button/Button.styled'

interface ButtonProps {
  primary?:boolean;
  backgroundColor?:string;
  onClick?: () => void;
}

const Button = ({ 
  primary = true,
  backgroundColor,
  ...props
 }: ButtonProps) => {
  const mode = primary
  return (
    <ButtonStyles.Container>
      <button type="button"
      className={['storybook-button', mode].join(' ')}
      style={{backgroundColor}}
      {...props}
      >
        Contact Us
        </button>
    </ButtonStyles.Container>
  );
}

export default Button;