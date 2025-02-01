import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <div className="inputGroup">
        <input autoComplete="off" required type="text" />
        <label htmlFor="name">Name</label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .inputGroup {
    font-family: 'Segoe UI', sans-serif;
    margin: 1em 0 1em 0;
    max-width: 300px;
    position: relative;
  }

  .inputGroup input {
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    border: 2px solid rgb(200, 200, 200);
    background-color: transparent;
    border-radius: 20px;
    width: 100%;
  }

  .inputGroup label {
    font-size: 100%;
    position: absolute;
    left: 0;
    padding: 0.8em;
    margin-left: 0.5em;
    pointer-events: none;
    transition: all 0.3s ease;
    color: rgb(255, 255, 255);
  }

  .inputGroup :is(input:focus, input:valid)~label {
    transform: translateY(-50%) scale(.9);
    margin: 0em;
    margin-left: 1.3em;
    padding: 0.4em;
    background-color: rgb(30, 64, 175);
  }

  .inputGroup :is(input:focus, input:valid) {
    border-color: rgb(172, 168, 168);
    color: white;
  }`;

export default Input;
