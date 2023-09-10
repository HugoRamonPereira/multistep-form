import { PropsWithChildren, createContext, useContext, useReducer } from 'react';

type StateProps = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
}

type ActionProps = {
  type: FormActions;
  payload: any;
}

type ContextTypeProps = {
  state: StateProps;
  dispatch: (action: ActionProps) => void;
}

type FormProviderProps = PropsWithChildren;

const initialData: StateProps = {
  currentStep: 0,
  name: 'Ramon',
  level: 0,
  email: '',
  github: ''
};

const FormContext = createContext<ContextTypeProps | undefined>(undefined);

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub
}

const FormReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
  case FormActions.setCurrentStep:
    return {...state, currentStep: action.payload};
  case FormActions.setName:
    return {...state, name: action.payload};
  case FormActions.setLevel:
    return {...state, level: action.payload};
  case FormActions.setEmail:
    return {...state, email: action.payload};
  case FormActions.setGithub:
    return {...state, github: action.payload};
  default:
    return state;
  }
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(FormReducer, initialData);
  const value = { state, dispatch };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);

  if(context === undefined) {
    throw new Error('useForm must be used in the FormProvider');
  }

  return context;
};
