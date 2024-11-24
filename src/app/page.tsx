"use client"

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Button variant="default" onClick={() => {console.log("hello");
    }}>click me</Button>
  );
}
