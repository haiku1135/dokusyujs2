import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  const countdown = req.query.countdown;

  if(countdown){
    res.render('index.ejs', {countdown: countdown});
  }else{
    res.send('countdownパラメータを設定してください');
  }
});

app.get('/plus', (req, res)=> {
  const {val1 = 0, val2 = 0} = req.query;

  const sum = Number(val1) + Number(val2);

  res.render('plus.ejs', {val1, val2, sum});
});


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}?countdown=5`);
});