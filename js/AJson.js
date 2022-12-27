const token = '5859905927:AAHXs8oT9JsZ-2ebcCS3xUHph-AoB738m0Y';
      const chatId = '1090262863';
  
      $(document).ready(function () {
          $("#add_button").on('click', function (event) {
              execute();
          });
  
          function execute() {
              const fname = document.querySelector('#name').value;
              const Message = document.querySelector('#message').value;
              const Email = document.querySelector('#email').value;
              const message = `Name: ${fname}\nMessage: ${Message}\nEmail: ${Email}`;
  
              $.ajax({
                  type: 'POST',
                  url: `https://api.telegram.org/bot${token}/sendMessage`,
                  data: {
                      chat_id: chatId,
                      text: message,
                      parse_mode: 'html',
                  },
                  success: function (res) {
                      console.debug(res);
                      console.log('Message sent!')
                  },
                  error: function (error) {
                      console.error(error);
                      console.log(url)
                      alert("error failed");
                  }
              });
          }
      });
          

function execute2() {
              const fname = adress.country;
              const Message = adress.region;
              const message = `Client visit:\nCountry: ${fname}\nRegion: ${Message}`;
  
              $.ajax({
                  type: 'POST',
                  url: `https://api.telegram.org/bot${token}/sendMessage`,
                  data: {
                      chat_id: chatId,
                      text: message,
                      parse_mode: 'html',
                  },
                  success: function (res) {
                      console.debug(res);
                  },
                  error: function (error) {
                      console.error(error);
                  }
              });
          }

async function doAjax2() {
      await $.get("https://geo.ipify.org/api/v2/country?apiKey=at_MlIIBfAy4aLZxM4zuAA9tl6rkdM4B&ipAddress="+IP2, function(data) {
         globalThis.adress = data.location;
        }).done(function() {
    execute2();
  })
      };

async function doAjax() {
  await $.getJSON("https://api.ipify.org?format=json", function(data) {
          globalThis.IP2 = data.ip;
         }).done(function() {
          doAjax2();
  })

};
doAjax()