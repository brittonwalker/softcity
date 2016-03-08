var Project = require('./models/project.js');

module.exports = function(app) {

  app.get('/api/projects', function(req, res) {
    Project.find(function(err, projects) {
      if (err)
        res.send(err)

      res.json(projects);
    });
  });

  app.post('/api/projects', function(req, res) {
    Project.create({
      title: req.body.title,
      about: req.body.about,
      author: req.body.author,
      specs: req.body.specs,
      imgUrl: req.body.imgUrl
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
      project.imgUrl = req.body.imgUrl;

      project.save(function(err) {
        if (err)
          res.send(err)

        res.json({ message: 'Project updated!'})
      });
    });
  });

  app.delete('/api/projects/:project_id', function(req, res) {
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
