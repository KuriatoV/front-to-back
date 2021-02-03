const express = require('express')
const app = express()
const port = 3000

app.get('/lol', (req, res, next) => {
  res.status(418);
  res.set({ 'X-her': 'her' });
  res.send('i prefer coffe');
  next();
})

app.get('/', (req, res) => {
  res.send('ALO EBAT  !')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}
)
