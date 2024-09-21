import { join } from 'path';
import { v2 } from 'docker-compose';
import isPortReachable from 'is-port-reachable';

module.exports = async function () {
  const dockerComposeVersion = await v2.version();

  console.log('dockerComposeVersion', dockerComposeVersion);

  process.env.TENANT_DB_HOST = 'localhost';
  process.env.TENANT_DB_PORT = '25532';
  process.env.TENANT_DB_USER = 'test';
  process.env.TENANT_DB_PASSWORD = 'test';
  process.env.TENANT_DB_DATABASE = 'test';
  process.env.TENANT_DB_SCHEMA = 'public';

  const isDBReachable = await isPortReachable(20000);

  if (!isDBReachable) {
    await v2.upAll({
      cwd: join(__dirname),
      log: true,
    });
  }
};
