import styled from 'styled-components';


export const Container = styled.div`
  p {
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.purple100};
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 26;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: ${({ theme }) => theme.colors.blue.blue400};
    margin: 30px 0;
  }

  label {
    font-size: 0.8125rem;

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
      font-size: 0.9375rem;
      background-color: ${({ theme }) => theme.colors.blue.blue700};
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.green.green500};
    color: ${({ theme }) => theme.colors.white.white};
    font-size: 0.875rem;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 30px;
  }
`;
