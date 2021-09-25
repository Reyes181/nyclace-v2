const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cloudinary = require('cloudinary');
const SHA1 = require('crypto-js/sha1');
const app = express();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const jwt = require('jsonwebtoken');
const enforce = require('express-sslify');
require('dotenv').config();


mongoose.set('debug', true);
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://Emii:jericho1994@ds241133.mlab.com:41133/commerce-shop', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://Emii:jericho1994@commerce-shop.ai4sg.mongodb.net/commerce-shop?retryWrites=true&w=majority', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(cookieParser());

app.use(express.static('client/build'));

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
});

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: true,
    auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_PASS
    }
});

const registerEmail = async(username, useremail, user) => {
    try {
        const emailToken = user._id;

        let mailGenerator = new Mailgen({
            theme: "salted",
            product: {
                name: 'NYC Lace',
                link: `${process.env.EMAIL_URL}`,
                logo: 'https://res.cloudinary.com/reyes181/image/upload/v1541155251/logo_2.png'
            }
        });

        const email = {
            body: {
                name: username,
                intro: 'Welcome to NYC Lace. Take advantage to all of our incredible deals!',
                action: {
                    instructions: 'Validate your email account by clicking below',
                    button: {
                        color: '#1a73e8',
                        text: 'Validate Email',
                        link: `http://localhost:3000/account/verified/${emailToken}`
                    }
                },
                outro: 'This is a generated email. Please do not respond to this email. If any question please contact us at by the information provided at our site.'
            }
        }

        let emailBody = mailGenerator.generate(email);
        let message = {
            from: process.env.EMAIL_NAME,
            to: useremail,
            subject: 'Welcome to NYCLace: Validate Email',
            html: emailBody
        };

        await transporter.sendMail(message);

        return true

    } catch(error){
        throw error
    }
}

const passwordAlert = async(useremail) => {
    try {
        let mailGenerator = new Mailgen({
            theme: "salted",
            product: {
                name: 'NYC Lace',
                link: `${process.env.EMAIL_URL}`,
                logo: 'https://res.cloudinary.com/reyes181/image/upload/v1541155251/logo_2.png'
            }
        });

        const email = {
            body: {
                title: 'Password has been changed!',
                intro: 'Hello, this is email is to confirm that your password has been changed.',
                outro: 'This is a generated email. Please do not respond to this email. If any question please contact us at by the information provided at our site.'
            }
        }

        let emailBody = mailGenerator.generate(email);
        let message = {
            from: process.env.EMAIL_NAME,
            to: useremail,
            subject: 'Password Changed: NYC Lace',
            html: emailBody
        };

        await transporter.sendMail(message);

        return true

    } catch(error){
        throw error
    }
}

const resetPasswordLink = async(useremail, user) => {
    
    let hashNum = '8987656754lowsense'
    var tokenPass = jwt.sign(user._id.toHexString(),process.env.SECRET);
    var uniqueRoute = jwt.sign(hashNum, process.env.SECRET);
    // var uniqueRoute2 = jwt.sign(hashNum, process.env.SECRET);
    // console.log({ex1: uniqueRoute, ex2: uniqueRoute2})
    try {

        let mailGenerator = new Mailgen({
            theme: "salted",
            product: {
                name: 'NYC Lace',
                link: `${process.env.EMAIL_URL}`,
                logo: 'https://res.cloudinary.com/reyes181/image/upload/v1541155251/logo_2.png'
            }
        });

        const email = {
            body: {
                title: 'Password reset instrunctions',
                intro: 'Hello. A request to change your password has been made, follow the instrunction below to do so. if you did not make request, please disregard this email.',
                action: {
                    instructions: 'Change your password by clicking the button below.',
                    button: {
                        color: '#1a73e8',
                        text: 'Reset Password',
                        link: `http://localhost:3000/account/reset_password/${uniqueRoute}/${tokenPass}`
                    }
                },
                outro: 'This is a generated email. Please do not respond to this email. If any question please contact us at by the information provided at our site.'
            }
        }

        let emailBody = mailGenerator.generate(email);
        let message = {
            from: process.env.EMAIL_NAME,
            to: useremail,
            subject: 'Password reset request: NYC Lace',
            html: emailBody
        };

        await transporter.sendMail(message);

        return true

    } catch(error){
        throw error
    }
}

