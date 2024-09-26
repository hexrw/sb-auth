import { defineConfig } from "vite"

export default defineConfig({
    build: {
        lib: {
            entry: "./src/sb-auth.ts",
            name: "sb-auth",
            fileName: "sb-auth",
        },
    },
})
