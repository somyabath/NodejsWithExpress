const express = require('express')
const app = express()
const path = require('path')
    // app.get('', (req, res) => {
    //     // console.log("data sent by browser", req.query.name)

//     res.send(`< h1 > Hello 


//                 welocme to express js < /h1><a href="/about
//                 ">Go to about page<a>`)
// })
// app.get("/about", (req, res) => {
//     res.send([{

//             name: 'anil',
//             email: 'anila12@mail.com'
//         },
//         {
//             name: 'anil',
//             email: 'anila12@mail.com'
//         },
//         {

//             name: 'anil',
//             email: 'anila12@mail.com'
//         }
//     ])
// })
// app.get('/helppage', (req, res) => {
//     res.send(` < input type = "
//                 text " placeholder="
//                 Enter"value= ${
//                     req.query.name
//                 }/>`);
// })

const publicPath = path.join(__dirname, 'public')
    // app.use(express.static(publicPath))

// node js is server req and res is used
// for communication to server and client ////Path help access to folder and static is used to display static content

//how to remove extension from url

app.set('view engine', 'ejs');

app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/profile', (_, resp) => {
    const user = {
        name: 'poornima',
        age: 26,
        city: 'gwalior',
        skills: ['php', 'nodejs', 'js']
    }
    resp.render('profile', {
        user
    });

})


app.get('/login', (_, resp) => {
    resp.render('login')
})
app.get('/about', (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
})



app.get('/help', (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/pageNotFound.html`)
})
app.listen(3333)




// how to remove url