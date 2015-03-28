'use strict';

function JSONTool() {}

/*
 * Staticmethod to simplify and summary the JSON object.
 * @input: object.
 * @returns: object
 */
JSONTool.desc = function (json) {
  var keys = [],
    jsond = {},
    arrayKeys = [],
    i;
  if ('object' === typeof json) {
    keys = Object.keys(json);
  } else {
    return typeof json;
  }
  for (i = 0; i < keys.length; ++i) {
    if (json[keys[i]] instanceof Array) {
      jsond[keys[i]] = [JSONTool.desc(json[keys[i]][0])];
    } else {
      jsond[keys[i]] = JSONTool.desc(json[keys[i]]);
    }
  }
  return jsond;
};

/*
 * Staticmethod to converts a huge JSON string and returns a
 * ..summary in a  basic object form.
 * @input String.
 * @returns String.
 */
JSONTool.digest = function (input) {
  var json,
    simpleJSON;
  try {
    json = JSON.parse(input);
    simpleJSON = JSONTool.desc(json);
    return JSON.stringify(simpleJSON, null, '\t');
  } catch (e) {
    return 'Invalid input.';
  }
};

module.exports = JSONTool;