const orderEmail = async(username, useremail, transactionOrder) => {
    let items = []

    const generateOrderItems = () => {
        items = transactionOrder.order.items.map((order, i) => ({
            item: `Size: ${order.size}  Qty: ${order.qty}`,
            description: order.name,
            price: `$${order.price}`
        }));

        return items
    }

    generateOrderItems();
    try {

        let mailGenerator = new Mailgen({
            theme: "salted",
            product: {
                name: 'NYC Lace',
                link: `${process.env.EMAIL_URL}`,
                logo: 'https://res.cloudinary.com/reyes181/image/upload/v1541155251/logo_2.png',
                logoHeight: '150px'
            }
        });

        

        const email = {
            body: {
                title: `Great news ${username} your order was a success and is being processed`,
                intro: `Order Confirmation: ${transactionOrder.order.porder} - Date: ${transactionOrder.order.dataOfPurchase}`,
                table: [
                    {
                        title: 'Products purchased',
                        data: items,
                        columns: {
                            customWidth: {item: '25%', price: '15%'},
                            customAlignment: {price: 'right'}
                        }
                    },
                    {
                        title: 'Payment Type & Total',
                        data: [
                            {
                                paymentType: transactionOrder.order.paymentType,
                                shipping: `$${transactionOrder.order.shipping}`,
                                total: `$${transactionOrder.order.orderTotal}` 
                            }
                        ],
                        columns: {
                            customWidth: {payment: '50%', shipping: '35%', total: '15%'},
                            customAlignment: {total: 'right'}
                        }
                    }
                ],
                action: {
                    instructions: `Hello ${username} your order has been made. You can check the status of your order and more in your dashboard.`,
                    button: {
                        color: '#3869d4',
                        text: 'Go to Dashboard',
                        link: `http://localhost:3000/account/dashboard`
                    }
                },
                outro: 'This is a generated email. Please do not respond to this email. If any question please contact us at by the information provided at our site.'
            }
        }

        let emailBody = mailGenerator.generate(email);
        let message = {
            from: process.env.EMAIL_NAME,
            to: useremail,
            subject: `Order confirmation #${transactionOrder.order.porder}: NYC Lace`,
            html: emailBody
        };

        await transporter.sendMail(message);

        return true

    } catch(error){
        throw error
    }
}

// Models
const User  = require('./models/user');
const Brand = require('./models/brand');
const Footwear = require('./models/footwear');
const Product = require('./models/product');

// Middlewares
const auth = require('./middleware/auth');
const admin = require('./middleware/admin');

//===========================================
//              USERS
//===========================================

app.get('/api/users/auth',auth,(req,res)=>{
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        phone: req.user.phone,
        street: req.user.street,
        city: req.user.city,
        state: req.user.state,
        role: req.user.role,
        cart: req.user.cart,
        zipcode: req.user.zipcode,
        history: req.user.history,
        verified: req.user.verified
    })
});

app.post('/api/users/register',(req,res) =>{

    User.findOne({'email': req.body.email}, (err, user) => {
        console.log(user)
        if(user) {
            return res.json({success: false, message: 'Account with this email already exist'});
        }
        const newUser = new User(req.body);
        newUser.save((err,doc)=>{
            if(err) return res.json({success: false, message: err});
            registerEmail(doc.name, doc.email, doc);
            return res.status(200).json({
                success: true,
                userCredential: {'email': doc.email, 'password': req.body.password}
            })
        })
    })
    
});

app.post('/api/users/verification', (req, res) => {
    User.findOne({_id: mongoose.Types.ObjectId(req.query.token)}, (err,user)=>{
        if(!user) {
            return res.json({success: false, message: err});
        };
        if(user.verified){
            return res.json({success: false, message: 'Email has been verified already'})
        } else {
            User.findOneAndUpdate(
                {_id: mongoose.Types.ObjectId(req.query.token)},
                { $set:{verified: true}},
                { new: true},
                (err,doc)=>{
                    if(err) return res.json({success:false,err});
                    res.status(200).json({success: true, message: 'Account has been verified'});
                }
            )
        }; 
    });
});

