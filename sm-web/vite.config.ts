import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

export default ({command, mode}) => {
    console.log("Vite Command: ", command);
    console.log("Current Mode: ", mode);

    let config = defineConfig({
        plugins: [reactRefresh()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, './src')
            }
        }
    });

    //console.log("Vite Config: ",config);

    return config;
}
