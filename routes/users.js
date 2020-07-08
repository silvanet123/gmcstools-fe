var express = require('express');
var router = express.Router();
const axios = require('axios');


/* axios.get("http://gmcsservice.gmcs.k12.nm.us:3000/sites").then(resp=> {console.log(resp.data)})
/* GET users listing. */
async function getSites() {
  mydata = await axios.get("http://gmcsservice.gmcs.k12.nm.us:3000/sites")
  return mydata.data
}
async function main() {
  rolesarr = ["Role - Cafeteria", "Role - Counselor", "Role - District Admin", "Role - Dual Login",
    "Role - Health Services", "Role - Principal Elementary", "Role - Principal Secondary",
    "Role - School Clerk Elementary", "Role - School Clerk Secondary", "Role - SE Admin",
    "Role - SE Staff", "Role - SE Teacher", "Role - Student Basic View ONLY", "Role - Teacher Elementary",
    "Role - Teacher Secondary", "Role - Test Coordinator", "Role - General Staff"]
  mysites = await getSites()
  mysites.sort((a, b) => (a.name > b.name) ? 1 : -1)
  router.get('/', function (req, res, next) {
    res.render('users', { 'data': { 'sites': mysites, 'roles': rolesarr } });
  });
  router.post('/add', async (req, res) => {
    res.send(req.body)
  })
}
main();



module.exports = router;
