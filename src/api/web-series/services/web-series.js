'use strict';

/**
 * web-series service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-series.web-series');
