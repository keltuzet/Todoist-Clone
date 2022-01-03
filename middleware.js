const db = require('./db.json');

let curID = Math.max(...db.todos.map(item => item.comments).reduce((arr, currItem) => arr.concat(currItem), []).map(comment => comment.id)) + 1;
function renderID() {
  return curID++;
}

module.exports = (req, res, next) => {
  if (req.url.includes('todos')) {
    if (req.method === 'POST' || req.method === 'PUT') {
      if (req.body.comments) {
        req.body.comments = req.body.comments.map((item) => {
          if (!(typeof item.id === 'number')) {
            item.id = renderID();
          }
          return item;
        })
      }
    }
  }

  next()
}
