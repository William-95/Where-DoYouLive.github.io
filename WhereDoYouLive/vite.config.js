import { defineConfig } from "vite"
//import { resolve } from 'path'

export default defineConfig( {
    build: {
        rollupOptions: {
          input: {
            'entry-point-a': path.resolve(__dirname, 'WhereDoYouLive\index.html'),
            
          },
        }
      },
   
  
 })