module.exports = {
  getBands(req, res) {
    let db = req.app.get("db");
    let bands = [];
    // db.query(
    //   `
    //   select * from bands;
    //   select * from airplanes;
    // `
    // ).then((...args) => {
    //   console.log("args: ", args);
    // });
    if (req.query.genre) {
      db.bands.find({ genre: req.query.genre }).then(bandsResponse => {
        bands = [...bands, ...bandsResponse];
        // return res.status(200).json(bands);
      });
    } else if (req.query.name) {
      // handle request based on name
    } else {
      db.getBands().then(bands => {
        console.log("bands: ", bands);
        return res.status(200).json(bands);
      });
    }
  },
  postBand(req, res) {
    const { name, year_formed, genre } = req.body;
    const db = req.app.get("db");
    db.query(
      `insert into bands (name, year_formed, genre) values ($1, $2, $3);
      select * from bands;
      `,
      [name, year_formed, genre]
    ).then(bands => {
      return res.status(200).json(bands);
    });
  },
  putBand(req, res) {
    const { name, year_formed, genre } = req.body;
    const db = req.app.get("db");
    if (year_formed) {
      db.putBand([year_formed, req.params.id]).then(bands => {
        res.status(200).json(bands);
      });
    }
  },
  deleteBand(req, res) {
    const db = req.app.get("db");
    db.deleteBand(req.params.id).then(bands => res.status(200).json(bands));
  }
};
