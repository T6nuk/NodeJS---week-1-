const express = require('express'); //rakendus alustab tööd sellest, et vahemälus luuakse express nimega muutuja. 
const app = express(); //meie rakendus toetub expressile, initsialiseerime expressi. toetuvad expressile!



//KUIDAS haldada GET tüüpi päringuid! POST 
app.get('/', (req, res)=>{ // '/' on main page ja '/contact' on contact leht main pageilt.
    console.log(req); //req ehk request  tuleb kasutaja käest, kui ta teeb päringuid veebilehe aadressile. Ilmuvad terminali.
    //KUIDAS server midagi vastata saab ehk res, response? req ja res request ja response
    res.send('Howdy!');
}); 

//ÕPETAME serverit haldama päringuid aadressile / kontakt 

app.get('/contact', (req, res)=>{ //req mida me saame ja res mida me vastame!
    res.send('Tere!');
});

//KUIDAS haldame päringud, mis tulevad GET päringule!
app.get('*', (req, res)=>{ //'*' tähendab kõik ja kuna järjekord on tähtis, siis kaks esimest '/' ja '/contact' laseb ta läbi!
    res.send("404 not found")
});

app.listen(3000, function(){
    console.log("Sever is running on 3000")  //tagasiside meile, et server on "elus".
});