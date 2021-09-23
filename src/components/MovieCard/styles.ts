import styled from 'styled-components';

export const Container = styled.article`
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  height: 10.5rem;
  object-fit: cover;
  width: 100%;
`;

export const Content = styled.div`
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-top: 0;
  padding: 0.5rem 1rem 1rem;
`;

export const Title = styled.h2`
  margin-block-start: 0;
  font-size: 1.3rem;
  letter-spacing: 0.3px;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Director = styled.div`
  display: flex;
`;

export const DirectorImage = styled.img`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
`;

export const DirectorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5rem;
`;

export const DirectedBy = styled.span`
  font-weight: ${({ theme }) => theme.weights.light};
  font-size: 0.8rem;
`;

export const DirectorName = styled.span``;
