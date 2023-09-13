import { ChangeEvent, useEffect } from 'react';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as Styled from './styles';

function FormStepThree() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      navigate('/formfinished');
    } else {
      alert('Please fill in the Email and Github fields!');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  };

  return (
    <Theme>
      <Styled.Container>
        <p>Step {state.currentStep} of 3 </p>
        <h1>Excellent {state.name}, where can we find you?</h1>
        <p>Please provide your contact info, so that we can reach out for you.</p>
        <hr />

        <label htmlFor="">
          What is your email
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="">
          What is your Github?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <Styled.PrevButton
          to='/steptwo'
          className='prevBtn'
        >
          Previous
        </Styled.PrevButton>
        <button
          onClick={handleNextStep}
        >
          Finish your registration
        </button>
      </Styled.Container>
    </Theme>
  );
}

export default FormStepThree;
