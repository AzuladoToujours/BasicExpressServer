const { Router } = require('express');

const router = Router();


/**
 * References to the other routers of each resource
 */
const { testing } = require('./api/v1/components/hello-world/controller');

/**
 * Paths defined to each resource
 */
router.get('/', testing);

module.exports = router;