app.post('/api/users/sendResetLink', (req, res) => {
    User.findOne({'email': req.body.payload.email},(err,user)=>{
        if(!user) return res.json({success:false, message:'Account with that email does not exist.'});
        
        resetPasswordLink(req.body.payload.email, user);
        return res.status(200).json({
            success: true,
            message: 'Email has been sent with instruction to reset password.'
        })
        
    });
});

app.post('/api/users/send_verification', (req, res) => {
    User.findOne({'email': req.body.payload},(err,user)=>{
        if(!user) return res.json({success:false, message:'Account with that email does not exist.'});
        
        
        registerEmail(user.name, user.email, user)
        return res.status(200).json({
            success: true,
            message: 'Email to verify account has been sent.'
        })
        
    });
});

app.post('/api/users/login',(req,res)=>{
    //find the email
    console.log(req.body.email)
    
    User.findOne({'email': req.body.email},(err,user)=>{
        if(!user) return res.json({loginSuccess:false, message:'Account with this email does not exist.'});
        
        //check password
        user.comparePassword(req.body.password, (err, isMatch)=>{
            if(!isMatch) return res.json({loginSuccess:false, message:'Wrong password'});
            
            //generate a token
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('x_auth',user.token).status(200).json({
                    loginSuccess: true,
                    user: user
                });
            });
        });
    });
    
    
});


app.post('/api/users/logout',auth,(req,res)=>{
    console.log(req.user.email)
    User.findOneAndUpdate(
        {email: req.user.email},
        {token: ''},
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                isAuth: false,
                cart: []
            });
        }
    );
    
});

app.post('/api/users/reset_password',(req,res)=>{
    
    User.findOne({'email': req.body.payload.email},(err,user)=>{
        if(!user) return res.json({success:false, message:'Sorry, account with this email does not exist.'});
         //check password
         user.comparePassword(req.body.payload.oldpassword, (err, isMatch)=>{
            if(!isMatch) return res.json({success:false, message:'Incorrect current password for account.'});
            user.password = req.body.payload.newpassword;

            user.save((err,doc)=>{
                if(err) return res.json({success:false,err});
                passwordAlert(req.body.payload.email)
                return res.status(200).json({
                    success: true,
                    message: 'Password has been changed.'
                })
            })
            
        });
        
    })
})

app.post('/api/users/addToCart',auth,(req,res)=>{
    User.findOne({_id: req.user._id}, async (err,doc)=>{
        let duplicate = false;
        let newDoc = [];
        await doc.cart.forEach((item)=>{
            if(item.name === req.query.productName && item.size === req.query.productSize){
                item.qty = item.qty + 1;
                duplicate = true;
            }
            newDoc = doc.cart
        })
        console.log({'newDoc':newDoc})
        if(duplicate){
           User.findOneAndUpdate(
            {_id: req.user._id},
            { $set:{cart: newDoc}},
            {new:true},
            (err,doc)=>{
                if(err) return res.json({success:false,err});
                res.status(200).json({doc});
            }
           );
        } else {
            User.findOneAndUpdate(
                {_id: req.user._id},
                { $push:{cart:{
                    id: mongoose.Types.ObjectId(req.query.productId),
                    name: req.query.productName,
                    price: req.query.productPrice,
                    image: req.query.productImg,
                    size: req.query.productSize,
                    qty:1,
                    date: Date.now()
                }}},
                { new: true},
                (err,doc)=>{
                    if(err) return res.json({success:false,err});
                    res.status(200).json({doc});
                }
            )
        }
    })
});

app.get('/api/users/removeQtyCart',auth,(req,res)=>{
    User.findOne({_id: req.user._id}, (err,doc)=>{
           User.findOneAndUpdate(
               {_id: req.user._id, "cart.id":mongoose.Types.ObjectId(req.query.productId)},
               {$inc: {"cart.$.qty": - 1}},
               {new:true},
               (err,doc)=>{
                   if(err) return res.json({success:false,err});
                   if(doc.cart.qty === 0){
                        return doc.cart.qty = 1
                    }
                   res.status(200).json(doc.cart);
               }
           );
        }
    )
});

