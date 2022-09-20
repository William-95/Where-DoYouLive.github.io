import { defineConfig } from "vite"
import { resolve } from 'path'

export default defineConfig( {
    entry: resolve(__dirname, 'WhereDoYouLive/index.html'),
   base:'/WhereDoYouLive/',
  
 })