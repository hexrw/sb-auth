import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // treat all tags with a dash as custom elements
                    isCustomElement: (tag) => tag.includes('-')
                }
            }
        })
    ],
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "sb-auth",
            fileName: "sb-auth",
        },
    },
})
