const { Router } = require("express");
const { askAi } = require("../open-ai");

const router = Router()

router.post('/ask-ai', (req, res) => {
  const projectDescription = req.body.idea;

  console.log(projectDescription)

  askAi(projectDescription, (responseStep) => {
    console.log(responseStep);
  });
  res.status(201).json({ success: true })
});

module.exports = router