import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 95%;
  max-width: 400px;
  height: ${({ isOpen }) => (isOpen ? "150px" : "50px")};
  box-shadow: ${({ isOpen }) => (isOpen ? "0px 2px 10px #ccc" : "none")};
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 15px;
  transition: all ease-out 0.3s;
  margin: 20px auto;

  .item {
    display: flex;

    .timeBlock {
      /* flex-grow: 0.5; */
      width: 30%;
      text-align: center;
      border-right: 1px solid #ccc;

      .time {
        font-size: 16px;
      }
      .intermediateText {
        font-weight: 300;
      }
    }
    .dataBlock {
      font-size: 12px;
      padding-left: 20px;
      span {
        font-weight: 300;
      }
    }
  }
  p {
    line-height: 50px;
    margin: 0;
  }
`;

function Item({
  online,
  offline,
  lastOnline,
  onlineDuration,
  expectation,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div className="item">
        <div className="timeBlock">
          <p className="time">{online}</p>
          <p className="intermediateText">To</p>
          <p className="time">{offline}</p>
        </div>
        <div className="dataBlock">
          <p>
            <span>Time after last online </span> {lastOnline}
          </p>

          <p>
            <span>Online for </span> {onlineDuration}
          </p>

          <p>
            <span>expectation </span> {expectation}%
          </p>
        </div>
      </div>
    </Container>
  );
}

export default styled(Item)``;
