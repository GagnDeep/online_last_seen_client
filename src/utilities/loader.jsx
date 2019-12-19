import React from "react";
import styled from "styled-components";

function Loader(props) {
  return (
    <div {...props}>
      <div className="clock" />
      <p>Clock</p>
    </div>
  );
}

export default styled(Loader)`
  /* font-size: 18px; */
  background: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .clock {
    border-radius: 60px;
    border: 3px solid #fff;
    height: 80px;
    width: 80px;
    position: relative;

    top: 28%;
    top: -webkit-calc(50% - 43px);
    top: calc(50% - 43px);
    left: 35%;
    left: -webkit-calc(50% - 43px);
    left: calc(50% - 43px);
  }
  .clock:after {
    content: "";
    position: absolute;
    background-color: #fff;
    top: 2px;
    left: 48%;
    height: 38px;
    width: 4px;
    border-radius: 5px;
    -webkit-transform-origin: 50% 97%;
    transform-origin: 50% 97%;
    -webkit-animation: grdAiguille 2s linear infinite;
    animation: grdAiguille 2s linear infinite;
  }

  @-webkit-keyframes grdAiguille {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes grdAiguille {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .clock:before {
    content: "";
    position: absolute;
    background-color: #fff;
    top: 6px;
    left: 48%;
    height: 35px;
    width: 4px;
    border-radius: 5px;
    -webkit-transform-origin: 50% 94%;
    transform-origin: 50% 94%;
    -webkit-animation: ptAiguille 12s linear infinite;
    animation: ptAiguille 12s linear infinite;
  }

  @-webkit-keyframes ptAiguille {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes ptAiguille {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
