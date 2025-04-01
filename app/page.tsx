import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Button>
        <Link href={"/issues/new"}>New issue</Link>
      </Button>
    </div>
  );
}
