(function(window, undefined) {
  var dictionary = {
    "fec11fb2-a22a-4008-b8dc-b11af3797dbe": "FAQ",
    "9557944b-c655-424a-9f89-d26c823a6164": "Tourist Needs",
    "42aaf7f0-c267-42ea-822d-5dfde5f4913f": "Contact Us",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "049c39b6-a5cf-493c-bf18-8e15f658dd3d": "About the Island",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);