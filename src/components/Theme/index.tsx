import { PropsWithChildren } from 'react';
import * as Styled from './styles';
import { Header } from '../Header';
import SidebarItem from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';

type ThemeProps = PropsWithChildren;

export const Theme = ({ children }: ThemeProps) => {
  const { state } = useForm();

  return (
    <Styled.Container>
      <Styled.Area>
        <Header />
        <Styled.Steps>
          <Styled.Sidebar>
            <SidebarItem
              title='Personal'
              description='Identify yourself'
              icon='profile'
              path='/'
              active={state.currentStep === 1}
            />
            <SidebarItem
              title='Professional'
              description='Your level'
              icon='book'
              path='/steptwo'
              active={state.currentStep === 2}
            />
            <SidebarItem
              title='Contacts'
              description='How to find you'
              icon='mail'
              path='/stepthree'
              active={state.currentStep === 3}
            />
          </Styled.Sidebar>
          <Styled.Page>
            {children}
          </Styled.Page>
        </Styled.Steps>
      </Styled.Area>
    </Styled.Container>
  );
};
