export default {
    base:'./',
    build: {
        rollupOptions: {
          input: {
            main: resolve(__WhereDoYouLive, 'index.html'),
          }
        }
      }
 }