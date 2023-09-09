import { Theme } from '../../components/Theme';
import * as Styled from './styles';

function FormStepOne() {
  const handleNextStep = () => {

  };

  return (
    <Theme>
      <Styled.Container>
        <p>Step 1 of 3</p>
        <h1>Let&apos;s start with your name</h1>
        <p>Please fill in the field below with your full name.</p>
        <hr />
        <label htmlFor="">
          Your full name
          <input
            type="text"
            autoFocus
          />
        </label>
        <button
          onClick={handleNextStep}
        >
          Next
        </button>
      </Styled.Container>
    </Theme>
  );
}

export default FormStepOne;
