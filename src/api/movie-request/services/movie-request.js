'use strict';

/**
 * movie-request service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-request.movie-request');
