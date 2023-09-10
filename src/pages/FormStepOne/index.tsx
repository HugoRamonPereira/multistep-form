import { ChangeEvent, useEffect } from 'react';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as Styled from './styles';

function FormStepOne() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/steptwo');
    } else {
      alert('Name is a mandatory field!');
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  };

  return (
    <Theme>
      <Styled.Container>
        <p>Step {state.currentStep} of 3 </p>
        <h1>Let&apos;s start with your name</h1>
        <p>Please fill in the field below with your full name.</p>
        <hr />
        <label htmlFor="">
          Your full name
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
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
