/******************************************************* 
*              SheetToObjectArray.gs                   *
*******************************************************/
const version = "1.2";
//chat gpt removed comments I made in the script flagging that there were sections that it rewrote, VERY sus
//I had chat gpt change how the script hadled cells with formulas as calculated references to rows were off by 1 otherwise
//I also had it change how the last column was figures as columns w/o a value in their first cell were being dropped

/*******************************************************
 * Output will be saved to user's Google Drive 
 * if exportToDrive is set true.
 *******************************************************/
const exportToDrive = true;

/*******************************************************
 * User comments to include in output
 *******************************************************/
const notes = ``;

function sheetToObjectArray() {

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const currentSheet = spreadsheet.getActiveSheet();

  const appUrl = spreadsheet.getUrl();
  const appId = spreadsheet.getId();
  const appSheetName = currentSheet.getName();
  const appName = spreadsheet.getName();

  let outputTitle =
    "Javascript Object Array and JSON data Extracted from Google Spreadsheet\n";

  let sheetDetails =
    `Spreadsheet url - ${appUrl}\n\n` +
    `Spreadsheet name - ${appName} (sheet name - ${appSheetName})\n`;

  let info =
    `Data extracted using SheetToObjectArray.gs (version ${version}), ` +
    `a Google Apps Script utility created by David Pritlove.\n` +
    `Github Repository: https://github.com/DaveChP/Sheets-to-JS-Object-Array\n\n`;

  // file name
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();

  const shortDate =
    `${currentYear}-${currentMonth}-${currentDay}`;

  const docName =
    "Vtuber_Export_" +
    appSheetName +
    ".js";

  /*******************************************************
   * HEADERS
   * Use displayed values so formulas export exactly
   * as displayed in the sheet.
   *******************************************************/
  const headData = currentSheet
    .getRange(1, 1, 1, currentSheet.getLastColumn())
    .getDisplayValues()[0];

  /*******************************************************
   * Determine how many columns have valid headers.
   * This preserves columns even if first data row
   * contains blank values.
   *******************************************************/
  let validColumnCount = headData.length;

  while (
    validColumnCount > 0 &&
    headData[validColumnCount - 1].toString().trim() === ""
  ) {
    validColumnCount--;
  }

  // trim headers to valid columns
  const trimmedHeaders =
    headData.slice(0, validColumnCount);

  // convert headers to camelCase
  const head =
    trimmedHeaders.map(x => camelize(x));

  /*******************************************************
   * DATA ROWS
   * Use getDisplayValues() so calculated/formatted
   * cell values export exactly as displayed.
   *******************************************************/
  const rows = currentSheet
    .getRange(
      2,
      1,
      currentSheet.getLastRow() - 1,
      validColumnCount
    )
    .getDisplayValues();

  /*******************************************************
   * BUILD OUTPUT
   *******************************************************/
  let jsObjectArray =
    "\n// javascript array of objects:\n" +
    "export const " +
    appSheetName +
    " = [";

  let json = "// JSON:\n[";

  for (let row = 0; row < rows.length; row++) {

    jsObjectArray += "\n  {";
    json += "\n  {";

    for (let col = 0; col < rows[row].length; col++) {

      const cellValue = rows[row][col];

      /*******************************************************
       * detect numeric displayed values
       *******************************************************/
      const isNumeric =
        cellValue !== "" &&
        !isNaN(cellValue) &&
        !isNaN(parseFloat(cellValue));

      if (isNumeric) {

        jsObjectArray +=
          `${head[col]}: ${cellValue}`;

        json +=
          `"${head[col]}": ${cellValue}`;

      } else {

        jsObjectArray +=
          `${head[col]}: "${clean(cellValue.toString())}"`;

        json +=
          `"${head[col]}": "${clean(cellValue.toString())}"`;
      }

      // last column
      if (col === rows[row].length - 1) {

        jsObjectArray += "},";
        json += "}";

      } else {

        jsObjectArray += ", ";
        json += ", ";
      }

    } // next column

    // last row
    if (row === rows.length - 1) {

      jsObjectArray += "\n];";
      json += "\n];";
    }

  } // next row

  /*******************************************************
   * LOG OUTPUT
   *******************************************************/
  Logger.log(
    date +
    "\n\n" +
    outputTitle +
    "\n\n" +
    sheetDetails +
    "\n\n" +
    notes +
    "\n\n" +
    jsObjectArray +
    "\n\n" +
    json +
    "\n\n" +
    info
  );

  /*******************************************************
   * SAVE TO GOOGLE DRIVE
   *******************************************************/
  if (exportToDrive) {

    DriveApp.createFile(
      docName,
      jsObjectArray,
      MimeType.PLAIN_TEXT
    );

  }

} // end sheetToObjectArray


/*******************************************************
 * Escape double quotes in strings
 *******************************************************/
function clean(val) {

  return val.replace(/"/g, '\\"');

}


/*******************************************************
 * Convert strings to camelCase
 *******************************************************/
function camelize(str) {

  return str.replace(
    /(?:^\w|[A-Z]|\b\w|\s+)/g,
    function(match, index) {

      if (+match === 0) return "";

      return index === 0
        ? match.toLowerCase()
        : match.toUpperCase();
    }
  );

} // end camelize