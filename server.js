const app = require('./src/app')
const connection = require('./src/database/index'); 

let PORT = process.env.PORT || 4500;
app.listen(PORT,()=>{
    console.log(`Server listening on port: ${PORT}`);
});