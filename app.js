const express = require("express");
const port = 8989;
const app = express();
const Database = require("./config/data");
const path = require("path");
const multer = require("multer");
const table = require("./model/schema");
const product_table = require("./model/product");
const contact = require("./model/contact");
const userregi = require("./model/userregi");
const profile = require("./model/profile");
const flash = require("connect-flash");
const session = require("express-session");
const product = require("./model/product");
const main = require("./model/main");
const sub = require("./model/sub");
const blog = require("./model/blog");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single("image");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
app.use(session({ secret: "private-Key" }));
app.use(flash());





app.get('/', (req, res) => {
    res.render("Auth_register")
});

app.get("/userregi", (req, res) => {
    res.render("userregi");
});

app.get('/Auth_login', async (req, res) => {
    await table.find({}).then((alldata) => {
        res.render("Auth_login", {
            data: alldata
        });
    });
});


app.get("/index", async (req, res) => {
    await table.find({}).then((alldata) => {
        res.render("index", {
            data: alldata
        });
    });
});

app.get('/productadd', (req, res) => {
    sub.find({}).populate("mainid").then((alldata) => {
        res.render("productadd", {
            info: req.flash("msg"),
            data: alldata
        });
    });
});

app.get("/mainindex", (req, res) => {
    res.render("mainindex")
});


app.get("/shop", async (req, res) => {
    const allData = await product.find({}).populate({
        path: "subid",
        populate: {
            path: "mainid"
        }
    });
    res.render("shop", { data: allData });
});


app.get("/blog", (req, res) => {
    res.render("blog")
});

app.get("/contact", (req, res) => {
    res.render("contact")
});

app.get("/usercart", (req, res) => {
    res.render("usercart", { data: productlist });
});


app.get("/usercontact", (req, res) => {
    res.render("usercontact", { info: req.flash("msg") });
});


app.get("/userAbout", (req, res) => {
    res.render("userAbout")
});

app.get("/userblog", (req, res) => {
    res.render("userblog")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/UserDetail", async (req, res) => {
    await contact.find({}).then((alldata) => {
        res.render("UserDetail", {
            data: alldata
        });
    });
});

app.get("/delete", async (req, res) => {
    let id = req.query.id;
    let dea = await product_table.findByIdAndDelete(id);
    res.redirect("back")
})




app.get("/edit", async (req, res) => {
    let id = req.query.id;
    let edi = await product_table.findById(id);
    res.render("productedit", {
        edit: edi
    });
});

app.get("/userregi", (req, res) => {
    res.render("userregi");
});

app.get("/userlogin", (req, res) => {
    res.render("userlogin");
});

app.get("/Auth_register", (req, res) => {
    res.render("Auth_register");
});

app.get("/profilepage", (req, res) => {
    res.render("profilepage", {
        info: req.flash("msg")
    });
});

app.get("/viewprofile", async (req, res) => {
    let data = await profile.find({}).then((alldata) => {
        res.render("viewprofile", {
            data: alldata
        });
    });
});

app.get("/editprofile", async (req, res) => {
    let id = req.query.id;
    let data = await profile.findById(id);
    res.render("editprofile", {
        hello: data
    });
});


app.get("/usershop", async (req, res) => {
    let data = await product_table.find({}).then((alldata) => {
        res.render("usershop", {
            data: alldata
        });
    });
});

app.get("/userindex", (req, res) => {
    res.render("userindex");
});

const productlist = [];

app.get("/addtocart", upload, async (req, res) => {
    try {
        const id = req.query.id;
        const data = await product_table.findById(id);
        const productitem = {
            productId: id,
            product: data.product,
            price: data.price,
            image: data.image
        };
        productlist.push(productitem);
        res.redirect("/usershop");
    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).send("Error adding product to cart");
    }
});

app.get("/viewcat", async (req, res) => {
    let alldata = await main.find({});
    res.render("viewcat", {
        data: alldata
    });
});
app.get("/viewSubCat", async (req, res) => {
    let alldata = await sub.find({}).populate("mainid");
    res.render("viewSubCat", {
        data: alldata
    });
});
app.get("/forms", (req, res) => {
    res.render("forms");
});

app.get('/sub', async (req, res) => {
    const alldata = await main.find({});
    res.render('sub', {
        data: alldata
    });
});

app.get('/addblog', async (req, res) => {
    res.render("addblog")
})

app.get("/viewblog", async (req, res) => {
    let data = await blog.find({}).then((alldata) => {
        res.render("viewBlog", {
            data: alldata
        })
        console.log(alldata);
    })
})

app.get("/deleteBlog", async (req, res) => {
    let id = req.query.id
    let helo = await blog.findByIdAndDelete(id);
    res.redirect("back");
})

