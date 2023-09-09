import Router from './router';
import { FormProvider } from './contexts/FormContext';
import { GlobalStyles } from './css/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import defaultheme from './theme/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultheme}>
        <GlobalStyles />
        <FormProvider>
          <Router />
        </FormProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
