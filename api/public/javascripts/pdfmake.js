var pdfMake = require("pdfmake/build/pdfmake");
var pdfFonts = require("pdfmake/build/vfs_fonts");
pdfMake.vfs = pdfFonts.pdfMake.vfs;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
var { window } = new JSDOM("");
var htmlToPdfMake = require("html-to-pdfmake");
pdfMake.fonts = {
  ipa: {
    normal: "ipaexm.ttf",
    bold: "ipaexm.ttf"
  }
};

module.exports = async function pdfmake(head, temp) {
  return new Promise(function (resolve, reject) {
    const html = htmlToPdfMake(temp, { window: window });
    const docDef = {
      pageSize: 'A4',
      header: function (currentPage, pageCount, pageSize) {
        // you can apply any logic and return any valid pdfmake element
        return [
          { text: head, alignment: 'right', margin: [20, 20] },
        ]
      },
      footer: function (currentPage, pageCount) {
        return [
          { text: currentPage.toString() + ' of ' + pageCount, alignment: 'center', margin: [40, 0] }
        ]
      },
      content: [html],
      defaultStyle: {
        font: "ipa"
      }
    };

    var pdfDocGenerator = pdfMake.createPdf(docDef);
    pdfDocGenerator.getBuffer(function (buffer) {
      try {
        fs.writeFileSync('サンプル.pdf', buffer);
        resolve('ファイル書き込み完了！')
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  });
}