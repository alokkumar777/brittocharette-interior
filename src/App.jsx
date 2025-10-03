import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">React App</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Click Me</Button>
      {/* <Stack spacing={2} direction="row"> */}
      {/* </Stack> */}
    </>
  );
};

export default App;
