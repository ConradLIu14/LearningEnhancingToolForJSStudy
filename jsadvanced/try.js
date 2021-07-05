const net = require('net');

const client = new net.Socket();

client.connect(8099, 'localhost', function() {

  console.log('CONNECTED TO: ' + "localhost" + ':' + 8099); // 建立连接后立即向服务器发送数据，服务器将收到这些数据
  
  client.write('I am client!');
  
  });

client.on('error', function(err){
    client.destroy()
  })
  
var the_data = null
client.on('data', function(data) {
  
  the_data = data.toString("utf-8")
  console.log(the_data)
  });
  
client.on('close', function() { console.log('Connection closed');}); //关闭回调
  
setTimeout(() => {
  // console.log(the_data)
  // console.log( typeof the_data)
  // var json = JSON.parse(the_data)
  // console.log(json)
  console.log(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Try2</title>
  </head>
  <body>
       ${the_data}
  </body>
  </html>`)
  
}, 100);



// console.log(the_data) // 异步的所以无法...