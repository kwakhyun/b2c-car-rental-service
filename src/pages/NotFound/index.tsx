import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../../components/Container';
import Header from '../../components/Header';

import { flexBox } from '../../styles/mixin';

export default function NotFound() {
  const { state }: { state: { status: number } } = useLocation();
  const navigate = useNavigate();

  if (!state) return <Navigate to="/detail" />;

  const handleClick = () => navigate(-2);

  return (
    <Container>
      <Header title="Error" />
      <StyledContent>
        {state.status}
        <button type="button" onClick={handleClick}>
          go back
        </button>
      </StyledContent>
    </Container>
  );
}

const StyledContent = styled.div`
  ${flexBox('column')};
  width: 100%;
  height: calc(100% - 60px);
  font-size: 34px;
  font-weight: 600;

  > button {
    padding: 10px 20px;
    margin-top: 5vh;
    border: 1px solid ${({ theme }) => theme.black};
    border-radius: 5px;
    font-size: 18px;

    &:hover {
      background-color: ${({ theme }) => theme.gray};
    }
  }
`;
