"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const CreateNewIssue = () => {
  const { register, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();

  const onsubmit = async (data: IssueForm) => {
    console.log("data", data);
    await axios.post("/api/issue", data);
    router.push("/issues");
  };

  return (
    <form className="ml-5 w-xl space-y-4" onSubmit={handleSubmit(onsubmit)}>
      <TextField.Root size="2" placeholder="Title" {...register("title")} />
      <TextArea placeholder="Description" {...register("description")} />
      <Button>Create Issue</Button>
    </form>
  );
};

export default CreateNewIssue;
