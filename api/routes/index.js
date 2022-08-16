var express = require('express');
var router = express.Router();
fs = require('fs');
const pdf = require('../public/javascripts/print')
const htmlTemplate = require('../public/javascripts/html-template')
const pdfmake = require('../public/javascripts/pdfmake')


/* GET home page. */
router.get('/', function (req, res, next) {
  // pdf();
  res.render('index.ejs')
});

router.get('/getpdf', async function (req, res, next) {
  const path = './打設結果記録表.pdf'
  if (fs.existsSync(path)) {
    res.contentType("application/pdf");
    fs.createReadStream(path).pipe(res)
  } else {
    res.status(500)
    console.log('File not found')
    res.send('File not found')
  }
});

router.get('/getpdf2', async function (req, res, next) {
  const header = htmlTemplate.header();
  const temp = htmlTemplate.main();
  pdfmake(header,temp).then((data) => {
    console.log(data)
    const path = './サンプル.pdf'
    if (fs.existsSync(path)) {
      res.contentType("application/pdf");
      fs.createReadStream(path).pipe(res).on('end', () => {
        console.log('PDF出力完了！')
      })
    } else {
      res.status(500)
      console.log('File not found')
      res.send('File not found')
    }
  })
});


module.exports = router;
