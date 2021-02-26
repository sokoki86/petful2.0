const app = require('./modules/app/app')
const port = process.env.PORT || 8000


app.listen(process.env.PORT || 8080,()=>{
  console.log('Serving on 8080');
});
