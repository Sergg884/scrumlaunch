export default function (req, res, next) {
  const host = req.headers.host;
  
  if (host === 'scrumlaunch.com') {
    const redirectURL = `https://www.scrumlaunch.com${req.url}`;
    
    res.writeHead(301, { Location: redirectURL });
    res.end();
    return;
  }
  
  next();
}
