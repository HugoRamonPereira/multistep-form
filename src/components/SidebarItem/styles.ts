import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.5rem 0;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 1.2rem;
`;

export const Title = styled.div`
  text-align: right;
  font-family: 'LexendNormal';
  margin-bottom: 5px;
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.white.white};
`;

export const Description = styled.div`
  text-align: right;
  font-family: 'LexendLight';
  letter-spacing: 0.1rem;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.purple.purple100};
`;

export const IconArea = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.active ? ({ theme }) => theme.colors.green.green500 : ({ theme }) => theme.colors.purple.purple700};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
`;

export const Point = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border: 1px solid ${props => props.active ? ({ theme }) => theme.colors.green.green500 : ({ theme }) => theme.colors.purple.purple100};
  border-radius: 50%;
  margin-left: 2rem;
  margin-right: -5.2px;
  background-color: ${props => props.active ? ({ theme }) => theme.colors.green.green500 : ({ theme }) => theme.colors.blue.blue700};
`;

