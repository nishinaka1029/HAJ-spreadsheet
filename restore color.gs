function changeCellColors() {
  var sheetName = '2024年6月シフト希望'; // ここでシート名を指定
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  if (sheet) {
    var startRow = 21; // 範囲の開始行を指定
    var endRow = 352; // 範囲の終了行を指定
    var startColumn = 6; // 範囲の開始列を指定（F列）
    var endColumn = 36; // 範囲の終了列を指定（AT列）

    var circleValues = ['◯', '○', '丸', 'まる', 'マル', '◎', '●'];
    var crossValues = ['✕', 'バツ', 'ばつ', '☓', '✗', '×', '✕', '✖'];

    var range = sheet.getRange(startRow, startColumn, endRow - startRow + 1, endColumn - startColumn + 1);
    var values = range.getValues();
    var backgrounds = range.getBackgrounds();

    for (var row = 0; row < values.length; row++) {
      for (var col = 0; col < values[row].length; col++) {
        var cellValue = values[row][col];

        if (circleValues.includes(cellValue)) {
          backgrounds[row][col] = '#e0f7fa'; // 薄い水色（画像の色に対応）
        } else if (crossValues.includes(cellValue)) {
          backgrounds[row][col] = '#b7b7b7'; // 薄い灰色（画像の色に対応）
        } else {
          backgrounds[row][col] = null; // 色をリセット
        }
      }
    }

    range.setBackgrounds(backgrounds);
  } else {
    Logger.log('シートが見つかりません：' + sheetName);
  }
}
