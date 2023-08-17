import { defineConfig } from 'vite';

export default defineConfig(({ command, mode, ssrBuild }) => {

    return {
        publicDir: "./",
        build: {
            outDir: 'dist',
            assetsDir: 'static',
        }
    }
});