import { defineConfig } from "vite"
//import { resolve } from 'path'

export default defineConfig( {
    build: {
        rollupOptions: {
         main:  path.resolve(__dirname, 'WhereDoYouLive\index.html'),
            
          
        }
      },
   
  
 })