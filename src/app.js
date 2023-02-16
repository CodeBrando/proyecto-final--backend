const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const productsRouter = require('./routes/products.router');
const cartsRouter = require('./routes/carts.router')
const viewsRouter = require('./routes/views.router');


const app = express();
const PORT = 8080;
mongoose.set('strictQuery', false);

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter)
app.use('/', viewsRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
}) 


mongoose.connect(
    'mongodb+srv://admin:BVOCVm6ySMDozGGr@cluster0.bxgxbqe.mongodb.net/?retryWrites=true&w=majority',
    (error)=>{
        if(error){
            console.log('error de conexión', error);
            process.exit();
        }else{
            console.log('conexión exitosa')
        }
    }
)
