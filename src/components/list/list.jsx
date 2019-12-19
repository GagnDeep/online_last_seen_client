import React from "react";
import Item from "./../item";
import styled from "styled-components";

function List({ data }) {
  const List = data.map(item => <Item {...item} />);
  return <div>{List}</div>;
}
export default styled(List)``;
