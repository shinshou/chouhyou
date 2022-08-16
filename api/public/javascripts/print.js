module.exports = function PDF() {
  PDFDocument = require('pdfkit');
  doc = new PDFDocument({ size: 'A4' })
  doc.pipe(fs.createWriteStream('打設結果記録表.pdf'))
  doc.fontSize(15)
  doc.font('./fonts/ipaexm.ttf')
    .text('打設結果記録表', {
      align: 'center'
    })

  doc.fontSize(10)
  doc.fillColor("black")

  doc
    .moveDown()
    .text('工事名：' + 'こうじめいしょう１', 50)

  doc
    .moveDown()
    .text('施工日：' + '2022年07月07日', 50)
    .moveDown(0.2)
    .text('号機：' + '01', 50)
    .moveDown(0.2)
    .text('杭番号：' + 'W3-7', 50)

  // 表枠の作成（500×100）
  doc
    .rect(50, 170, 500, 60)
    .lineWidth(1)
    .stroke('#b4b4b4')

  doc.fontSize(10)

  // 表内の項目
  doc.text('局番', 52, 175)
    .stroke()

  doc.text('打設管理基準', 287.5, 175)
    .stroke()

  // 横線
  doc.moveTo(50, 190)
    .lineTo(550, 190)
    .stroke('#b4b4b4')

  // 縦線
  doc.moveTo(75, 170)
    .lineTo(75, 190)
    .stroke('#b4b4b4')

  // 表内の項目
  doc.text('0', 54, 195)
    .stroke()

  doc.text('空打部', 287.5, 195)
    .stroke()

  // 横線
  doc.moveTo(50, 210)
    .lineTo(550, 210)
    .stroke('#b4b4b4')

  // 縦線
  doc.moveTo(75, 190)
    .lineTo(75, 210)
    .stroke('#b4b4b4')

  // 表内の項目
  doc.text('1', 54, 215)
    .stroke()

  doc.text('低圧吐出量', 109.375, 215)
    .stroke()

  doc.text('125.0(l/m)以上', 228.125, 215)
    .stroke()

  doc.text('交差噴出流量', 346.875, 215)
    .stroke()

  doc.text('100.0(l/m)以上', 465.625, 215, {
    lineBreak: false
  })
    .stroke()

  // 縦線
  doc.moveTo(75, 210)
    .lineTo(75, 230)
    .stroke('#b4b4b4')

  doc.moveTo(193.75, 210)
    .lineTo(193.75, 230)
    .stroke('#b4b4b4')

  doc.moveTo(312.5, 210)
    .lineTo(312.5, 230)
    .stroke('#b4b4b4')

  doc.moveTo(431.25, 210)
    .lineTo(431.25, 230)
    .stroke('#b4b4b4')


  // 表枠の作成（500×300）
  doc
    .rect(50, 250, 500, 300)
    .lineWidth(1)
    .stroke('#b4b4b4')

  // 表内の項目
  doc.text('層', 54, 270)
    .stroke()

  doc.text('深度', 134.375, 260)
    .stroke()

  doc.text('(m)', 134.375, 280)
    .stroke()

  doc.text('経過時間', 228.125, 255)
    .stroke()

  doc.text('貫入', 198.4375, 270)
    .stroke()

  doc.text('引抜', 257.8125, 270)
    .stroke()

  doc.text('(分)', 198.4375, 280)
    .stroke()

  doc.text('(分)', 257.8125, 280)
    .stroke()

  doc.text('スラリー流量(l/m)', 346.875, 255)
    .stroke()

  doc.text('No.1', 346.875, 260)
    .stroke()

  doc.text('No.2', 346.875, 260)
    .stroke()

  doc.text('低圧吐出', 346.875, 275)
    .stroke()

  doc.text('交差噴流', 346.875, 275)
    .stroke()

  doc.text('低圧吐出', 346.875, 275)
    .stroke()

  doc.text('交差噴流', 346.875, 275)
    .stroke()


  //Finalize PDF file
  doc.end()

}