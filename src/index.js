import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import styled from "styled-components";
import List from "./components/list";
import Header from "./components/header";
import Loader from "./utilities/loader";

import { GetData, formatData } from "./utilities/helper";

const Container = styled.div``;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const error = false;

  const [data, err] = GetData(
    "https://online-57da3.firebaseio.com/online.json"
  );
  const [formattedData, lastSeen] = formatData(data);

  if (err) return <div>{err}</div>;
  if (!data) return <Loader />;

  return (
    <Container>
      <Header lastSeen={lastSeen} />
      <List data={formattedData.splice(0, 50)} />
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
