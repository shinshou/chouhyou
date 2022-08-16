exports.header = () => {
    const now = new Date();
    let html = '';
    html += `発行日: ${now.getFullYear()}/${('0' + (now.getMonth() + 1)).slice(-2)}/${('0' + now.getDate()).slice(-2)} `;
    return html;
}

exports.main = () => {
    let html = '';
    html += `
      <html>
          <head>
              <meta charset="utf8">
              <style>
                  html, body {
                      margin: 0;
                      padding: 0;
                      font-size: 14px;
                      background: rgb(50,50,50);
                      -webkit-print-color-adjust: exact;
                      box-sizing: border-box;
                  }
                  .page {
                      position: relative;
                      width: 172mm;
                      display: block;
                      background: white;
                      color: black;
                      page-break-after: auto;
                      margin: 50px;
                      overflow: hidden;
                  }
                  @media print {
                      html, body {
                          background: white;
                      }
                      .page {
                          margin: 0;
                          height: 100%;
                          width: 100%;
                      }
                  }
                  .main {
                      margin: 40px 40px 40px 70px;
                  }
                  table, td {
                      border: 1px solid gray;
                  }      
                  td {
                      padding: 5px;
                  }        
                  table {
                      border-collapse: collapse;
                      width: 100%;
                  }
                  .text-center {
                      text-align: center;
                  }
                  .mb-1 {
                      margin-bottom: 10px;
                  }  
                  .sub-title {
                      margin-top: 18px;
                      margin-bottom: 4px;
                      font-size: 1.2em;
                  }
                  .memo {
                      white-space: pre-wrap;
                  }
              </style>
          </head>
          <body>
              <div class="page">
                  <div class="main">
                      <h2 class="text-center">注文書</h2>
                      <div class="mb-1">
                          <div>
                              <div class="company-name">FooBarBaz株式会社　御中</div>
                              <div>
                                  <small>下記の通り、注文致します</small>
                              </div>
                          </div>
                      </div>
          
                      <table class="sender-info">
                          <tbody>
                              <tr>
                                  <td colspan="2">
                                      Raspberry Pi 4B スターターキット　×4<br>
                                      Pi4対応 USB C 電源アダプタ　×4<br>
                                      32GB マイクロSDカード　×10<br>
                                  </td>
                              </tr>                                
                              <tr>
                                  <td>納品希望日時</td>
                                  <td>
                                      <div class="delivery-date">なるはやでお願いします。</div>
                                  </td>
                              </tr>                
                              <tr>
                                  <td>納品場所</td>
                                  <td>
                                      〒123-4567<br>
                                      ***********************************************
                                  </td>
                              </tr>       
                              <tr>
                                  <td>連絡先</td>
                                  <td>TEL: 12-3456-7890</td>
                              </tr>                                                             
                          </tbody>
                      </table>
          
                      <div class="sub-title">◆備考</div>
                      <table class="memo">
                          <tbody>
                              <tr>
                                  <td>備考欄です。</td>
                              </tr>
                          </tbody>            
                      </table>
                  </div>
              </div>
          </body>
      </html>    
  `;
    return html;
}