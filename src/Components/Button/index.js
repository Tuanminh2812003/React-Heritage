import React from 'react';
import styled from 'styled-components';
import { FaArrowRightLong } from "react-icons/fa6";

const Button = () => {
  return (
    <StyledWrapper>
      <button> Ấn vào đây để tiếp tục khám phá! <div className='icon'><FaArrowRightLong /></div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    font-size: 18px;
    display: inline-block;
    text-align: center;
    padding: 0.7em 2em;
    border: 2px solid #991B1B;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
    color: #991B1B;
    text-decoration: none;
    transition: 0.3s ease all;
    z-index: 1;
    cursor: pointer;
    border-radius: 100px;
    display: flex;
    align-item: center;
  }

  .icon{
    margin-left: 8px;
    display: flex;
    align-item: center;
  }

  button:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: #991B1B;
    z-index: -1;
    border-radius: 100px;
  }

  button:hover, button:focus {
    color: white;
  }

  button:hover:before, button:focus:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
  }

  button:active {
    transform: scale(0.9);
  }`;

export default Button;