app.get('/api/users/updateItemQty',auth,(req,res)=>{
    if(req.query.type === 'inc'){
        User.findOneAndUpdate(
            {_id: req.user.id, "cart.id": mongoose.Types.ObjectId(req.query._id)},
            {$inc: 
                {"cart.$.qty": 1}
            },
            {new: true},
            (err,doc)=>{
                
                     return res.status(200).json({
                         doc
                     });
                
            }
        );
    } else {
        User.findOneAndUpdate(
            {_id: req.user.id, "cart.id": mongoose.Types.ObjectId(req.query._id)},
            {$inc: 
                {"cart.$.qty": - 1}
            },
            {new: true},
            (err,doc)=>{
                
                     return res.status(200).json({
                         doc
                     });
                
            }
        );
    }
    
})

app.get('/api/users/removeFromCart',auth,(req,res)=>{
    User.findOneAndUpdate(
        {_id: req.user.id},
        {$pull: 
            {cart: {"id":mongoose.Types.ObjectId(req.query._id)}}
        },
        {new: true},
        (err,doc)=>{
            
                 return res.status(200).json({
                     doc
                 });
            
        }
    );
});

app.post('/api/users/purchaseByCard',auth,(req,res)=>{
    let history = [];
    let orderConfirmation = [];
    let transactionData = {};
    
    const date = new Date();
    const po = `PO-${date.getHours()}${date.getMinutes()}-${SHA1(req.user._id)
        .toString().substring(0,8)
    }`;

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    let dateNow = curr_date + "-" + curr_month + "-" + curr_year;    

    User.findOne({_id: req.user._id}, (err,doc)=>{

        history.push({
            porder: po,
            dataOfPurchase: dateNow,
            orderTotal: req.body.payload.total,
            items: doc.cart,
            card: req.body.payload.cardInfo,
            payemtType: req.body.payload.paymentType
        });

        orderConfirmation.push({
            porder: po,
            dataOfPurchase: dateNow,
            orderTotal: req.body.payload.total,
            items: doc.cart,
            card: req.body.payload.cardInfo,
            paymentType: req.body.payload.paymentType
        });

        transactionData.user = {
            id: req.user._id,
            name: req.user.name,
            lastname: req.user.lastname,
            email: req.user.email
        };

        transactionData.order = {
            porder: po,
            dataOfPurchase: dateNow,
            orderTotal: req.body.payload.total,
            items: doc.cart,
            card: req.body.payload.cardInfo,
            paymentType: req.body.payload.paymentType,
            shipping: req.body.payload.shipping 
        }
        
        
        {
            User.findOneAndUpdate(
                {_id: req.user._id},
                { $push:{history: history}, $set:{cart:[]}},
                { new: true},  
                (err,doc)=>{
                    if(err) return res.json({success:false,err});
                    orderEmail(doc.name, doc.email, transactionData);
                    res.status(200).json({doc, orderConfirmation, success: true, message: 'Order confirmed'});
                }
            )
        }
    })
    
});

app.post('/api/users/update_profile',auth,(req,res)=>{
    console.log(req.body)
    User.findOneAndUpdate(
        {_id: req.user._id},
        {
            "$set": req.body.payload
        },
        {new:true},
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success:true,
                user: doc
            })
        }
    )
})

//===========================================
//              BRANDS
//===========================================

app.post('/api/product/brand',auth,admin,(req,res)=>{
    const brand = new Brand(req.body);
    
    brand.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
            brand: doc
        });
    });
});

app.get('/api/product/brands',(req,res)=>{
    Brand.find({},(err,brands)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(brands);
    })
});

app.get('/api/product/brand_by_id',(req,res)=>{
    let item = req.query.id;
    
    Brand.
    find({_id: mongoose.Types.ObjectId(req.query.id)}).
    exec((err,docs)=>{
        if(err) return res.json({success:false,err});
        return res.status(200).send(docs)
    })
});




//===========================================
//              FOOTWEAR    
//===========================================

app.post('/api/product/footwear',auth,admin,(req,res)=>{
    const footwear = new Footwear(req.body);
    
    footwear.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
            footwear: doc
        });
    });
});

app.get('/api/product/footwears',(req,res)=>{
    Footwear.find({},(err,footwears)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(footwears);
    });
});


//===========================================
//              PRODUCTS   
//===========================================

app.post('/api/product/article',auth,admin,(req,res)=>{
    const product = new Product(req.body);
    
    product.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
            article: doc
        });
    });
});