app.get("/editBlog", async (req, res) => {
    let id = req.query.id;
    console.log(id);
    let data = await blog.findById(id);
    res.render("editBlog", {
        all: data
    })
})














// Post Route Start 




app.post("/bloginsert", upload, async (req, res) => {
    let B_image = " ";
    if (req.file) {
        B_image = req.file.path;
    }
    const { B_title, B_About } = req.body;
    let data = {
        B_title: B_title,
        B_About: B_About,
        B_image: B_image
    };
    // console.log(data);
    try {
        await blog.create(data);
        res.redirect("back");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


app.post('/sign', upload, async (req, res) => {

    const { username, password } = req.body;
    console.log(req.body);
    let data = {
        username: username,
        password: password,
    }
    console.log(data);
    await table.create(data);
    res.redirect('Auth_login');
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    let user = await table.findOne({ username: username });
    if (!user) {
        res.send("Incorrect Username....");
    }
    let pass = await table.findOne({ password: password });
    if (!pass) {
        res.send("incorrect Password...");
    }
    res.render('index');
});
app.post("/usersign", upload, async (req, res) => {
    let image = " ";
    if (req.file) {
        image = req.file.path
    }
    const { username, password } = req.body;
    let data = {
        username: username,
        password: password,
        image: image
    }
    let all = await userregi.create(data);
    res.redirect("userlogin");
});

app.post("/userlogin", async (req, res) => {
    const { username, password } = req.body;
    let user = await userregi.findOne({ username: username });
    if (!user) {
        res.send("Incorrect Username....");
    }
    let pass = await userregi.findOne({ password: password });
    if (!pass) {
        res.send("incorrect Password...")
    }
    res.render('profilepage', { info: req.flash("msg") });
});

app.post('/main', (req, res) => {
    main.create(req.body);
    res.redirect('back');
})

app.post("/sub", (req, res) => {
    const { mainid, item_b } = req.body;

    let data = {
        mainid: mainid,
        item_b: item_b
    };
    sub.create(data);
    res.redirect("back");
})

app.post("/insert", upload, async (req, res) => {
    let image = " ";
    if (req.file) {
        image = req.file.path
    }
    const { product, price, disc, mainid, subid, item_c } = req.body;
    let data = {
        product: product,
        price: price,
        disc: disc,
        mainid: mainid,
        subid: subid,
        item_c: item_c,
        image: image
    }
    req.flash("msg", "Product Add Successfull....");
    await product_table.create(data);
    res.redirect("back");
})

app.post("/update", upload, async (req, res) => {
    let image = " ";
    if (req.file) {
        image = req.file.path;
    }
    let id = req.body.productId;

    await product_table.findByIdAndUpdate(id, {
        product: req.body.product,
        price: req.body.price,
        disc: req.body.disc,
        image: image
    });
    res.redirect("shop");
});

app.post("/addtocart", async (req, res) => {
    await product_table.find({}).then((alldata) => {
        res.render("usershop", {
            data: alldata
        });
    });
});

// create profile..................

app.post("/profile", upload, async (req, res) => {
    let image = " ";
    if (req.file) {
        image = req.file.path;
    };

    const { username, email, country, city, state, code } = req.body;

    let data = {
        username: username,
        email: email,
        country: country,
        state: state,
        city: city,
        code: code,
        image: image
    }
    req.flash("msg", "your profile create successfully complete....");
    let all = await profile.create(data);
    res.redirect("profilepage");
});

// create profile..................

app.post("/contact", async (req, res) => {
    const { user, email, mobile, message } = req.body;
    let data = {
        user: user,
        email: email,
        mobile: mobile,
        message: message
    }
    req.flash("msg", "Your Message Send Succeefull....");
    await contact.create(data);
    res.redirect("back");
});

app.post("/updateprofile", upload, async (req, res) => {
    let image = " ";
    if (req.file) {
        image = req.file.path;
    }

    let id = req.body.profileId;

    await profile.findByIdAndUpdate(id, {
        username: req.body.username,
        email: req.body.email,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        code: req.body.code,
        image: image
    })
    res.redirect("viewprofile");
});

// Add Blog 


app.post("/updateblog",upload,async(req,res)=>{
    let B_image="";
    if (req.file) {
        B_image=req.file.path;
    }

    let id=req.body.blogid;

    await blog.findByIdAndUpdate(id,{
        B_title:req.body.B_title,
        B_About:req.body.B_About,
        B_image:B_image,
    });
    res.redirect("viewBlog")
});


// Add Blog 

app.listen(port, () => {
    console.log("Serever is Strated At port.." + port);
})