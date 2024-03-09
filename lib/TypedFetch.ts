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
