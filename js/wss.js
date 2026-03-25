const https = require('https');
const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');

// 根据项目的路径导入生成的证书文件
const privateKey = fs.readFileSync('/Users/vincent.wen/Library/Application Support/mkcert/rootCA-key.pem');
const certificate = fs.readFileSync('/Users/vincent.wen/Library/Application Support/mkcert/rootCA.pem');
const credentials = {
  key: privateKey,
  cert: certificate
};

// 创建 HTTP 与 HTTPS 服务器
const httpServer = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("This is a  http server!\n");
});

const httpsServer = https.createServer(credentials, (req, res) => {
  res.writeHead(200);
  res.end("This is a  https server!\n");
});

// 分别设置 HTTP HTTPS 的访问端口号
const PORT = 3030;
const SSLPORT = 3031;

// 创建 HTTP 服务器
httpServer.listen(PORT, function () {
  console.log('HTTP Server is running on: http://localhost:%s', PORT);
});

// 创建 HTTPS 服务器
httpsServer.listen(SSLPORT, function () {
  console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

const wss = new WebSocket.Server(
  {
    server: httpsServer
  },
  () => {
    console.log('socket start');
  }
);

// 建立连接
wss.on('connection', ws => {
  // 接收数据
  ws.on('message', msg => {
    // 广播
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });
});
