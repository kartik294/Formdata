"use client";
Example of uncontrolled component which uses no state at all
import { useRef } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main className="flex justify-center items-center h-screen">
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(inputRef.current?.value);
      }} className="flex flex-col">
        <input ref={inputRef} type="text" name="username" className="mb-4 p-2 border rounded" />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </main>
  );
}

// Example of the controlled component

"use client";

import { useRef, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main className="flex justify-center items-center h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(username);
        }}
        className="flex flex-col"
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          className="mb-4 p-2 border rounded"
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </main>
  );
}

("use client");

// Example of using Formdata and avoiding ref
export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          console.log(formData.get("username"));
        }}
        className="flex flex-col"
      >
        <input
          type="text"
          name="username"
          className="mb-4 p-2 border rounded"
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </main>
  );
}

//  "use client";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const formValues = Object.fromEntries(formData);
          console.log(formValues);
          const username = formData.get("username");
          console.log(username);
        }}
        className="flex flex-col"
      >
        <input
          type="text"
          name="username"
          className="mb-4 p-2 border rounded"
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </main>
  );
}

//Zod Exaplined in formdata
// "use client";

import { z } from "zod";
const userSchema = z.object({
  username: z.string(),
});

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const formValues = Object.fromEntries(formData);
          console.log(formValues);
          const result = userSchema.safeParse(formValues);
          if (result.success) {
            result.data.username;
          }
          console.log(result);
        }}
        className="flex flex-col"
      >
        <input
          type="text"
          name="username"
          className="mb-4 p-2 border rounded"
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </main>
  );
}

("use client");

import { z } from "zod";
const userSchema = z.object({
  username: z.string(),
});

export default function Home() {
  function formAction(formData: FormData) {
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
    const result = userSchema.safeParse(formValues);
    if (result.success) {
      result.data.username;
    }
    console.log(result);
  }
  return (
    <main className="flex justify-center items-center h-screen">
      <form action={formAction} className="flex flex-col">
        <input
          type="text"
          name="username"
          className="mb-4 p-2 border rounded"
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </main>
  );
}
