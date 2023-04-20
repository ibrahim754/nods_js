const express = require('express');
const port = 5000;
const host = '127.0.0.1';
const app = express();

app.get('/', (req, res) => {
    let page = '<a href="/students">students</a>'
    res.send(page);
});

app.get('/students', (req, res) => {
    const st = [
        {
            name: "Salman 1",
            age: 21,
            email: "ibrahimsalman277@gmail.com"
        },
        {
            name: "Salman 2",
            age: 21,
            email: "ibrahimsalman277@gmail.com"
        },
        {
            name: "Salman 3",
            age: 21,
            email: "ibrahimsalman277@gmail.com"
        },
    ];

    let page = '<ul>';
    st.forEach(element => {
        page += '<li>';
        page += element.name;
        page += '</li>';
    });
    page += '</ul>';
    res.send(page);
});

app.listen(port, host, () => {
    console.log('running on http://' + host + ':' + port);
});