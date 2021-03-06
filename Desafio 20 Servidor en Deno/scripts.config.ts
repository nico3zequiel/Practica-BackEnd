
import { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";
import { config as env } from "https://deno.land/std@0.147.0/dotenv/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run server.tsx",
      desc: "run my server.tsx file",
      allow: ["env", "net"],
      importMap: "./import_map.json",
      env: await env()
    },
  },
};

export default config;