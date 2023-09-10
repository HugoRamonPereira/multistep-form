import styled from 'styled-components';


export const Container = styled.div`
  p {
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.purple100};
    font-family: 'LexendLight';
    letter-spacing: 0.1rem;
  }

  h1 {
    margin: 0.5rem 0;
    padding: 0;
    font-size: 26;
    font-family: 'LexendNormal';
  }

  hr {
    height: 1px;
    border: 0;
    background-color: ${({ theme }) => theme.colors.blue.blue400};
    margin: 30px 0;
  }

  label {
    font-family: 'LexendLight';
    font-size: 0.9rem;
    letter-spacing: 0.1rem;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 15px 10px;
      border: 2px solid ${({ theme }) => theme.colors.green.green500};
      border-radius: 10px;
      color: ${({ theme }) => theme.colors.white.white};
      outline: 0;
      font-family: 'LexendLight';
      font-size: 0.9375rem;
      letter-spacing: 0.1rem;
      background-color: ${({ theme }) => theme.colors.blue.blue700};
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.green.green500};
    color: ${({ theme }) => theme.colors.white.white};
    font-family: 'LexendLight';
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding: 15px 35px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 30px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.green.green600};
      transition: 0.2s ease-in-out;
    }
  }
`;
