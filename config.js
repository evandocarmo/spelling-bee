module.exports = {
    production:{
      connectionLimit:20,
      host     : 'localhost',
      user     : 'me',
      password : 'secret',
      database : 'my_db'
    },
    development:{
      connectionLimit:20,
      host     : 'us-cdbr-iron-east-03.cleardb.net',
      user     : 'b883ab8b360943',
      password : '6c126f9a',
      database : 'heroku_cb0f33d0350a2e9'
    }
  }