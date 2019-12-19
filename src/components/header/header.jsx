import React from "react";
import styled from "styled-components";

function Header({ lastSeen, ...props }) {
  return (
    <div {...props}>
      <p>
        {lastSeen + " "}
        <span>Last Seen</span>
      </p>
    </div>
  );
}

export default styled(Header)`
  width: 85%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  border-bottom: 1px solid #ccc;

  span {
    font-size: 10px;
  }
`;
