const Express = require('express');

const app = new Express();

app.use((req, res) => {
  res.send('YES I AM HERE');
});

app.listen(3000);
