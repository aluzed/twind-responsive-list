import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "twindResponsiveList",
      fileName: (format) => `twind-responsive-list.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "classnames"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          classnames: "classNames"
        }
      }
    }
  }
})
