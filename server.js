const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

app.get('/', function(request, response) {
  console.log('Home page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Home Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg');
    response.send(result);
  });
});

// app.get('/about', function(request, response) {
//   console.log('About page visited!');
//   const filePath = path.resolve(__dirname, './build', 'index.html')
//   fs.readFile(filePath, 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
//     data = data.replace(/\$OG_TITLE/g, 'About Page');
//     data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
//     result = data.replace(/\$OG_IMAGE/g, 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg');
//     response.send(result);
//   });
// });

app.get('/contact', function(request, response) {
  console.log('Contact page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Contact Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Contact page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://rukminim1.flixcart.com/image/416/416/poster/t/c/s/save-trees-save-nature-psu360002939-small-original-imaekkpws5uvrqyy.jpeg?q=70');
    response.send(result);
  });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  // const filePath = path.resolve(__dirname, './build', 'index.html');
  // response.sendFile(filePath);
  const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      data = data.replace(/\$OG_TITLE/g, 'Home Page');
      data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
      result = data.replace(/\$OG_IMAGE/g, 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg');
      response.send(result);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));