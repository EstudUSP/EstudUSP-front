import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0; /* top, bottom, right e left = 0 */
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  max-width: 70rem;
  width: calc(100vw - 30%);
  border-radius: 8px;
  background: ${props => props.theme['inverse-on-surface']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  @media (max-width: 1024px) {
    min-width: 90vw;
    padding: 1.5rem 1rem;
  }
`;

export const CreatorsPopupContainer = styled.div`
  width: 100%;
  padding: 4rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 0;
    margin: 1rem;
    max-width: calc(100% - 2rem);
  }
`;

export const CreatorsPopupContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 1rem;
    grid-template-columns: 1fr;
  }
`;

export const CreatorCardContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.2s;

  img {
    width: 5.75rem;
    height: 5.75rem;
    border-radius: 8px;
  }

  .h7 {
    font: 700 1.125rem/1.5rem 'Segoe_UI_Bold', sans-serif;
    color: ${props => props.theme["primary"]};
  }

  span {
    font: 700 0.875rem/1.25rem 'Segoe_UI_Bold', sans-serif;
    color: ${props => props.theme["on-surface"]};
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${props => props.theme['gray-500']};
  transition: all 0.2s;

  &:hover {
    color: ${props => props.theme['primary']};
  }
`;
