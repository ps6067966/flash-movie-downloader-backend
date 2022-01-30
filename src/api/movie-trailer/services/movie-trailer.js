'use strict';

/**
 * movie-trailer service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-trailer.movie-trailer');
