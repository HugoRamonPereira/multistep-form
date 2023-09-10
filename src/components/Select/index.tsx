import * as Styled from './styles';

type SelectProps = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick?: () => void;
}

export const Select = ({ title, description, icon, selected, onClick }: SelectProps) => {
  return (
    <Styled.Container selected={selected} onClick={onClick}>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Info>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.Info>
    </Styled.Container>
  );
};
