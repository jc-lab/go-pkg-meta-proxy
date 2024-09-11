import express from 'express';
import morgan from 'morgan';
import logger from './logger';
import {
  CONTEXT_PATH, PKG_IMPORT_TEMPLATE, PKG_SOURCE_TEMPLATE,
  PKG_VCS,
  IGNORE_PKGS,
} from './config';

const app = express();
const router = express.Router();

const morganFormat = ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
app.use(morgan(morganFormat, {stream: logger.writableStream})); // morgan 로그 설정

app.use(express.json());
app.use(CONTEXT_PATH, router);
app.get('/_/health', (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .send({
      status: 'OK'
    });
});

router.use((req: express.Request, res: express.Response) => {
  console.log(req.path);

  const packageFullPath = `${req.hostname}${req.path}`;
  const packageName = req.path.substring(1);

  const packageImport = PKG_IMPORT_TEMPLATE.replace(/\[PKG_NAME\]/g, packageName);
  const packageSource = PKG_SOURCE_TEMPLATE.replace(/\[PKG_NAME\]/g, packageName);

  if (IGNORE_PKGS.indexOf(packageName) >= 0) {
    res.sendStatus(404);
    return;
  }

  res
    .status(200)
    .send(`
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="go-import" content="${packageFullPath} ${PKG_VCS} ${packageImport}" />
<meta name="go-source" content="${packageFullPath} ${packageSource}" />
</head>
<body>
go get ${packageFullPath}
</body>
</html>
`);
});

export {
  app
};
