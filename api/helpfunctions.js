generateValuelist = valueArray => {
  //INPUT: array of values
  //OUTPUT: string with format "(value1,value2,value3,....)"
  let sqlquery = "(";
  for (let i = 0; i < valueArray.length; i++) {
    if (typeof valueArray[i] === "string") {
      sqlquery += '"' + valueArray[i] + '"';
    } else {
      sqlquery += valueArray[i];
    }
    if (i < valueArray.length - 1) {
      sqlquery += ",";
    } else {
      sqlquery += ");";
    }
  }
  return sqlquery;
};
module.exports.generateValuelist = generateValuelist;
