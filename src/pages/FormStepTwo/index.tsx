import { useEffect } from 'react';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as Styled from './styles';
import { Select } from '../../components/Select';

function FormStepTwo() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/steptwo');
    } else {
      alert('Name is a mandatory field!');
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  };

  return (
    <Theme>
      <Styled.Container>
        <p>Step {state.currentStep} of 3 </p>
        <h1>{state.name} which level are you?</h1>
        <p>Please select the option that best describes you.</p>
        <hr />

        <Select
          title='I am a beginner'
          description='I started coding in less than 2 years'
          icon='👶🏻'
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <Select
          title='I am a developer'
          description='I&apos;ve been programming for more than 2 years'
          icon='🧑🏻‍💻'
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <button
          onClick={handleNextStep}
        >
          Next
        </button>
      </Styled.Container>
    </Theme>
  );
}

export default FormStepTwo;