app.get('/api/product/articles_by_id',(req,res)=>{
    let type = req.query.type;
    let items = req.query.id;
    
    if(type === "array"){
        let ids = req.query.id.split(',');
        items = [];
        items = ids.map(item=>{
            return mongoose.Types.ObjectId(item);
        });
    }
    
    Product.
    find({'_id':{$in:items}}).
    populate('brand').
    populate('footwear').
    exec((err,docs)=>{
        if(err) return res.json({success:false,err});
        return res.status(200).send(docs)
    })
});

app.post('/api/product/articles_by_id',auth,(req,res)=>{
    let item = req.query.id;
    Product.findOneAndUpdate(
        {_id: item},
        {
            "$set": req.body
        },
        {new:true},
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success:true
            })
        }
    )
})

app.get('/api/product/articles_by_brand',(req,res)=>{
    let items = req.query.brand;
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name';
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;
    
    Product.
    find({'brand':{$in:items}}).
    populate('brand').
    populate('footwear').
    sort(sortBy).
    limit(limit).
    exec((err,docs)=>{
        if(err) return res.json({success:false,err});
        return res.status(200).send(docs)
    })
});

app.post('/api/product/shop',(req,res)=>{
    let items = req.query.brand;
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip); 
    let findArgs = {};
    for(let key in req.body.filters){
        if(req.body.filters[key].length > 0){
            if(key === 'shoesize' || key === 'colors' || key === 'clothesize' ){
                findArgs[key] = {
                    $in: req.body.filters[key]
                }
            }
            
            else{
                findArgs[key] = req.body.filters[key]
            }
        }
    }
    
    findArgs['publish'] = true
    
    Product.
    find({'brand':{$in:items}}).
    find(findArgs).
    populate('brand').
    populate('footwear').
    sort([[sortBy,order]]).
    skip(skip).
    limit(limit).
    exec((err,articles)=>{
        if(err) return res.status(400).send(err);
        console.log({'article': articles})
        res.status(200).json({
            size: articles.length,
            articles
        })
    });
})

app.get('/api/product/articles_by_model',(req,res)=>{
    let items = req.query.brand;
    let sortBy = req.query.sortBy ? req.query.sortBy : 'model';
    
    Product.
    find({'brand':{$in:items}}).
    populate('brand').
    populate('footwear').
    sort(sortBy).
    exec((err,docs)=>{
        if(err) return res.json({success:false,err});
        let docss = [];
        for(var i = 0; i < docs.length; i++){
            docss.push(docs[i].model)
        }
        let uniqueArray = docss.filter(function(item, pos) {
            return docss.indexOf(item) == pos;
        });
        return res.status(200).send(uniqueArray.sort((a,b) => b.localeCompare(a, undefined, {numeric: true})).reverse())
    })
});

app.get('/api/product/articles',(req,res)=>{
    
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;
    
    function escapeRegex(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };
    
    if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Product.
        find({'name': {regex}}).
        populate('brand').
        populate('footwear').
        limit(limit).
        exec((err,articles)=>{
            if(err) return res.status(400).send(err);
            res.send(articles);
        });
    } else {
        Product.
        find().
        populate('brand').
        populate('footwear').
        sort([[sortBy,order]]).
        limit(limit).
        exec((err,articles)=>{
            if(err) return res.status(400).send(err);
            res.send(articles);
        });
    }
});

app.get('/api/product/articles',(req,res)=>{
    
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;
    
    Product.
    find().
    populate('brand').
    populate('footwear').
    sort([[sortBy,order]]).
    limit(limit).
    exec((err,articles)=>{
        if(err) return res.status(400).send(err);
        res.send(articles);
    });
});

app.get('/api/product/articles_random',(req,res)=>{
    
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;
    
    Product.
    find().
    populate('brand').
    populate('footwear').
    limit(limit).
    exec((err,articles)=>{
        if(err) return res.status(400).send(err);
        var random = articles.sort( () => Math.random() - 0.5);
        var five = random.slice(0,8);
        // five.push(random.slice(0,5));
        res.send(five);
    });
});


//===========================================
//              SITE   
//===========================================
app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
});



//===========================================
//              DEFAULT   
//===========================================
if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.use(enforce.HTTPS({trustProtoHeader: true}));
    app.get('/*',(req,res)=>{
        sendfile(path.resolve(__dirname,'../client','build','index.html'))
    })
}

app.listen(process.env.PORT || 8081, ()=>{
    console.log(`App is running on port 8081`);
})