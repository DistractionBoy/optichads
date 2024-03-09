This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install packages with

```bash
npm i
```

Then, run with

```bash
npm run dev
```

and visit `http://localhost:3000`

## Updating the Postgresql db

To get schema updates, you need to establish a connection with the postgres db, then run a prisma db pull command. Below you can find a step by step walkthrough of how to sync your prisma files with a new or recently updated schema

1. Create the postgres database connection string below.

```bash
DATABASE_URL="postgresql://optichads:N8yqiPQYgx3n@optichads.c7lqmj6pk6yb.us-east-1.rds.amazonaws.com:5432/whitelist" npx prisma db pull
```

2. Then generate the TS definition files and the prisma client. Run the generate command:

```bash
npx prisma generate
```

The prisma client (PrismaClient) component has already been added to the project for you, so you can ignore the output after running the `generate` command. The other thing it did for you was install type definitions which Zod schemas ingest to ensure type safety end to end.

## UI Frameworks

### Shadcn-UI

Find components, install instructions and more at (their doc site)[https://ui.shadcn.com/docs]

### Zod

Zod is a set of function definitions that parse the values held in javascript constructs so the developer can know what to expect from Typescript types end to end. A function has been added to the project to help us define response types in `useSWR()` calls called TypedFetch

```js
// ./lib/TypedFetch.ts...
import { useSWRConfig } from "swr";

import type { z } from "zod";

export function TypedFetch<T extends z.ZodTypeAny>(
  scheme: T
): (loc: string) => Promise<z.infer<T>> {
  const { fetcher } = useSWRConfig() as any;
  const f = fetcher ?? fetch;
  return async (loc) => {
    const data = await f(loc);
    if ("error" in data) {
      if (typeof data.error === "string") {
        throw new Error(data.error);
      }
      throw new Error("Unknown error");
    }
    return scheme.parse(data);
  };
}
```

More on Zod in its (docs)[https://zod.dev/?id=basic-usage]
