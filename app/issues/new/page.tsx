import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const CreateNewIssue = () => {
  return (
    <div className="ml-5 w-xl space-y-4">
      <TextField.Root size="2" placeholder="Title" />
      <TextArea placeholder="Description" />
      <Button>Create Issue</Button>
    </div>
  );
};

export default CreateNewIssue;
