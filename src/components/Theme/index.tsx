import { PropsWithChildren } from 'react';
import * as Styled from './styles';
import { Header } from '../Header';

type ThemeProps = PropsWithChildren;

export const Theme = ({ children }: ThemeProps) => {
  return (
    <Styled.Container>
      <Styled.Area>
        <Header />
        <Styled.Steps>
          <Styled.Sidebar>
            <p>...</p>
          </Styled.Sidebar>
          <Styled.Page>
            {children}
          </Styled.Page>
        </Styled.Steps>
      </Styled.Area>
    </Styled.Container>
  );
};
