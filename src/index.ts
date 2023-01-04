import { app } from './webserver';
import {
  PORT
} from './config';
import logger from './logger';

app.listen(PORT, () => {
  logger.info(`Listen port ${PORT}`);
});
