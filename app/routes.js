var Project = require('./models/project.js');
var jwt = require('express-jwt');
var authCheck = jwt({
  secret: new Buffer('8B8Y4ItJsEAIUvdGz4RZebhUjT__HmB-vihKSKOYF-3UBM9yPfVsbE9ic9MvjEhS', 'base64'),
  audience: 'pHfERddgPLyILDkJDiCm0GdSb1nMgdIJ'
});

module.exports = function(app) {

  app.get('/api/projects', function(req, res) {
    Project.find(function(err, projects) {
      if (err)
        res.send(err)

      res.json(projects);
    });
  });

  app.post('/api/projects', authCheck, function(req, res) {
    var array = [];
    var images = req.body.img;
    Project.create({
      title: req.body.title,
      about: req.body.about,
      author: req.body.author,
      specs: req.body.specs,
      img: array.concat(images)
    }, function(err, project) {
      if (err)
        res.send(err);

      Project.find(function(err, projects) {
        if (err)
          res.send(err)
        res.json(projects);
      });
    });
  });

  app.get('/api/projects/:project_id', function(req, res) {
    Project.findById(req.params.project_id, function(err, project) {
      if (err)
        res.send(err);

      res.json(project);
    });
  });

  app.put('/api/projects/:project_id', function(req, res) {
    Project.findById(req.params.project_id, function(err, project) {
      if (err)
        res.send(err);

      project.title = req.body.title;
      project.about = req.body.about;
      project.author = req.body.author;
      project.specs = req.body.specs;
      var path = req.body.img;
      project.img.push(path);

      project.save(function(err) {
        if (err)
          res.send(err)

        res.json({ message: 'Project updated!'})
      });
    });
  });

  app.get('/api/projects/:project_id/imgs', function(req, res) {
    Project.findById(req.params.project_id, function(err, project) {
      // project.img.splice(0, 2);
      if (err)
        res.send(err);

      res.json(project.img);
    });
  });

  app.delete('/api/projects/:project_id', /*authCheck,*/ function(req, res) {
    Project.remove({
      _id: req.params.project_id
    }, function(err, project) {
      if (err)
        res.send(err);

      Project.find(function(err, projects) {
        if (err)
          res.send(err)
        res.json(projects);
      });
    });
  });
};
