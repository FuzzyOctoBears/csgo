// define string.format
if (!String.format) {
  String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
      ? args[number]
      : match
      ;
  });
};
}

// parse get
var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
  var temp = parts[i].split("=");
  $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}

// defaults
var ip = "167.114.216.76";
var port = "28500";
var pw = "fuzz8b"

if (typeof $_GET['ip'] != 'undefined')
  ip = $_GET['ip'];

if (typeof $_GET['port'] != 'undefined')
  port = $_GET['port'];

if (typeof $_GET['pw'] != 'undefined')
  pw = $_GET['pw'];

console.log(ip)

var server_link_href = String.format("steam://connect/{0}:{1}/{2}", ip, port, pw)
var server_connect_text = String.format("connect {0}:{1}; password {2}", ip, port, pw)

document.getElementById("server_connect").setAttribute('href', server_link_href);
document.getElementById("connect_command").innerHTML  = server_connect_text;

// call link
if ($_GET['auto']!='no' ){
  window.setTimeout(function() {
    location.href = document.getElementsByTagName("a")[0].href;
}, 2000);
}
