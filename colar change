function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var range = e.range;
  var editedColumn = range.getColumn();
  var editedRow = range.getRow();
  var startRow = 21; // 範囲の開始行を指定
  var endRow = 352; // 範囲の終了行を指定
  var startColumn = 6; // 範囲の開始列を指定（F列）
  var endColumn = 46; // 範囲の終了列を指定（AJ列）
  var dateRow = 1; // 日付が入力されている行

  // 変更があったシートのセルから開始日付と終了日付を取得
  var startDate = new Date(sheet.getRange('C366').getValue()); // 開始日付を取得
  var endDate = new Date(sheet.getRange('E366').getValue()); // 終了日付を取得

  // 編集されたセルが指定された範囲内にあるかを確認
  if (editedRow >= startRow && editedRow <= endRow && editedColumn >= startColumn && editedColumn <= endColumn) {
    // 日付行を一度に取得して日付を判断する
    var dateValues = sheet.getRange(dateRow, startColumn, 1, endColumn - startColumn + 1).getValues()[0];
    var cellDate = new Date(dateValues[editedColumn - startColumn]);

    // セルの内容に基づいて色を変更
    var cellValue = range.getValue();
    var circleValues = ['◯', '○', '丸', 'まる', 'マル', '◎', '●'];
    var crossValues = ['✕', 'バツ', 'ばつ', '☓', '✗', '×', '✕', '✖'];
    var newBackground = null;

    if (circleValues.includes(cellValue)) {
      newBackground = '#e0f7fa'; // 薄い水色
    } else if (crossValues.includes(cellValue)) {
      newBackground = '#b7b7b7'; // 薄い灰色
    }

    // 指定された日付の範囲内の日付のセルが編集された場合、背景色を黄色に上書き
    if (cellDate >= startDate && cellDate <= endDate) {
      newBackground = 'yellow';
    }

    // 新しい背景色を設定
    if (newBackground) {
      range.setBackground(newBackground);
    } else {
      range.setBackground(null); // 色をリセット
    }
  }
}
