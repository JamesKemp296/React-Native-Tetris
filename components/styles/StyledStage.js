import styled from 'styled-components'
import { vw, vh } from 'react-native-expo-viewport-units'

export const StyledStage = styled.View`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(${vw(25)} / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.wisth}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: ${vw(25)};
`
