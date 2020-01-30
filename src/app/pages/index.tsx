import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import App from "../components/App";
import firebase from "../lib/firebase";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solit palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: wite;
    `}
`;

export default () => {
  const countRef = firebase.database().ref("count");

  const [count, setCount] = useState(0);
  useEffect(() => {
    countRef.set({ click: count });
  });

  return (
    <App>
      <p>Index Page</p>
      <Button onClick={setCount(count + 1)}>
        Button was clicked {count} times.
      </Button>
    </App>
  );
};
