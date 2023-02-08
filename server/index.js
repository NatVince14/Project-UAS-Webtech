//Vincent Nataleo - 58190039
//KELAS T
//UTS Web Technology 3

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const port = 3000;
var cors = require('cors')
app.use(cors());
 
// parse application/json
// app.use(bodyParser.json());
app.use(express.json());
 
//create database connection
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: "",
  database: 'tk_komputer'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

app.get('/', (req, res) => {
  res.send('Home page');
})
 
//tampilkan semua data product
app.get('/api/products',(req, res) => {
  let sql = "SELECT * FROM product";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

//tampilkan semua data aksesoris
app.get('/api/accessories',(req, res) => {
  let sql = "SELECT * FROM aksesoris";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

//Tampilan Produk di Tabel Product berdasarkan nama produk yang dicari user
app.get('/api/search-products', function(req, res) {

  let sql = "SELECT * FROM product WHERE product_name LIKE " + `'%` + req.query.keyword + `%'`;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
})

//Tampilan Produk di Tabel Aksesoris berdasarkan nama produk yang dicari user
app.get('/api/search-barang', function(req, res) {

  let sql = "SELECT * FROM aksesoris WHERE nama_aksesoris LIKE " + `'%` + req.query.keyword + `%'`;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
})

//Tampilan Produk di Tabel Product berdasarkan harga yang dicari user
app.get('/api/search-price', function(req, res) {

  let sql = "SELECT * FROM product WHERE product_price LIKE " + `'%` + req.query.keyword + `%'`;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
})

//Tampilan Produk di Tabel Aksesoris berdasarkan harga yang dicari user
app.get('/api/harga-aksesoris', function(req, res) {

  let sql = "SELECT * FROM aksesoris WHERE harga_akaccsesoris LIKE " + `'%` + req.query.keyword + `%'`;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
})

//Tambahkan data product baru pada tabel Product
app.post('/api/add-products',(req, res) => {
  const nama = req.body.product_name;
  const jumlah = req.body.product_qty;
  const harga = req.body.product_price;

  let data = {product_name: req.body.product_name, product_qty: req.body.product_qty, product_price: req.body.product_price};
  let sql = "INSERT INTO product (product_name, product_qty, product_price) VALUES (?, ?, ?)";
  let query = conn.query(sql, [nama, jumlah, harga], (err, results) => {
    if (err) {
      console.log(err);
    } else {
        res.send(results);
    }
  });
});

//Tambahkan data aksesoris baru pada tabel Product
app.post('/api/add-accessories',(req, res) => {
  const namaAkse = req.body.nama_aksesoris;
  const jumlahAkse = req.body.jumlah_aksesoris;
  const hargaAkse = req.body.harga_aksesoris;

  let data = {nama_aksesoris: req.body.nama_aksesoris, jumlah_aksesoris: req.body.jumlah_aksesoris, harga_aksesoris: req.body.harga_aksesoris};
  let sql = "INSERT INTO aksesoris (nama_aksesoris, jumlah_aksesoris, harga_aksesoris) VALUES (?, ?, ?)";
  let query = conn.query(sql, [namaAkse, jumlahAkse, hargaAkse], (err, results) => {
    if (err) {
      console.log(err);
    } else {
        res.send(results);
    }
  });
});
 
//Edit data product berdasarkan id
app.put('/api/products/:id',(req, res) => {

  const name = req.body.product_name;
  const qty = req.body.product_qty;
  const price = req.body.product_price;

  let sql = "UPDATE product SET product_name=?, product_qty=?, product_price=? WHERE product_id="+req.params.id;
  let query = conn.query(sql, [name, qty, price], (err, results) => {
    if (err) {
      console.log(err);
    } else {
        res.send(results);
    }
  });
});

//Edit data aksesoris berdasarkan id
app.put('/api/accessories/:id',(req, res) => {

  const name = req.body.nama_aksesoris;
  const qty = req.body.jumlah_aksesoris;
  const price = req.body.harga_aksesoris;

  let sql = "UPDATE aksesoris SET nama_aksesoris=?, jumlah_aksesoris=?, harga_aksesoris=? WHERE id_aksesoris="+req.params.id;
  let query = conn.query(sql, [name, qty, price], (err, results) => {
    if (err) {
      console.log(err);
    } else {
        res.send(results);
    }
  });
});

//Delete data product berdasarkan id
app.delete('/api/products/:id',(req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM product WHERE product_id = ?";
  let query = conn.query(sql, id, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        res.send(results);
    }
  });
});

//Delete data di tabel akesoris berdasarkan id
app.delete('/api/accessories/:id',(req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM aksesoris WHERE id_aksesoris = ?";
  let query = conn.query(sql, id, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        res.send(results);
    }
  });
});
 
//Server listening
app.listen(port,() =>{
  console.log(`Server started on port ${port}`);
});