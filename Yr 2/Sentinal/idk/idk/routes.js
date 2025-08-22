const express = require('express');

const router = express.Router();
let index = 0;
// Simplest parameterized view
router.get("/", (req, res) => {
  res.render("index", { title: "Hello!!!!!" })
})

module.exports = router;

const facts = [
  "There are more stars in the universe than grains of sand on all the beaches on Earth. That’s at least a billion trillion!",
  "Singapore is home to more than 390 species of birds and at least 2,100 native vascular plants, of which more than 1,500 species are classified as extant in Singapore.",
  "Mangroves have great capacity to take carbon out of the atmosphere. A patch of mangroves could absorb as much as 10 times the carbon of a similarly sized patch of terrestrial forest, mitigating the effects of sea level rise.",
  "Quantum physics teaches us that everything is energy at the most fundamental levels. Reality is merely an illusion, although a very persistent one.",
  "The word vaccine comes from the cowpox virus vaccinia, which derives from the Latin word vacca for cow."
];

let factIndex = 0;

router.get("/", (req, res) => {
  res.render("index", { title: "Welcome to Staring Engines!" });
});

router.get("/fact", (req, res) => {
    const currentFact = facts[factIndex];
    factIndex = (factIndex + 1) % facts.length; // Cycle through the facts
    res.render("fact", { fact: currentFact });
});


router.get("/7boom", (req, res) => {
  let num = parseInt(req.query.num)
  let isBoom = (num % 7 == 0) || (String(num).includes('7'));
  if (num = 0){
    isBoom === false
  } 
  res.render("7boom",{isBoom})
})


router.get('/allfacts', (req, res) => {
  const fact = facts[index];
  index = (index + 1) % facts.length;
  res.render('allfacts', { s });
});


module.exports = router;