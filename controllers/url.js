const URL = require('../models/url');
const simpleId = require('simple-id');

async function handleGenerateNewShortURL(req,res){
          const shortID = simpleId(8); 
          const body = req.body;
          if(!body.url) return res.status(400).json({error:'url is required'});
          await URL.create({
            shortId : shortID,
            redirectedURL: body.url,
            clicks : [],
            createdBy : req.user._id,
          });

            return res.render ('home',{
                  id:shortID,
            });
           
}

module.exports =  {
    handleGenerateNewShortURL,
}