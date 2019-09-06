const Posts = require('./posts')

const BaseAPI = (server) => {
    Posts(server)
}

module.exports = BaseAPI;