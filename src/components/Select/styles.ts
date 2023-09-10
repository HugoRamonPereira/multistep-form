import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  border: 2px solid ${props => props.selected ? ({ theme }) => theme.colors.green.green500 : ({ theme }) => theme.colors.blue.blue400};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.green.green500};
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 1.3rem;
`;

export const Title = styled.div`
  font-family: 'LexendNormal';
  font-size: 1.3rem;
  margin-bottom: .4rem;
`;

export const Description = styled.div`
  font-family: 'LexendLight';
  letter-spacing: 0.05rem;
  color: ${({ theme }) => theme.colors.purple.purple100};
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue.blue300};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;
