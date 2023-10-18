import styled, { css } from "styled-components";

const dragActive = css`
  /* border-color: #78e5d5; */
  border-color: ${props => props.theme['primary']};
`;

const dragReject = css`
  border-color: #e57878;
`;

type IDropContainer = {
  isDragActive: boolean;
  isDragReject: boolean;
};

export const DropContainer = styled.div<IDropContainer>`
  border: 1px dashed #999;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#999",
  error: "red",
  // success: "#78e5d5",
  success: "#64C4D2",
};

interface ITypeMessageColor {
  type?: "error" | "success";
}

export const UploadMessage = styled.p<ITypeMessageColor>`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  gap: 0.5rem;
  font-weight: 700;

  svg {
    color: ${props => props.theme['primary']};

    &:hover {
      opacity: 0.9;
    }
  }
`;