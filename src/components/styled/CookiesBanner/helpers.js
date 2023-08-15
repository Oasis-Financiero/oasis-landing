const cookies = {
  set: (key, value, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    let v = encodeURIComponent(value);
    document.cookie = key + "=" + v + ";" + expires + ";path=/";
  },

  get: (key) => {
    var name = key + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },

  delete: (key) => {
    var d = new Date();
    d.setTime(d.getTime() + -10 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = key + "=; " + expires + ";path=/";
  },

  deleteImmediately: (key) => {
    var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = key + "=; " + expires + ";path=/";
  },
};

export default cookies