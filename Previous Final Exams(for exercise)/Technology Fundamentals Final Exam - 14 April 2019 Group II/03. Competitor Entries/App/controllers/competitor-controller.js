const Competitor = require('../models/Competitor');

module.exports = {
    getIndex: function (req, res) {
        getAll().then((competitors) => {
            return res.render('index', {competitors});
        });
    },
    getCreate: function (req, res) {
        return res.render('create');
    },
    postCreate: function (req, res) {
        let competitorInfo = req.body;
        addCompetitor(competitorInfo).then(() => {
            return res.redirect('/');
        });
    },
    getEdit: function (req, res) {
        let id = req.params.id;
        findByID(id).then((competitor) => {
            return res.render('edit', {competitor});
        });
    },
    postEdit: function (req, res) {
        let id = req.params.id;
        let newCompetitor = req.body;

        editCompetitor(id, newCompetitor).then(() => {
            return res.redirect('/');
        });
    },
    getDelete: function (req, res) {
        let id = req.params.id;
        findByID(id).then((competitor) => {
            return res.render('delete', {competitor});
        });
    },
    postDelete: function (req, res) {
        let id = req.params.id;

        deleteCompetitor(id).then(() => {
            return res.redirect('/');
        });
    }
};

function getAll() {
    return Competitor.find({});
}

function addCompetitor(competitorInfo) {
    return Competitor.create(competitorInfo);
}

function findByID(id) {
    return Competitor.findById(id);
}

function editCompetitor(id, newCompetitor) {
    return Competitor.findByIdAndUpdate(id, newCompetitor);
}

function deleteCompetitor(id) {
    return Competitor.findByIdAndRemove(id);
}