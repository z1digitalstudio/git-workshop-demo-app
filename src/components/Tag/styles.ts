import styled from 'styled-components';

export const Container = styled.span`
  align-items: center;
  background-color: #d7e4f1;
  border-radius: 2px;
  color: #297fd5;
  display: flex;
  flex-shrink: 0;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  line-height: 1;
  margin-bottom: 0.25rem;
  padding: 0.3125rem 0.5rem 0.1875rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.weights.semiBold};

  :not(:last-child) {
    margin-right: 0.5rem;
  }
`;
