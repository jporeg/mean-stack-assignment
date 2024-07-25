exports.render = function (req, res) {
    if (req.session.lastVisit) {
      console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
  
    // List of MEAN stack definitions
    const meanStackDefinitions = [
      { name: 'MongoDB', definition: 'MongoDB is a NoSQL database that uses JSON-like documents with optional schemas.' },
      { name: 'Express', definition: 'Express is a minimal and flexible Node.js web application framework.' },
      { name: 'Angular', definition: 'Angular is a platform for building mobile and desktop web applications.' },
      { name: 'Node.js', definition: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.' }
    ];
  
    res.render('index', { 
      title: 'Hello, Joseph Oregero JOSORE9146',
      headerTitle: 'The MEAN Stack',
      definitions: meanStackDefinitions 
    });
  };
  