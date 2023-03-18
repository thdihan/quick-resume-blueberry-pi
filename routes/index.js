var express = require('express');
var router = express.Router();
var db=require('./database');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET login page. */
router.get('/login.html', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});


/* GET login page. */
router.get('/basic_info.html', function(req, res, next) {
  res.render('basic_info', { title: 'Express' });
});

/* GET login page. */
router.get('/basic_info', function(req, res, next) {
  res.render('basic_info', { title: 'Express' });
});



router.get('/user_dashboard.html', function(req, res, next) {
  res.render('user_dashboard', { title: 'Express' });
});

/* GET login page. */
router.get('/user_dashboard', function(req, res, next) {
  res.render('user_dashboard', { title: 'Express' });
});



router.get('/create_custom_profile.html', function(req, res, next) {
  res.render('create_custom_profile', { title: 'Express' });
});

/* GET login page. */
router.get('/create_custom_profile', function(req, res, next) {
  res.render('create_custom_profile', { title: 'Express' });
});



router.get('/generate_resume.html', function(req, res, next) {
  let profiles;
  var sql = 'Select profile_id, profile_name from custom_profile';
  db.query(sql,(err, results)=>  { 
        
    console.log("This is data :" , results);
    profiles=results;
    console.log(results);
    if(err) throw err;
    
    res.render('generate_resume.ejs',{data:results});
   
});

});

/* GET login page. */
router.get('/generate_resume', function(req, res, next) {


  db.query(sql,(err, results)=>  { 
        
    console.log("This is data :" , results);
    const profiles=results;
    console.log(results);
    if(err) throw err;
    
    res.render('generate_resume.ejs',{data:results});
   
});

});

router.get('/cv1.html', function(req, res, next) {


    //console.log(req.query.result);
    
res.render('cv1', { title: 'Express' });
  
});

/* GET login page. */
router.get('/cv1', function(req, res, next) {

  console.log(req.query.result);
  
  const sql='select * from custom_profile,registration where custom_profile.email=registration.email and custom_profile.profile_id=?';
  db.query(sql,req.query.result,(err, results, fields)=>  { 
        
    //console.log("This is data :" , results);
    //const profiles=results;
    //console.log(results);
    if(err) throw err;
    console.log(results[0]);
    res.render('cv1.ejs',{data:results[0]});
   
  });
});



module.exports = router;
