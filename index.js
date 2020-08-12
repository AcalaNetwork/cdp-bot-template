require('http')
  .createServer(function (req, res) {
    res.write("It's running...");
    res.end();
  })
  .listen(process.env.PORT || 80);