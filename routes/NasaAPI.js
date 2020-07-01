const axios = require("axios");
const router = require("express").Router();
const baseURL = "https://api.nasa.gov/";
const apikey = "api_key=OsxKBADdC2NEduQmMsJU9kxQTfLlc2vQYdtC4XFE";
const marsRoverApiQuery = "mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&"
const jobsUrl = "https://api.linkedin.com/v1/job-search?";
const imageURL = "https://images-api.nasa.gov/search?media_type=image&q=";
const APODapiquery = "planetary/apod?";
const asteroidApiQuery = "neo/rest/v1/feed?start_date=";
const moment = require("moment")
const currentday = moment().format("YYYY-MM-DD");

router.get("/apod", async (req,res)=>{
   const {data} = await axios.get(baseURL + APODapiquery + apikey);
   res.json(data)
})

router.get("/rover", async (req,res)=>{
    const {data} = await axios.get(baseURL + marsRoverApiQuery + apikey);
    res.json(data)
});

// router.get("/jobs", async (req,res)=>{
//     const {data} = await axios.get(jobsUrl);
//     res.json(data)
// })

router.get("/image", async (req,res)=>{
    const {data} = await axios.get(imageURL+req.query.q);
    res.json(data)
});

router.get("/asteroid", async (req,res)=>{
    const {data} = await axios.get(baseURL + asteroidApiQuery + currentday + apikey);
    res.json(data)
})

module.exports = router;


//axios.get(`/api/nasa/image?q=${insert dynamic search term here}`)