import styled from 'styled-components'
import { SearchCard } from '../styles'

export const StyledShowCard = styled (SearchCard)`

.btns {
    margin-top: 15px;
    display: flex;
    align-items: center;
    a {
      color: #addfad;
      &:hover {
        color: blue;
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;