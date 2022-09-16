const express = require('express');
const { Nuxt, Builder } = require('nuxt');

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format

const logger = createLogger({
  level: 'info',
  exitOnError: false,
  format: combine(
      timestamp(),
      prettyPrint()
  ),
  transports: [
    new transports.File({ filename: `./logs/log.log` }),
  ],
});

logger.info("all ready")

const config = require('./nuxt.config.js');
const server = require('./server/io/index.js')


// Create new express app
const app = express();

// Listen to port 3000 or PORT env if provided
app.listen(process.env.PORT || 3000);

// Enable production mode
config.dev = false;

// Create instance of nuxt
const nuxt = new Nuxt(config);

// Add nuxt middleware
app.use(nuxt.render);

// Build on start
new Builder(nuxt).build().catch(err => {
  logger.error(err);
  process.exit(1);
});
