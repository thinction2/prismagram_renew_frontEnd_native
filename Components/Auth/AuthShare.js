import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.15);
  padding: 10px 7px;
  margin-bottom: 8px;
  border-radius: 4px;
  color: white;
  margin-bottom: ${(p) => (p.lastOne ? "15" : 8)}px;
`;
