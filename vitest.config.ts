import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vitest/config"

// Unit tests do not need Start/Nitro's server bundling or a second React runtime.
export default defineConfig({
    resolve: {
        alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
        dedupe: ["react", "react-dom"],
    },
    esbuild: { jsx: "automatic" },
    test: { environment: "node" },
})
