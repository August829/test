/*
 * BeiJing Certificate Authority(BJCA) 2018-06-21
 * @author caolili
 *
 * Core function implementations
 * Version Code: miniCore 2.3.2
 */

function anysignCommentCore(a, b, c, d) {
  function f() {
    if (I) {
      var a = document.createElement("canvas"),
        b = a.getContext("2d"),
        d = window.devicePixelRatio ? window.devicePixelRatio : 1;
      a.width = I.width / d;
      a.height = I.height / d;
      var g = 1;
      c.mass_word_width / c.mass_word_height <= a.width / a.height
        ? c.mass_word_width <= a.width && (g = c.mass_word_width / a.width)
        : c.singleHeight <= a.height && (g = c.mass_word_height / a.height);
      a.width *= g;
      a.height *= g;
      b.scale((1 / d) * g, (1 / d) * g);
      d = document.createElement("canvas");
      d.width = I.width;
      d.height = I.height;
      d.getContext("2d").putImageData(I, 0, 0);
      b.drawImage(d, 0, 0);
      return a.toDataURL();
    }
    return null;
  }

  function e() {
    document.getElementById("comment_dialog").style.display = "none";
    r = w = 9999;
    g = q = 0;
    document.body.parentNode.style.overflow = "scroll";
    document.getElementById("comment_sign");
    var a = document.getElementById("comment_title");
    a.innerHTML = "";
    a.style.color = "black";
    document.getElementById("signTitle").innerHTML = "";
    for (a = 0; a < J.length; a++) G.removeChild(J[a]);
    c = null;
  }

  function h() {
    function b(a) {
      a < e
        ? (f >= c.mass_words_in_single_line &&
            ((u += c.mass_word_height), (f = 0)),
          g.drawImage(
            J[a],
            c.mass_word_width * f,
            u,
            c.mass_word_width,
            c.mass_word_height
          ),
          f++,
          b(a + 1))
        : L.push(d.toDataURL("image/png", 1));
    }

    var d = document.createElement("canvas"),
      g = d.getContext("2d");
    N = c.mass_word_width * c.mass_words_in_single_line;
    O = c.mass_word_height * (a.length / c.mass_words_in_single_line + 1);
    d.width = N;
    d.height = O;
    g.rect(0, 0, d.width, d.height);
    g.fillStyle = "#fff";
    g.fill();
    var f = 0,
      u = 0,
      e = v.length;
    b(0);
  }

  var k = 480 <= window.innerWidth ? 15 : 10,
    l = !1,
    p = !1,
    w = 9999,
    r = 9999,
    q = 0,
    g = 0,
    m = 0,
    u = 0,
    y = [],
    E = [],
    B = [],
    F = 0,
    H = "",
    K = 0,
    A,
    x,
    I,
    n = 0,
    J = [],
    C = null,
    Q = 0,
    M = 0,
    N,
    O,
    P = !1,
    v = a.replace(/(.)(?=[^$])/g, "$1,").split(",");
  A = document.getElementById("comment_canvas");
  var D = document.getElementById("comment_title"),
    G = document.getElementById("signImage"),
    S = document.getElementById("comment_ok"),
    T = document.getElementById("comment_back"),
    U = document.getElementById("comment_cancel");
  x = A.getContext("2d");
  var V = document.getElementById("signTitle");
  c.isShowBgText && (V.innerHTML = v[n]);
  D.innerHTML =
    v[0].replace(
      v[0],
      '\x3cfont color\x3d"' +
        c.currentEditBarTextColor +
        '"\x3e$\x26\x3c/font\x3e'
    ) + a.substring(1, v.length);
  x.strokeStyle = c.penColor;
  x.lineWidth = k;
  x.lineCap = "round";
  x.lineJoin = "round";
  x.shadowBlur = 5;
  S.onclick = function() {
    p ||
      (n != v.length
        ? custom_alert("\u8bf7\u5b8c\u6210\u7b7e\u540d", "\u786e\u8ba4")
        : (h(),
          signResCallback &&
            signResCallback(
              c.cid,
              L[0].substring(22, L[0].length),
              L[0].substring(22, L[0].length),
              H,
              K,
              N,
              O
            ),
          e()));
  };
  T.onclick = function() {
    if (!p)
      if (0 >= n)
        alert(
          "\u5df2\u79fb\u9664\u5b8c\uff0c\u8bf7\u91cd\u65b0\u8fdb\u884c\u7b7e\u540d\uff01"
        );
      else {
        var d = document.getElementById("img" + n);
        document.getElementById("signImage").removeChild(d);
        n--;
        M--;
        d = document.getElementById("signTitle");
        c.isShowBgText && (d.innerHTML = v[n]);
        0 == n ? (M = 0) : 0 > M - 1 && ((M = b), 0 < Q && Q--);
        d = document.getElementById("comment_title");
        d.innerHTML = a;
        d.style.color = "black";
        d.innerHTML =
          a.substring(0, n) +
          v[n].replace(
            v[n],
            '\x3cfont color\x3d"' +
              c.currentEditBarTextColor +
              '"\x3e$\x26\x3c/font\x3e'
          ) +
          a.substring(n + 1, v.length);
      }
  };
  U.onclick = function() {
    document.documentElement.style.overflow = "auto";
    signResCallback && signResCallback(c.cid, null, null, 0);
    e();
  };
  document.body.onselectstart = document.body.oncontextmenu = function() {
    return !1;
  };
  "ontouchstart" in document.documentElement
    ? ((A.ontouchstart = function(a) {
        null != C && clearInterval(C);
        p = l = !0;
      }),
      (A.ontouchmove = function(a) {
        if (l) {
          var c = JQuery_Capable.offset(a.target);
          "undefined" !== typeof a.targetTouches
            ? ((m = Math.floor(a.targetTouches[0].pageX - c.left)),
              (u = Math.floor(a.targetTouches[0].pageY - c.top)))
            : ((m = Math.floor(a.pageX - c.left)),
              (u = Math.floor(a.pageY - c.top)));
          c = a.timeStamp;
          0 !== K || isNaN(c) || (F = c);
          0 < m &&
            u <= A.height &&
            ((H = isNaN(c)
              ? H + (m + "," + u + "," + k + ",0\n")
              : H + (m + "," + u + "," + k + "," + (c - F) + "\n")),
            (K += 1),
            m > q && (q = m),
            m < w && (w = m),
            u > g && (g = u),
            u < r && (r = u),
            y.push({
              x: m,
              y: u,
            }),
            R(),
            E.push({ x: m, y: u }),
            0 < m && 0 < u && B.push(m, u));
          preventDefault(a);
        }
      }),
      (A.ontouchend = function(b) {
        if (l) {
          b = b.timeStamp;
          H = isNaN(b) ? H + "0,0,-1,0\n" : H + ("0,0,-1," + (b - F) + "\n");
          K += 1;
          B.push("-1", "0");
          var u = document.getElementById("comment_canvas");
          u.getContext("2d").drawImage(A, 0, 0);
          var e = document.getElementById("signTitle");
          n >= v.length
            ? (alert("\u5df2\u7b7e\u7f72\u5b8c\u6bd5\uff01"),
              (e.innerHTML = ""),
              (p = !1),
              x.clearRect(0, 0, A.width, A.height))
            : P &&
              ((P = !1),
              (C = setInterval(function() {
                B.push("-1", "-1");
                if (c.isdistinguish && !checkText(v[n]))
                  showProgress(
                    "\u6b63\u5728\u8bc6\u522b\uff0c\u8bf7\u7a0d\u5019\u3002\u3002\u3002"
                  ),
                    new OCRObj(c.ocrCapture).recognition(B, v[n], function(
                      b,
                      m
                    ) {
                      closeWindow();
                      if (0 == b) {
                        if (m) {
                          n++;
                          n == v.length
                            ? ((e.innerHTML = ""),
                              (D.innerHTML =
                                "\u5df2\u7b7e\u7f72\u5b8c\u6bd5\uff01"),
                              (D.style.color = "Red"),
                              clearInterval(C))
                            : (c.isShowBgText && (e.innerHTML = v[n]),
                              (D.innerHTML = a),
                              (D.innerHTML =
                                a.substring(0, n) +
                                v[n].replace(
                                  v[n],
                                  '\x3cfont color\x3d"' +
                                    c.currentEditBarTextColor +
                                    '"\x3e$\x26\x3c/font\x3e'
                                ) +
                                a.substring(n + 1, v.length)));
                          var h = document.createElement("img");
                          h.id = "img" + n;
                          h.width = c.mass_word_width;
                          h.height = c.mass_word_height;
                          if (checkText(v[n - 1]))
                            h.src = u.toDataURL("image/png");
                          else {
                            var y = q - w,
                              k = g - r,
                              l = (q + w) / 2,
                              p = (g + r) / 2,
                              y =
                                20 > y && 20 > k
                                  ? c.mass_word_width
                                  : y > k
                                  ? y / 2
                                  : k / 2;
                            I = A.getContext("2d").getImageData(
                              l - y - 10,
                              p - y - 10,
                              2 * (y + 10),
                              2 * (y + 10)
                            );
                            l = f();
                            h.src = l;
                          }
                          J[n - 1] = h;
                          G.appendChild(h);
                          G.scrollTop = G.scrollHeight;
                          x.clearRect(0, 0, A.width, A.height);
                          r = w = 9999;
                          g = q = 0;
                          B = [];
                          null != C && clearInterval(C);
                        }
                      } else
                        x.clearRect(0, 0, A.width, A.height),
                          (r = w = 9999),
                          (g = q = 0),
                          (B = []),
                          clearInterval(C);
                      null == d
                        ? console.log("the identify callback is not definition")
                        : "\u8bf7\u6c42\u8d85\u65f6" != b && d(b);
                    });
                else {
                  n++;
                  B = [];
                  n == v.length
                    ? ((e.innerHTML = ""),
                      (D.innerHTML = "\u5df2\u7b7e\u7f72\u5b8c\u6bd5\uff01"),
                      (D.style.color = "Red"),
                      clearInterval(C))
                    : (c.isShowBgText && (e.innerHTML = v[n]),
                      (D.innerHTML = a),
                      (D.innerHTML =
                        a.substring(0, n) +
                        v[n].replace(
                          v[n],
                          '\x3cfont color\x3d"' +
                            c.currentEditBarTextColor +
                            '"\x3e$\x26\x3c/font\x3e'
                        ) +
                        a.substring(n + 1, v.length)));
                  var b = document.createElement("img");
                  b.id = "img" + n;
                  b.width = c.mass_word_width;
                  b.height = c.mass_word_height;
                  if (checkText(v[n - 1])) b.src = u.toDataURL("image/png");
                  else {
                    var m = q - w,
                      h = g - r,
                      y = (q + w) / 2,
                      k = (g + r) / 2,
                      m =
                        20 > m && 20 > h
                          ? c.mass_word_width
                          : m > h
                          ? m / 2
                          : h / 2;
                    I = A.getContext("2d").getImageData(
                      y - m - 10,
                      k - m - 10,
                      2 * (m + 10),
                      2 * (m + 10)
                    );
                    y = f();
                    b.src = y;
                  }
                  J[n - 1] = b;
                  G.appendChild(b);
                  G.scrollTop = G.scrollHeight;
                  x.clearRect(0, 0, A.width, A.height);
                  r = w = 9999;
                  g = q = 0;
                  y = null;
                }
                p = !1;
                clearInterval(C);
              }, 1e3)));
        }
        l = !1;
        y = [];
        E = [];
      }),
      (A.ontouchcancel = A.ontouchend))
    : ((A.onmousedown = function(a) {
        null != C && clearInterval(C);
        p = l = !0;
      }),
      (A.onmousemove = function(a) {
        if (l) {
          var c = JQuery_Capable.offset(a.target),
            b = document.body.scrollTop | document.documentElement.scrollTop,
            d = document.body.scrollLeft | document.documentElement.scrollLeft;
          "undefined" !== typeof a.targetTouches
            ? ((m = Math.floor(a.targetTouches[0].clientX - c.left)),
              (u = Math.floor(a.targetTouches[0].clientY - c.top)))
            : ((m = Math.floor(a.clientX - c.left)),
              (u = Math.floor(a.clientY - c.top)));
          c = a.timeStamp;
          0 !== K || isNaN(c) || (F = c);
          0 < m &&
            ((H = isNaN(c)
              ? H + (m + "," + u + "," + k + ",0\n")
              : H + (m + "," + u + "," + k + "," + (c - F) + "\n")),
            (K += 1),
            (u += b),
            (m += d),
            m > q && (q = m),
            m < w && (w = m),
            u > g && (g = u),
            u < r && (r = u),
            y.push({
              x: m,
              y: u,
            }),
            R(),
            E.push({ x: m, y: u }),
            0 < m && 0 < u && B.push(m, u));
          preventDefault(a);
        }
      }),
      (A.onmouseup = function(b) {
        if (l) {
          l = !1;
          var e = JQuery_Capable.offset(b.target);
          "undefined" !== typeof b.targetTouches
            ? ((m = Math.floor(b.targetTouches[0].clientX - e.left)),
              (u = Math.floor(b.targetTouches[0].clientY - e.top)))
            : ((m = Math.floor(b.clientX - e.left)),
              (u = Math.floor(b.clientY - e.top)));
          b = b.timeStamp;
          H = isNaN(b) ? H + "0,0,-1,0\n" : H + ("0,0,-1," + (b - F) + "\n");
          K += 1;
          B.push("-1", "0");
          var h = document.getElementById("comment_canvas");
          h.getContext("2d").drawImage(A, 0, 0);
          var k = document.getElementById("signTitle");
          n >= v.length
            ? (alert("\u5df2\u7b7e\u7f72\u5b8c\u6bd5\uff01"),
              (k.innerHTML = ""),
              x.clearRect(0, 0, A.width, A.height),
              (p = !1))
            : 10 < E.length &&
              (C = setInterval(function() {
                B.push("-1", "-1");
                if (c.isdistinguish && !checkText(v[n]))
                  showProgress(
                    "\u6b63\u5728\u8bc6\u522b\uff0c\u8bf7\u7a0d\u5019\u3002\u3002\u3002"
                  ),
                    new OCRObj(c.ocrCapture).recognition(B, v[n], function(
                      b,
                      u
                    ) {
                      closeWindow();
                      if (0 == b) {
                        if (u) {
                          n++;
                          n == v.length
                            ? ((k.innerHTML = ""),
                              (D.innerHTML =
                                "\u5df2\u7b7e\u7f72\u5b8c\u6bd5\uff01"),
                              (D.style.color = "Red"),
                              clearInterval(C))
                            : (c.isShowBgText && (k.innerHTML = v[n]),
                              (D.innerHTML = a),
                              (D.innerHTML =
                                a.substring(0, n) +
                                v[n].replace(
                                  v[n],
                                  '\x3cfont color\x3d"' +
                                    c.currentEditBarTextColor +
                                    '"\x3e$\x26\x3c/font\x3e'
                                ) +
                                a.substring(n + 1, v.length)));
                          var e = document.createElement("img");
                          e.id = "img" + n;
                          e.width = c.mass_word_width;
                          e.height = c.mass_word_height;
                          if (checkText(v[n - 1]))
                            e.src = h.toDataURL("image/png");
                          else {
                            var m = q - w,
                              y = g - r,
                              l = (q + w) / 2,
                              p = (g + r) / 2,
                              m =
                                20 > m && 20 > y
                                  ? c.mass_word_width
                                  : m > y
                                  ? m / 2
                                  : y / 2;
                            I = A.getContext("2d").getImageData(
                              l - m - 10,
                              p - m - 10,
                              2 * (m + 10),
                              2 * (m + 10)
                            );
                            l = f();
                            e.src = l;
                          }
                          J[n - 1] = e;
                          G.appendChild(e);
                          G.scrollTop = G.scrollHeight;
                          x.clearRect(0, 0, A.width, A.height);
                          r = w = 9999;
                          g = q = 0;
                          B = [];
                          null != C && clearInterval(C);
                        }
                      } else
                        x.clearRect(0, 0, A.width, A.height),
                          (r = w = 9999),
                          (g = q = 0),
                          (B = []),
                          clearInterval(C);
                      null == d
                        ? console.log("the identify callback is not definition")
                        : "\u8bf7\u6c42\u8d85\u65f6" != b && d(b);
                    });
                else {
                  n++;
                  B = [];
                  n == v.length
                    ? ((k.innerHTML = ""),
                      (D.innerHTML = "\u5df2\u7b7e\u7f72\u5b8c\u6bd5\uff01"),
                      (D.style.color = "Red"),
                      clearInterval(C))
                    : (c.isShowBgText && (k.innerHTML = v[n]),
                      (D.innerHTML = a),
                      (D.innerHTML =
                        a.substring(0, n) +
                        v[n].replace(
                          v[n],
                          '\x3cfont color\x3d"' +
                            c.currentEditBarTextColor +
                            '"\x3e$\x26\x3c/font\x3e'
                        ) +
                        a.substring(n + 1, v.length)));
                  var b = document.createElement("img");
                  b.id = "img" + n;
                  b.width = c.mass_word_width;
                  b.height = c.mass_word_height;
                  if (checkText(v[n - 1])) b.src = h.toDataURL("image/png");
                  else {
                    var u = q - w,
                      e = g - r,
                      m = (q + w) / 2,
                      y = (g + r) / 2,
                      u =
                        20 > u && 20 > e
                          ? c.mass_word_width
                          : u > e
                          ? u / 2
                          : e / 2;
                    I = A.getContext("2d").getImageData(
                      m - u - 10,
                      y - u - 10,
                      2 * (u + 10),
                      2 * (u + 10)
                    );
                    m = f();
                    b.src = m;
                  }
                  J[n - 1] = b;
                  G.appendChild(b);
                  G.scrollTop = G.scrollHeight;
                  x.clearRect(0, 0, A.width, A.height);
                  r = w = 9999;
                  g = q = 0;
                  m = null;
                }
                p = !1;
                clearInterval(C);
              }, 1e3));
          l = !1;
          y = [];
          E = [];
        }
      }),
      (A.onmouseout = A.onmouseup));
  var R = function() {
      if (3 > y.length) {
        var a = y[0];
        x.beginPath();
        x.strokeStyle = c.penColor;
        x.fillStyle = c.penColor;
        x.arc(a.x, a.y, x.lineWidth / 2, 0, 2 * Math.PI, !0);
        x.fill();
        x.closePath();
      } else {
        x.clearRect(0, 0, x.width, x.height);
        x.beginPath();
        x.strokeStyle = c.penColor;
        x.fillStyle = c.penColor;
        x.moveTo(y[0].x, y[0].y);
        for (a = 1; a < y.length - 2; a++)
          x.quadraticCurveTo(
            y[a].x,
            y[a].y,
            (y[a].x + y[a + 1].x) / 2,
            (y[a].y + y[a + 1].y) / 2
          );
        x.stroke();
      }
      P = !0;
    },
    L = [];
  window.addEventListener("resize", function() {
    null != C && clearInterval(C);
    var b = document.getElementById("signTitle");
    D.innerHTML =
      a.substring(0, n) +
      v[n].replace(
        v[n],
        '\x3cfont color\x3d"' +
          c.currentEditBarTextColor +
          '"\x3e$\x26\x3c/font\x3e'
      ) +
      a.substring(n + 1, v.length);
    c.isShowBgText && (b.innerHTML = n >= v.length ? "" : v[n]);
    x.strokeStyle = c.penColor;
    x.lineWidth = k;
    x.lineCap = "round";
    x.lineJoin = "round";
    x.shadowBlur = 5;
  });
  window.addEventListener("orientationchange", function() {
    null != C && clearInterval(C);
    document.getElementById("signTitle");
    D.innerHTML =
      a.substring(0, n) +
      v[n].replace(
        v[n],
        '\x3cfont color\x3d"' +
          c.currentEditBarTextColor +
          '"\x3e$\x26\x3c/font\x3e'
      ) +
      a.substring(n + 1, v.length);
    x.strokeStyle = c.penColor;
    x.lineWidth = k;
    x.lineCap = "round";
    x.lineJoin = "round";
    x.shadowBlur = 5;
  });
}
var dbits,
  canary = 0xdeadbeefcafe,
  j_lm = 15715070 == (canary & 16777215);
function BigInteger(a, b, c) {
  null != a &&
    ("number" == typeof a
      ? this.fromNumber(a, b, c)
      : null == b && "string" != typeof a
      ? this.fromString(a, 256)
      : this.fromString(a, b));
}
function nbi() {
  return new BigInteger(null);
}
function am1(a, b, c, d, f, e) {
  for (; 0 <= --e; ) {
    var h = b * this[a++] + c[d] + f;
    f = Math.floor(h / 67108864);
    c[d++] = h & 67108863;
  }
  return f;
}
function am2(a, b, c, d, f, e) {
  var h = b & 32767;
  for (b >>= 15; 0 <= --e; ) {
    var k = this[a] & 32767,
      l = this[a++] >> 15,
      p = b * k + l * h,
      k = h * k + ((p & 32767) << 15) + c[d] + (f & 1073741823);
    f = (k >>> 30) + (p >>> 15) + b * l + (f >>> 30);
    c[d++] = k & 1073741823;
  }
  return f;
}
function am3(a, b, c, d, f, e) {
  var h = b & 16383;
  for (b >>= 14; 0 <= --e; ) {
    var k = this[a] & 16383,
      l = this[a++] >> 14,
      p = b * k + l * h,
      k = h * k + ((p & 16383) << 14) + c[d] + f;
    f = (k >> 28) + (p >> 14) + b * l;
    c[d++] = k & 268435455;
  }
  return f;
}
j_lm && "Microsoft Internet Explorer" == navigator.appName
  ? ((BigInteger.prototype.am = am2), (dbits = 30))
  : j_lm && "Netscape" != navigator.appName
  ? ((BigInteger.prototype.am = am1), (dbits = 26))
  : ((BigInteger.prototype.am = am3), (dbits = 28));
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz",
  BI_RC = [],
  rr,
  vv;
rr = 48;
for (vv = 0; 9 >= vv; ++vv) BI_RC[rr++] = vv;
rr = 97;
for (vv = 10; 36 > vv; ++vv) BI_RC[rr++] = vv;
rr = 65;
for (vv = 10; 36 > vv; ++vv) BI_RC[rr++] = vv;
function int2char(a) {
  return BI_RM.charAt(a);
}
function intAt(a, b) {
  var c = BI_RC[a.charCodeAt(b)];
  return null == c ? -1 : c;
}
function bnpCopyTo(a) {
  for (var b = this.t - 1; 0 <= b; --b) a[b] = this[b];
  a.t = this.t;
  a.s = this.s;
}
function bnpFromInt(a) {
  this.t = 1;
  this.s = 0 > a ? -1 : 0;
  0 < a ? (this[0] = a) : -1 > a ? (this[0] = a + this.DV) : (this.t = 0);
}
function nbv(a) {
  var b = nbi();
  b.fromInt(a);
  return b;
}
function bnpFromString(a, b) {
  var c;
  if (16 == b) c = 4;
  else if (8 == b) c = 3;
  else if (256 == b) c = 8;
  else if (2 == b) c = 1;
  else if (32 == b) c = 5;
  else if (4 == b) c = 2;
  else {
    this.fromRadix(a, b);
    return;
  }
  this.s = this.t = 0;
  for (var d = a.length, f = !1, e = 0; 0 <= --d; ) {
    var h = 8 == c ? a[d] & 255 : intAt(a, d);
    0 > h
      ? "-" == a.charAt(d) && (f = !0)
      : ((f = !1),
        0 == e
          ? (this[this.t++] = h)
          : e + c > this.DB
          ? ((this[this.t - 1] |= (h & ((1 << (this.DB - e)) - 1)) << e),
            (this[this.t++] = h >> (this.DB - e)))
          : (this[this.t - 1] |= h << e),
        (e += c),
        e >= this.DB && (e -= this.DB));
  }
  8 == c &&
    0 != (a[0] & 128) &&
    ((this.s = -1),
    0 < e && (this[this.t - 1] |= ((1 << (this.DB - e)) - 1) << e));
  this.clamp();
  f && BigInteger.ZERO.subTo(this, this);
}
function bnpClamp() {
  for (var a = this.s & this.DM; 0 < this.t && this[this.t - 1] == a; )
    --this.t;
}
function bnToString(a) {
  if (0 > this.s) return "-" + this.negate().toString(a);
  if (16 == a) a = 4;
  else if (8 == a) a = 3;
  else if (2 == a) a = 1;
  else if (32 == a) a = 5;
  else if (4 == a) a = 2;
  else return this.toRadix(a);
  var b = (1 << a) - 1,
    c,
    d = !1,
    f = "",
    e = this.t,
    h = this.DB - ((e * this.DB) % a);
  if (0 < e--)
    for (
      h < this.DB && 0 < (c = this[e] >> h) && ((d = !0), (f = int2char(c)));
      0 <= e;

    )
      h < a
        ? ((c = (this[e] & ((1 << h) - 1)) << (a - h)),
          (c |= this[--e] >> (h += this.DB - a)))
        : ((c = (this[e] >> (h -= a)) & b), 0 >= h && ((h += this.DB), --e)),
        0 < c && (d = !0),
        d && (f += int2char(c));
  return d ? f : "0";
}
function bnNegate() {
  var a = nbi();
  BigInteger.ZERO.subTo(this, a);
  return a;
}
function bnAbs() {
  return 0 > this.s ? this.negate() : this;
}
function bnCompareTo(a) {
  var b = this.s - a.s;
  if (0 != b) return b;
  var c = this.t,
    b = c - a.t;
  if (0 != b) return 0 > this.s ? -b : b;
  for (; 0 <= --c; ) if (0 != (b = this[c] - a[c])) return b;
  return 0;
}
function nbits(a) {
  var b = 1,
    c;
  0 != (c = a >>> 16) && ((a = c), (b += 16));
  0 != (c = a >> 8) && ((a = c), (b += 8));
  0 != (c = a >> 4) && ((a = c), (b += 4));
  0 != (c = a >> 2) && ((a = c), (b += 2));
  0 != a >> 1 && (b += 1);
  return b;
}
function bnBitLength() {
  return 0 >= this.t
    ? 0
    : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM));
}
function bnpDLShiftTo(a, b) {
  var c;
  for (c = this.t - 1; 0 <= c; --c) b[c + a] = this[c];
  for (c = a - 1; 0 <= c; --c) b[c] = 0;
  b.t = this.t + a;
  b.s = this.s;
}
function bnpDRShiftTo(a, b) {
  for (var c = a; c < this.t; ++c) b[c - a] = this[c];
  b.t = Math.max(this.t - a, 0);
  b.s = this.s;
}
function bnpLShiftTo(a, b) {
  var c = a % this.DB,
    d = this.DB - c,
    f = (1 << d) - 1,
    e = Math.floor(a / this.DB),
    h = (this.s << c) & this.DM,
    k;
  for (k = this.t - 1; 0 <= k; --k)
    (b[k + e + 1] = (this[k] >> d) | h), (h = (this[k] & f) << c);
  for (k = e - 1; 0 <= k; --k) b[k] = 0;
  b[e] = h;
  b.t = this.t + e + 1;
  b.s = this.s;
  b.clamp();
}
function bnpRShiftTo(a, b) {
  b.s = this.s;
  var c = Math.floor(a / this.DB);
  if (c >= this.t) b.t = 0;
  else {
    var d = a % this.DB,
      f = this.DB - d,
      e = (1 << d) - 1;
    b[0] = this[c] >> d;
    for (var h = c + 1; h < this.t; ++h)
      (b[h - c - 1] |= (this[h] & e) << f), (b[h - c] = this[h] >> d);
    0 < d && (b[this.t - c - 1] |= (this.s & e) << f);
    b.t = this.t - c;
    b.clamp();
  }
}
function bnpSubTo(a, b) {
  for (var c = 0, d = 0, f = Math.min(a.t, this.t); c < f; )
    (d += this[c] - a[c]), (b[c++] = d & this.DM), (d >>= this.DB);
  if (a.t < this.t) {
    for (d -= a.s; c < this.t; )
      (d += this[c]), (b[c++] = d & this.DM), (d >>= this.DB);
    d += this.s;
  } else {
    for (d += this.s; c < a.t; )
      (d -= a[c]), (b[c++] = d & this.DM), (d >>= this.DB);
    d -= a.s;
  }
  b.s = 0 > d ? -1 : 0;
  -1 > d ? (b[c++] = this.DV + d) : 0 < d && (b[c++] = d);
  b.t = c;
  b.clamp();
}
function bnpMultiplyTo(a, b) {
  var c = this.abs(),
    d = a.abs(),
    f = c.t;
  for (b.t = f + d.t; 0 <= --f; ) b[f] = 0;
  for (f = 0; f < d.t; ++f) b[f + c.t] = c.am(0, d[f], b, f, 0, c.t);
  b.s = 0;
  b.clamp();
  this.s != a.s && BigInteger.ZERO.subTo(b, b);
}
function bnpSquareTo(a) {
  for (var b = this.abs(), c = (a.t = 2 * b.t); 0 <= --c; ) a[c] = 0;
  for (c = 0; c < b.t - 1; ++c) {
    var d = b.am(c, b[c], a, 2 * c, 0, 1);
    (a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >=
      b.DV && ((a[c + b.t] -= b.DV), (a[c + b.t + 1] = 1));
  }
  0 < a.t && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1));
  a.s = 0;
  a.clamp();
}
function bnpDivRemTo(a, b, c) {
  var d = a.abs();
  if (!(0 >= d.t)) {
    var f = this.abs();
    if (f.t < d.t) null != b && b.fromInt(0), null != c && this.copyTo(c);
    else {
      null == c && (c = nbi());
      var e = nbi(),
        h = this.s;
      a = a.s;
      var k = this.DB - nbits(d[d.t - 1]);
      0 < k ? (d.lShiftTo(k, e), f.lShiftTo(k, c)) : (d.copyTo(e), f.copyTo(c));
      d = e.t;
      f = e[d - 1];
      if (0 != f) {
        var l = f * (1 << this.F1) + (1 < d ? e[d - 2] >> this.F2 : 0),
          p = this.FV / l,
          l = (1 << this.F1) / l,
          w = 1 << this.F2,
          r = c.t,
          q = r - d,
          g = null == b ? nbi() : b;
        e.dlShiftTo(q, g);
        0 <= c.compareTo(g) && ((c[c.t++] = 1), c.subTo(g, c));
        BigInteger.ONE.dlShiftTo(d, g);
        for (g.subTo(e, e); e.t < d; ) e[e.t++] = 0;
        for (; 0 <= --q; ) {
          var m =
            c[--r] == f ? this.DM : Math.floor(c[r] * p + (c[r - 1] + w) * l);
          if ((c[r] += e.am(0, m, c, q, 0, d)) < m)
            for (e.dlShiftTo(q, g), c.subTo(g, c); c[r] < --m; ) c.subTo(g, c);
        }
        null != b && (c.drShiftTo(d, b), h != a && BigInteger.ZERO.subTo(b, b));
        c.t = d;
        c.clamp();
        0 < k && c.rShiftTo(k, c);
        0 > h && BigInteger.ZERO.subTo(c, c);
      }
    }
  }
}
function bnMod(a) {
  var b = nbi();
  this.abs().divRemTo(a, null, b);
  0 > this.s && 0 < b.compareTo(BigInteger.ZERO) && a.subTo(b, b);
  return b;
}
function Classic(a) {
  this.m = a;
}
function cConvert(a) {
  return 0 > a.s || 0 <= a.compareTo(this.m) ? a.mod(this.m) : a;
}
function cRevert(a) {
  return a;
}
function cReduce(a) {
  a.divRemTo(this.m, null, a);
}
function cMulTo(a, b, c) {
  a.multiplyTo(b, c);
  this.reduce(c);
}
function cSqrTo(a, b) {
  a.squareTo(b);
  this.reduce(b);
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
function bnpInvDigit() {
  if (1 > this.t) return 0;
  var a = this[0];
  if (0 == (a & 1)) return 0;
  var b = a & 3,
    b = (b * (2 - (a & 15) * b)) & 15,
    b = (b * (2 - (a & 255) * b)) & 255,
    b = (b * (2 - (((a & 65535) * b) & 65535))) & 65535,
    b = (b * (2 - ((a * b) % this.DV))) % this.DV;
  return 0 < b ? this.DV - b : -b;
}
function Montgomery(a) {
  this.m = a;
  this.mp = a.invDigit();
  this.mpl = this.mp & 32767;
  this.mph = this.mp >> 15;
  this.um = (1 << (a.DB - 15)) - 1;
  this.mt2 = 2 * a.t;
}
function montConvert(a) {
  var b = nbi();
  a.abs().dlShiftTo(this.m.t, b);
  b.divRemTo(this.m, null, b);
  0 > a.s && 0 < b.compareTo(BigInteger.ZERO) && this.m.subTo(b, b);
  return b;
}
function montRevert(a) {
  var b = nbi();
  a.copyTo(b);
  this.reduce(b);
  return b;
}
function montReduce(a) {
  for (; a.t <= this.mt2; ) a[a.t++] = 0;
  for (var b = 0; b < this.m.t; ++b) {
    var c = a[b] & 32767,
      d =
        (c * this.mpl +
          (((c * this.mph + (a[b] >> 15) * this.mpl) & this.um) << 15)) &
        a.DM,
      c = b + this.m.t;
    for (a[c] += this.m.am(0, d, a, b, 0, this.m.t); a[c] >= a.DV; )
      (a[c] -= a.DV), a[++c]++;
  }
  a.clamp();
  a.drShiftTo(this.m.t, a);
  0 <= a.compareTo(this.m) && a.subTo(this.m, a);
}
function montSqrTo(a, b) {
  a.squareTo(b);
  this.reduce(b);
}
function montMulTo(a, b, c) {
  a.multiplyTo(b, c);
  this.reduce(c);
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
function bnpIsEven() {
  return 0 == (0 < this.t ? this[0] & 1 : this.s);
}
function bnpExp(a, b) {
  if (4294967295 < a || 1 > a) return BigInteger.ONE;
  var c = nbi(),
    d = nbi(),
    f = b.convert(this),
    e = nbits(a) - 1;
  for (f.copyTo(c); 0 <= --e; )
    if ((b.sqrTo(c, d), 0 < (a & (1 << e)))) b.mulTo(d, f, c);
    else
      var h = c,
        c = d,
        d = h;
  return b.revert(c);
}
function bnModPowInt(a, b) {
  var c;
  c = 256 > a || b.isEven() ? new Classic(b) : new Montgomery(b);
  return this.exp(a, c);
}
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
function Arcfour() {
  this.j = this.i = 0;
  this.S = [];
}
function ARC4init(a) {
  var b, c, d;
  for (b = 0; 256 > b; ++b) this.S[b] = b;
  for (b = c = 0; 256 > b; ++b)
    (c = (c + this.S[b] + a[b % a.length]) & 255),
      (d = this.S[b]),
      (this.S[b] = this.S[c]),
      (this.S[c] = d);
  this.j = this.i = 0;
}
function ARC4next() {
  var a;
  this.i = (this.i + 1) & 255;
  this.j = (this.j + this.S[this.i]) & 255;
  a = this.S[this.i];
  this.S[this.i] = this.S[this.j];
  this.S[this.j] = a;
  return this.S[(a + this.S[this.i]) & 255];
}
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;
function prng_newstate() {
  return new Arcfour();
}
var rng_psize = 256,
  rng_state,
  rng_pool,
  rng_pptr;
function rng_seed_int(a) {
  rng_pool[rng_pptr++] ^= a & 255;
  rng_pool[rng_pptr++] ^= (a >> 8) & 255;
  rng_pool[rng_pptr++] ^= (a >> 16) & 255;
  rng_pool[rng_pptr++] ^= (a >> 24) & 255;
  rng_pptr >= rng_psize && (rng_pptr -= rng_psize);
}
function rng_seed_time() {
  rng_seed_int(new Date().getTime());
}
if (null == rng_pool) {
  rng_pool = [];
  rng_pptr = 0;
  var t;
  if (window.crypto && window.crypto.getRandomValues) {
    var ua = new Uint8Array(32);
    window.crypto.getRandomValues(ua);
    for (t = 0; 32 > t; ++t) rng_pool[rng_pptr++] = ua[t];
  }
  if (
    "Netscape" == navigator.appName &&
    "5" > navigator.appVersion &&
    window.crypto
  ) {
    var z = window.crypto.random(32);
    for (t = 0; t < z.length; ++t) rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
  }
  for (; rng_pptr < rng_psize; )
    (t = Math.floor(65536 * Math.random())),
      (rng_pool[rng_pptr++] = t >>> 8),
      (rng_pool[rng_pptr++] = t & 255);
  rng_pptr = 0;
  rng_seed_time();
}
function rng_get_byte() {
  if (null == rng_state) {
    rng_seed_time();
    rng_state = prng_newstate();
    rng_state.init(rng_pool);
    for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
      rng_pool[rng_pptr] = 0;
    rng_pptr = 0;
  }
  return rng_state.next();
}
function rng_get_bytes(a) {
  var b;
  for (b = 0; b < a.length; ++b) a[b] = rng_get_byte();
}
function SecureRandom() {}
SecureRandom.prototype.nextBytes = rng_get_bytes;
function parseBigInt(a, b) {
  return new BigInteger(a, b);
}
function linebrk(a, b) {
  for (var c = "", d = 0; d + b < a.length; )
    (c += a.substring(d, d + b) + "\n"), (d += b);
  return c + a.substring(d, a.length);
}
function byte2Hex(a) {
  return 16 > a ? "0" + a.toString(16) : a.toString(16);
}
function pkcs1pad2(a, b) {
  if (b < a.length + 11) return alert("Message too long for RSA"), null;
  for (var c = [], d = a.length - 1; 0 <= d && 0 < b; ) {
    var f = a.charCodeAt(d--);
    128 > f
      ? (c[--b] = f)
      : 127 < f && 2048 > f
      ? ((c[--b] = (f & 63) | 128), (c[--b] = (f >> 6) | 192))
      : ((c[--b] = (f & 63) | 128),
        (c[--b] = ((f >> 6) & 63) | 128),
        (c[--b] = (f >> 12) | 224));
  }
  c[--b] = 0;
  d = new SecureRandom();
  for (f = []; 2 < b; ) {
    for (f[0] = 0; 0 == f[0]; ) d.nextBytes(f);
    c[--b] = f[0];
  }
  c[--b] = 2;
  c[--b] = 0;
  return new BigInteger(c);
}
function pkcs1pad2Uint8(a, b) {
  if (b < a.length + 11) return alert("Message too long for RSA"), null;
  for (var c = [], d = a.length - 1; 0 <= d && 0 < b; ) {
    var f = a[d--];
    c[--b] = f;
  }
  c[--b] = 0;
  d = new SecureRandom();
  for (f = []; 2 < b; ) {
    for (f[0] = 0; 0 == f[0]; ) d.nextBytes(f);
    c[--b] = f[0];
  }
  c[--b] = 2;
  c[--b] = 0;
  return new BigInteger(c);
}
function RSAKey() {
  this.n = null;
  this.e = 0;
  this.coeff = this.dmq1 = this.dmp1 = this.q = this.p = this.d = null;
}
function RSASetPublic(a, b) {
  null != a && null != b && 0 < a.length && 0 < b.length
    ? ((this.n = parseBigInt(a, 16)), (this.e = parseInt(b, 16)))
    : alert("Invalid RSA public key");
}
function RSADoPublic(a) {
  return a.modPowInt(this.e, this.n);
}
function RSAEncrypt(a) {
  a = pkcs1pad2(a, (this.n.bitLength() + 7) >> 3);
  if (null == a) return null;
  a = this.doPublic(a);
  if (null == a) return null;
  a = a.toString(16);
  return 0 == (a.length & 1) ? a : "0" + a;
}
function RSAUint8ArrayEncrypt(a) {
  a = pkcs1pad2Uint8(a, (this.n.bitLength() + 7) >> 3);
  if (null == a) return null;
  a = this.doPublic(a);
  if (null == a) return null;
  a = a.toString(16);
  return 0 == (a.length & 1) ? a : "0" + a;
}
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;
RSAKey.prototype.encryptUint8 = RSAUint8ArrayEncrypt;
function aesEncrypt(a, b) {
  var c = CryptoJS.enc.Hex.parse(b);
  return CryptoJS.AES.encrypt(a, c);
}
function tripleDesEncrypt(a, b) {
  var c = CryptoJS.enc.Hex.parse(b);
  return CryptoJS.TripleDES.encrypt(a, c, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
}
function tripleDesDecrypt(a, b) {
  var c = CryptoJS.enc.Hex.parse(b);
  return CryptoJS.TripleDES.decrypt(a, c, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
}
function sha1DigestBase64(a) {
  return Base64.encodeUint8Array(
    anysign.hex.hexStrToUint8Array(CryptoJS.SHA1(a) + "")
  );
}
function sha1Digest(a) {
  return CryptoJS.SHA1(a);
}
function md5Digest(a) {
  return CryptoJS.MD5(a);
}
var pubN =
    "9d0eff07c47a27a898c18fc89fd25b21898885b5a97054e81684e22bf13cd8725e7ff03ba2f8c1ad8c998952a30a65ff61ecbdb042661b8813e7a936de3474a51eb8a05458f7b357d95bb4f55741380403c1148108dfab4399af45d351deebaabffff552c10c6cd1599bc87642d37af5d474138a37fb60cdb7dcb3dbb9872a29",
  pubE = "10001",
  encCertSN = "‎980990000019ecf6a";
function rsaPubkeyEnc(a, b, c) {
  var d = new RSAKey();
  d.setPublic(a, b);
  a = d.encrypt(c);
  a = anysign.hex.hexStrToUint8Array(a);
  return Base64.encodeUint8Array(a);
}
function rsaPubkeyUint8Enc(a, b, c) {
  var d = new RSAKey();
  d.setPublic(a, b);
  a = d.encryptUint8(c);
  a = anysign.hex.hexStrToUint8Array(a);
  return Base64.encodeUint8Array(a);
}
function rsaPubkeyEncByDefault(a) {
  return rsaPubkeyEnc(pubN, pubE, a);
}
function rsaPubkeyUint8EncByDefault(a) {
  return rsaPubkeyUint8Enc(pubN, pubE, a);
}
var anysign = anysign && {
    logger: {
      openLog: !1,
      e: function(a) {
        anysign.logger.openLog && console.log("anysign error:" + a);
      },
      w: function(a) {
        anysign.logger.openLog && console.log("anysign warning:" + a);
      },
    },
  },
  Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",
    encodeUint8Array: function(a) {
      for (var b = 0, c = a.length, d = "", f, e = ""; b < c; ) {
        f = a.subarray(b, Math.min(b + 32768, c));
        for (var h = 0, k = f.length; h < k; h++)
          e += String.fromCharCode(f[h]);
        d += e;
        b += 32768;
        e = "";
      }
      return btoa(d);
    },
    decode: function(a) {
      var b = 0.75 * a.length,
        c = a.length,
        d = 0,
        f,
        e,
        h,
        k;
      "\x3d" === a[a.length - 1] && (b--, "\x3d" === a[a.length - 2] && b--);
      for (
        var l = new ArrayBuffer(b), p = new Uint8Array(l), b = 0;
        b < c;
        b += 4
      )
        (f = lookup[a.charCodeAt(b)]),
          (e = lookup[a.charCodeAt(b + 1)]),
          (h = lookup[a.charCodeAt(b + 2)]),
          (k = lookup[a.charCodeAt(b + 3)]),
          (p[d++] = (f << 2) | (e >> 4)),
          (p[d++] = ((e & 15) << 4) | (h >> 2)),
          (p[d++] = ((h & 3) << 6) | (k & 63));
      return l;
    },
    encode: function(a) {
      var b = "",
        c,
        d,
        f,
        e,
        h,
        k,
        l = 0;
      for (a = Base64._utf8_encode(a); l < a.length; )
        (c = a.charCodeAt(l++)),
          (d = a.charCodeAt(l++)),
          (f = a.charCodeAt(l++)),
          (e = c >> 2),
          (c = ((c & 3) << 4) | (d >> 4)),
          (h = ((d & 15) << 2) | (f >> 6)),
          (k = f & 63),
          isNaN(d) ? (h = k = 64) : isNaN(f) && (k = 64),
          (b =
            b +
            this._keyStr.charAt(e) +
            this._keyStr.charAt(c) +
            this._keyStr.charAt(h) +
            this._keyStr.charAt(k));
      return b;
    },
    _utf8_encode: function(a) {
      a = a.replace(/\r\n/g, "\n");
      for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        128 > d
          ? (b += String.fromCharCode(d))
          : (127 < d && 2048 > d
              ? (b += String.fromCharCode((d >> 6) | 192))
              : ((b += String.fromCharCode((d >> 12) | 224)),
                (b += String.fromCharCode(((d >> 6) & 63) | 128))),
            (b += String.fromCharCode((d & 63) | 128)));
      }
      return b;
    },
    _utf8_decode: function(a) {
      for (var b = "", c = 0, d, f, e; c < a.length; )
        (d = a.charCodeAt(c)),
          128 > d
            ? ((b += String.fromCharCode(d)), c++)
            : 191 < d && 224 > d
            ? ((f = a.charCodeAt(c + 1)),
              (b += String.fromCharCode(((d & 31) << 6) | (f & 63))),
              (c += 2))
            : ((f = a.charCodeAt(c + 1)),
              (e = a.charCodeAt(c + 2)),
              (b += String.fromCharCode(
                ((d & 15) << 12) | ((f & 63) << 6) | (e & 63)
              )),
              (c += 3));
      return b;
    },
  },
  anysign = anysign || {
    binary: {
      uint32ArrayToUint8Array: function(a) {
        if (!a) return null;
        for (
          var b = new Uint8Array(4 * a.length), c, d = 0, f = a.length;
          d < f;
          d++
        )
          (c = d << 2),
            (b[c] = (a[d] >> 24) & 255),
            (b[c + 1] = (a[d] >> 16) & 255),
            (b[c + 2] = (a[d] >> 8) & 255),
            (b[c + 3] = a[d] & 255);
        return b;
      },
    },
    hex: {
      hexEncodeArray: "0123456789abcdef".split(""),
      uint8ArrayToHexStr: function(a) {
        if (!a) return null;
        for (var b = "", c = 0; c < a.length; c++)
          var d = a[c],
            b = b + this.hexEncodeArray[d >>> 4],
            b = b + this.hexEncodeArray[d & 15];
        return b;
      },
      hexStrToUint8Array: function(a) {
        if (!a || 0 != a.length % 2) return null;
        for (var b = [], c = 0; c < a.length; c += 2)
          b.push(parseInt("0x" + a.substr(c, 2), 16));
        return new Uint8Array(b);
      },
      hexStrToUint8Str: function(a) {
        if (!a || 0 != a.length % 2) return null;
        for (var b = "", c = 0; c < a.length; c += 2)
          b += String.fromCharCode(parseInt("0x" + a.substr(c, 2), 16));
        return decodeURIComponent(escape(b));
      },
    },
    charset: {
      strToUtf8ArrayUint8: function(a) {
        a = unescape(encodeURIComponent(a));
        for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++)
          b[c] = a.charCodeAt(c);
        return b;
      },
      utf8ArrayUint8ToStr: function(a) {
        for (var b = "", c = 0; c < a.length; c++)
          b += String.fromCharCode(a[c]);
        return decodeURIComponent(escape(b));
      },
      toUtf8str: function(a) {
        return unescape(encodeURIComponent(a));
      },
      uint8ArrayAscIIToStr: function(a) {
        return String.fromCharCode.apply(null, a);
      },
      strToUint8ArrayAscII: function(a) {
        for (var b = new Uint8Array(a.length), c = 0, d = a.length; c < d; ++c)
          b[c] = a.charCodeAt(c);
        return b;
      },
    },
    zip: {
      compressToB64: function(a) {
        a = new Zlib.Deflate(a).compress();
        if (a instanceof Array) {
          for (
            var b = new Uint8Array(a.length), c = 0, d = b.length;
            c < d;
            ++c
          )
            b[c] = a[c];
          a = b;
        }
        return Base64.encodeUint8Array(a);
      },
    },
    json: {
      stringify: function(a) {
        return JSON.stringify(a);
      },
      stringToObj: function(a) {
        return JSON.parse(a);
      },
    },
    digest: {
      crc32: function(a) {
        var b = [];
        if (window.crcTable) b = window.crcTable;
        else {
          for (var c, d = 0; 256 > d; d++) {
            c = d;
            for (var f = 0; 8 > f; f++)
              c = c & 1 ? 3988292384 ^ (c >>> 1) : c >>> 1;
            b[d] = c;
          }
          window.crcTable = b;
        }
        c = -1;
        for (d = 0; d < a.length; d++)
          c = (c >>> 8) ^ b[(c ^ a.charCodeAt(d)) & 255];
        return (c ^ -1) >>> 0;
      },
    },
  };
(function(a) {
  function b() {
    for (var c = !0, b, d = w, g = p.length; d < g && c; )
      if (((b = p[d]), void 0 !== b && null !== b)) {
        if ("string" === typeof b) {
          var e = k.cloneNode(!1);
          e.text = b;
          l.parentNode.insertBefore(e, l);
        } else b.apply(a);
        b = d;
        p[b] = null;
        w = b + 1;
        d += 1;
      } else c = !1;
  }

  function c() {
    if (p.length) {
      var b = p.pop(),
        d;
      "string" === typeof b
        ? ((d = k.cloneNode(!0)),
          (d.type = "text/javascript"),
          (d.async = !0),
          (d.src = b),
          (d.onload = d.onreadystatechange = function() {
            if (!d.readyState || /loaded|complete/.test(d.readyState))
              (d.onload = d.onreadystatechange = null), (d = void 0), c();
          }),
          l.parentNode.insertBefore(d, l))
        : (b.apply(a), c());
    }
  }

  function d(a, c) {
    return function() {
      p[c] = a.responseText;
      b();
      a = void 0;
    };
  }

  function f() {
    var a = arguments.length,
      c,
      g;
    for (c = 0; c < a; c += 1)
      "string" === typeof arguments[c]
        ? ((g = r(arguments[c])),
          (g.onload = d(g, p.length)),
          (p[p.length] = null),
          g.send())
        : ((p[p.length] = arguments[c]), b());
  }

  function e() {
    p.push(Array.prototype.slice.call(arguments, 0).reverse());
    c();
  }

  var h = a.document,
    k = h.createElement("script"),
    l = h.getElementsByTagName("script")[0],
    p = [],
    w = 0,
    r,
    q,
    g;
  a.XMLHttpRequest &&
    ((q = new a.XMLHttpRequest()),
    "withCredentials" in q
      ? (g = function(c) {
          q = new a.XMLHttpRequest();
          q.open("get", c, !0);
          return q;
        })
      : a.XDomainRequest &&
        (g = function(c) {
          q = new a.XDomainRequest();
          q.open("get", c);
          return q;
        }));
  r = g;
  a.JcorsLoader = { load: r ? f : e };
})(window);
function ismobile(a) {
  a = navigator.userAgent;
  if (
    /AppleWebKit.*Mobile/i.test(navigator.userAgent) ||
    /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(
      navigator.userAgent
    )
  ) {
    if (0 > window.location.href.indexOf("?mobile"))
      try {
        return /iPhone|mac|iPod|iPad/i.test(navigator.userAgent) ? "0" : "1";
      } catch (b) {}
  } else return -1 < a.indexOf("iPad") ? "0" : "1";
}
function IsPC() {
  for (
    var a = navigator.userAgent,
      b = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"),
      c = !0,
      d = 0;
    d < b.length;
    d++
  )
    if (0 < a.indexOf(b[d])) {
      c = !1;
      break;
    }
  return c;
}
function getWindowWidth() {
  var a = 630;
  document.body && document.body.offsetWidth && (a = document.body.offsetWidth);
  "CSS1Compat" == document.compatMode &&
    document.documentElement &&
    document.documentElement.offsetWidth &&
    (a = document.documentElement.offsetWidth);
  window.innerWidth && window.innerHeight && (a = window.innerWidth);
  return 0.99 * a;
}
function getWindowHeight() {
  var a = 460;
  document.body &&
    document.body.offsetWidth &&
    (a = document.body.offsetHeight);
  "CSS1Compat" == document.compatMode &&
    document.documentElement &&
    document.documentElement.offsetWidth &&
    (a = document.documentElement.offsetHeight);
  window.innerWidth && window.innerHeight && (a = window.innerHeight);
  IsPC() && (a *= 0.9);
  return 0.99 * a;
}
function isSignOrCom(a) {
  return (20 <= a && 29 >= a) || (200 <= a && 299 >= a)
    ? !0
    : (30 <= a && 39 >= a) || (300 <= a && 399 >= a)
    ? !1
    : null;
}
function checkText(a) {
  if (
    /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/.test(
      a
    )
  )
    return !0;
  for (
    var b = ", . ' \" ; : ? /  \\  [ ] { } \x3c \x3e | ( ) \u00b7".split(" "),
      c = 0;
    c < b.length;
    c++
  )
    if (a == b[c]) return !0;
  return !1;
}
function hideURLbar() {
  window.scrollTo(0, 1);
}
var AnySignRoot = function() {
    this.Version = "4.7";
    this.EncKey = this.EncCertSN = null;
    this.TermSrc = "PAD";
    this.EncData = this.Digest = null;
  },
  Digest = function() {
    this.Value = this.Alg = null;
  },
  FormInfo = function() {
    this.WOHash = this.WONo = null;
    this.IsUnit = this.IsSync = !1;
    this.EncAlg = "RSA";
    this.Channel = this.FlowID = null;
    this.USignArray = [];
    this.DataArray = [];
    this.CachetArray = [];
    this.ExtInfo = null;
  },
  SaveFormInfo = function() {
    this.Channel = this.WOHash = this.WONo = null;
    this.EncAlg = "RSA";
    this.USignObjs = [];
    this.USignConfigs = [];
    this.DataObjs = [];
    this.DataConfigs = [];
    this.CachetArray = [];
  },
  ExtInfo = function() {},
  PlainData = function() {
    this.CertOID = this.P10Data = null;
  },
  P10Data = function() {
    this.IDNumber = this.IDType = this.Dn = this.Hashalg = this.P10SignValue = this.ValueType = this.Value = this.Hash = this.RawHash = null;
    this.Templname = "3";
    this.Channel = "10000";
  },
  CertOID = function() {
    this.Version = "3.2";
    this.ClientOS = this.BioFeature = this.RawHash = this.IDNumber = this.IDType = null;
  },
  BioFeature = function() {
    this.PhotoArray = [];
    this.SoundArray = [];
    this.Script = null;
  },
  Script = function() {
    this.Format = "zip";
    this.Width = "180";
    this.Device = this.Data = this.Count = this.Color = null;
    this.RefWidth = this.RefHeight = 99999;
    this.Geoloca = null;
  },
  Device = function() {
    this.DeviceName = "ANDROID_PAD_" + navigator.appName;
    this.PressMax = this.SampleRate = "1024";
    this.Height = this.Width = 99999;
    this.DriverVer = "v1.0";
    this.DeviceID = navigator.appVersion;
    this.CertInfo = null;
  },
  ClientOS = function() {
    this.Name = "WeiXin_" + navigator.platform;
    this.Edition = navigator.appCodeName;
    this.ServicePack = "None";
    this.Version = navigator.appVersion;
    this.OSArch = "32/64";
    this.DeviceID = navigator.appVersion;
  },
  ImageSize = function(a, b) {
    this.Width = a;
    this.Height = b;
    this.Unit = "dp";
  },
  SignatureObj = function() {
    this.Cid = 0;
    this.ImageSize = this.Image = this.Signer = this.SignRule = null;
    this.IsTSS = !1;
    this.Points = null;
    this.ImageFMT = DataFormat.IMAGE_PNG;
    this.TimeTag = null;
  },
  MassSignObj = function() {
    this.Cid = 0;
    this.ImageSize = this.Image = this.Signer = this.SignRule = null;
    this.IsTSS = !1;
    this.ImageFMT = DataFormat.IMAGE_PNG;
  },
  PhotoEvidence = function() {
    this.BioType = this.Hash = this.Format = null;
  },
  SoundEvidence = function() {
    this.BioType = this.Hash = this.Format = null;
  },
  DataObj = function() {
    this.OwnerCid = this.Cid = 0;
    this.PDFCrdRule = this.Format = this.Name = this.Data = this.PointHash = null;
  },
  PDFCrdRule = function() {
    this.DocStyleTid = this.DocFormat = this.DocCrdTid = null;
  },
  HWRRoot = function() {
    this.version = "";
    this.hwrInfo = this.serviceID = this.userID = this.encKey = this.transID = null;
  },
  HWRInfo = function() {
    this.type = null;
    this.lang = Language.CHS;
    this.similar = 100;
    this.strokes = [];
    this.text = "";
    this.hwrNum = null;
  },
  HWRResult = function() {
    this.transID = null;
    this.result = [];
    this.errCode = null;
  },
  RESULT_OK = 0,
  RESULT_ERROR = -1,
  EC_API_NOT_INITED = 1,
  EC_WRONG_CONTEXT_ID = 2,
  EC_NATIVE_EXCEPTION = 3,
  EC_TEMPLATE_NOT_SET = 4,
  EC_COMMENT_ALREADY_SHOW = 5,
  CALLBACK_TYPE_SIGNATURE = 10,
  CALLBACK_TYPE_DIALOG_CANCEL = 11,
  CALLBACK_TYPE_COMMENTSIGN = 12,
  CALLBACK_TYPE_GETVERSION = 13,
  CALLBACK_TYPE_START_RECORDING = 14,
  CALLBACK_TYPE_STOP_RECORDING = 15,
  isCommentShow = !1;
function anysignWebImpl() {
  function a() {
    h = b = null;
    d = c = !1;
    k = [];
    l = [];
    p = [];
    r = [];
  }

  var b,
    c = !1,
    d = !1,
    f,
    e,
    h,
    k = [],
    l = [],
    p = [],
    w = [],
    r = [],
    q;
  this._initAnySignApi = function(c, d) {
    if (!c || !d) return !1;
    a();
    b = c;
    h = d;
    return !0;
  };
  this._addDataObj = function(a, b) {
    var d;
    if ((d = !c))
      d =
        (50 <= a && 59 >= a) || (500 <= a && 599 >= a) || (10 <= a && 19 >= a)
          ? !0
          : !1;
    return d
      ? ((b.cid = a),
        (w[a] = b),
        (d = new DataObj()),
        (d.Format = b.format),
        (d.Name = b.name),
        (d.Cid = a),
        (p[a] = d),
        !0)
      : !1;
  };
  this._addSignatureObj = function(a, b) {
    var d;
    if ((d = !c && b))
      d = (20 <= a && 29 >= a) || (200 <= a && 299 >= a) ? !0 : !1;
    return d
      ? ((b.cid = a),
        (l[a] = b),
        (d = new SignatureObj()),
        (d.Cid = a),
        (d.Signer = b.signer),
        (d.SignRule = b.signRule),
        (d.IsTSS = b.isTSS),
        (d.TimeTag = b.timeTag),
        (k[a] = d),
        !0)
      : !1;
  };
  this._addCommentObj = function(a, b) {
    var d;
    if ((d = !c && b))
      d = (30 <= a && 39 >= a) || (300 <= a && 399 >= a) ? !0 : !1;
    return d
      ? ((b.cid = a),
        (l[a] = b),
        (d = new MassSignObj()),
        (d.Cid = a),
        (d.Signer = b.signer),
        (d.SignRule = b.signRule),
        (d.IsTSS = b.isTSS),
        (k[a] = d),
        !0)
      : !1;
  };
  this._addEvidenceHash = function(a, b, c, d, e) {
    a = k[a];
    a.Points || (a.Points = new PlainData());
    a.Points.P10Data || (a.Points.P10Data = new P10Data());
    a.Points.CertOID || (a.Points.CertOID = new CertOID());
    a.Points.CertOID.BioFeature ||
      (a.Points.CertOID.BioFeature = new BioFeature());
    if (a.Points.CertOID.BioFeature.Script) return !1;
    if (
      d == BioType.PHOTO_SIGNER_IDENTITY_CARD_BACK ||
      d == BioType.PHOTO_SIGNER_IDENTITY_CARD_FRONT
    ) {
      var g = new PhotoEvidence();
      g.Format = c;
      g.Hash = b;
      g.BioType = d;
      a.Points.CertOID.BioFeature.PhotoArray[e] = g;
      return !0;
    }
    return d == BioType.SOUND_SIGNER_RETELL || d == BioType.SOUND_SIGNER_OTHER
      ? ((g = new SoundEvidence()),
        (g.Format = c),
        (g.Hash = b),
        (g.BioType = d),
        (a.Points.CertOID.BioFeature.SoundArray[e] = g),
        !0)
      : !1;
  };
  this._addEvidence = function(a, b, c, d, e) {
    a = k[a];
    a.Points || (a.Points = new PlainData());
    a.Points.P10Data || (a.Points.P10Data = new P10Data());
    a.Points.CertOID || (a.Points.CertOID = new CertOID());
    a.Points.CertOID.BioFeature ||
      (a.Points.CertOID.BioFeature = new BioFeature());
    if (a.Points.CertOID.BioFeature.Script) return !1;
    if (
      d == BioType.PHOTO_SIGNER_IDENTITY_CARD_BACK ||
      d == BioType.PHOTO_SIGNER_IDENTITY_CARD_FRONT
    ) {
      var g = new PhotoEvidence();
      g.Format = c;
      b = sha1Digest(b);
      g.Hash = "BS64:" + b.toString().toUpperCase();
      g.BioType = d;
      a.Points.CertOID.BioFeature.PhotoArray[e] = g;
      return !0;
    }
    return d == BioType.SOUND_SIGNER_RETELL || d == BioType.SOUND_SIGNER_OTHER
      ? ((g = new SoundEvidence()),
        (g.Format = c),
        (b = sha1Digest(b)),
        (g.Hash = "BS64:" + b.toString().toUpperCase()),
        (g.BioType = d),
        (a.Points.CertOID.BioFeature.SoundArray[e] = g),
        !0)
      : !1;
  };
  this._addEvidenceV2 = function(a, b, c, d) {
    a = k[a];
    a.Points || (a.Points = new PlainData());
    a.Points.P10Data || (a.Points.P10Data = new P10Data());
    a.Points.CertOID || (a.Points.CertOID = new CertOID());
    a.Points.CertOID.BioFeature ||
      (a.Points.CertOID.BioFeature = new BioFeature());
    if (a.Points.CertOID.BioFeature.Script) return !1;
    if (
      c == BioType.PHOTO_SIGNER_IDENTITY_CARD_BACK ||
      c == BioType.PHOTO_SIGNER_IDENTITY_CARD_FRONT
    ) {
      var e = new PhotoEvidence();
      e.Format = DataFormat.IMAGE_JPEG;
      b = sha1Digest(b);
      e.Hash = "BS64:" + b.toString().toUpperCase();
      e.BioType = c;
      a.Points.CertOID.BioFeature.PhotoArray[d] = e;
      return !0;
    }
    return c == BioType.SOUND_SIGNER_RETELL || c == BioType.SOUND_SIGNER_OTHER
      ? ((e = new SoundEvidence()),
        (e.Format = DataFormat.MEDIA_3GP),
        (b = sha1Digest(b)),
        (e.Hash = "BS64:" + b.toString().toUpperCase()),
        (e.BioType = c),
        (a.Points.CertOID.BioFeature.SoundArray[d] = e),
        !0)
      : !1;
  };
  this._addChachetObj = function(a) {
    return !c && a ? (r.push(a), !0) : !1;
  };
  this._setTemplate = function(a, b, c, h) {
    if (!d && 10 <= a && 19 >= a) {
      if (null == b || 0 === b.length)
        return anysign.logger.e("contentUtf8Str must not be null or empty"), !1;
      if (null == c || 0 === c.length)
        return anysign.logger.e("businessId must not be null or empty"), !1;
      if (null == h || 0 === h.length)
        return (
          anysign.logger.e("template_serial must not be null or empty"), !1
        );
      f = c;
      e = sha1DigestBase64(c) + "";
      c = new DataObj();
      c.Cid = a;
      c.Data = b;
      if (10 === a || 13 === a)
        (b = new PDFCrdRule()),
          (b.DocFormat = a),
          (b.DocStyleTid = h),
          (c.PDFCrdRule = b);
      h = new DataConfig();
      h.cid = a;
      h.nessesary = !0;
      p[a] = c;
      w[a] = h;
      return (d = !0);
    }
    return !1;
  };
  this._setTID = function(a) {
    return !0;
  };
  this._setData = function(a, b) {
    var c;
    a: {
      for (c in w) {
        var d = w[c];
        if (d && d.cid == a) {
          c = d;
          break a;
        }
      }
      c = null;
    }
    return c && b
      ? ("string" === typeof b
          ? ((c = p[a]),
            (c.Data = Base64.encodeUint8Array(
              anysign.charset.strToUtf8ArrayUint8(b)
            )))
          : b instanceof Uint8Array &&
            ((c = p[a]), (c.Data = Base64.encodeUint8Array(b))),
        !0)
      : !1;
  };
  this._commitConfig = function() {
    return (c = !0);
  };
  this._resetConfig = function() {
    a();
    return !0;
  };
  this._showSignatureDialog = function(a) {
    if (c) {
      if (d) {
        if (null == l[a]) return EC_WRONG_CONTEXT_ID;
        $("#btnOK").css("pointer-events", "none");
        setTimeout(function() {
          $("#btnOK").css("pointer-events", "auto");
        }, 400);
        $("#btnClear").css("pointer-events", "none");
        setTimeout(function() {
          $("#btnClear").css("pointer-events", "auto");
        }, 400);
        $("#btnCancel").css("pointer-events", "none");
        setTimeout(function() {
          $("#btnCancel").css("pointer-events", "auto");
        }, 400);
        $("#single_scrollbar_up").css("pointer-events", "none");
        setTimeout(function() {
          $("#single_scrollbar_up").css("pointer-events", "auto");
        }, 400);
        $("#single_scrollbar_down").css("pointer-events", "none");
        setTimeout(function() {
          $("#single_scrollbar_down").css("pointer-events", "auto");
        }, 400);
        onloadAnysignView(!0, q);
        var e = l[a];
        a = getWindowHeight();
        var f = getWindowWidth(),
          g = document.getElementById("dialog");
        g.style.height = a;
        g.style.width = f;
        g.style.display = "block";
        a = document.getElementById("anysign_title");
        f = e.title;
        g = f.substring(e.titleSpanFromOffset, e.titleSpanToOffset + 1).big();
        a.innerHTML =
          f.substring(0, e.titleSpanFromOffset) +
          g +
          f.substring(e.titleSpanToOffset + 1, f.length);
        setSignResCallback(e, function(a, c, d, f, g, h, m) {
          if (b) {
            if (d) {
              a = k[a];
              var u = e.penColor;
              a.Points || (a.Points = new PlainData());
              a.Points.P10Data || (a.Points.P10Data = new P10Data());
              a.Points.CertOID || (a.Points.CertOID = new CertOID());
              a.Points.CertOID.BioFeature ||
                (a.Points.CertOID.BioFeature = new BioFeature());
              a.Points.CertOID.IDNumber = a.Signer.IDNumber;
              a.Points.CertOID.IDType = a.Signer.IDType;
              a.Points.CertOID.BioFeature.Script = new Script();
              a.Points.CertOID.ClientOS = new ClientOS();
              var l = a.Points.CertOID.BioFeature.Script;
              l.Color = parseInt("0x" + u.substr(1)) + "";
              l.Data = anysign.zip.compressToB64(
                anysign.charset.strToUint8ArrayAscII(f)
              );
              l.Count = g + "";
              l.Device = new Device();
              l.Device.Width = 99999;
              l.Device.Height = 99999;
              l.RefWidth = h;
              l.RefHeight = m;
              a.ImageSize = new ImageSize(
                calculatedSigWidth,
                calculatedSigHeight
              );
              a.Image = c;
              a.SignRule &&
                a.SignRule instanceof SignRule_XYZ &&
                ((c = a.SignRule.XYZRule),
                "dp" === c.Unit
                  ? (a.SignRule.XYZRule = {
                      Left: c.Left,
                      Top: c.Top,
                      Right: c.Left + calculatedSigWidth,
                      Bottom: c.Top - calculatedSigHeight,
                      Pageno: c.Pageno,
                      Unit: c.Unit,
                    })
                  : "pt" === c.Unit &&
                    (a.SignRule.XYZRule = {
                      Left: c.Left,
                      Top: c.Top,
                      Right: c.Left + 0.45 * calculatedSigWidth,
                      Bottom: c.Top - 0.45 * calculatedSigHeight,
                      Pageno: c.Pageno,
                      Unit: c.Unit,
                    }));
              b(e.cid, CALLBACK_TYPE_SIGNATURE, d);
            } else b(e.cid, CALLBACK_TYPE_DIALOG_CANCEL, null);
            clear_canvas();
            // document.getElementById("dialog").style.display = "none";
            setIsAnysignInputDlgShown(!1);
          }
        });
        setIsAnysignInputDlgShown(!0);
        return RESULT_OK;
      }
      return EC_TEMPLATE_NOT_SET;
    }
    return EC_API_NOT_INITED;
  };
  this._showCommentDialog = function(a) {
    if (c) {
      if (d) {
        if (null == l[a]) return EC_WRONG_CONTEXT_ID;
        if (isCommentShow) return EC_COMMENT_ALREADY_SHOW;
        var e = l[a];
        setSignResCallback(e, function(a, c, d, f, g, h, m) {
          b &&
            (d
              ? ((a = k[a]),
                (a.ImageSize = new ImageSize(h, m)),
                (a.Image = c),
                a.SignRule &&
                  a.SignRule instanceof SignRule_XYZ &&
                  ((c = a.SignRule.XYZRule),
                  "dp" === c.Unit
                    ? (a.SignRule.XYZRule = {
                        Left: c.Left,
                        Top: c.Top,
                        Right: c.Left + h,
                        Bottom: c.Top - m,
                        Pageno: c.Pageno,
                        Unit: c.Unit,
                      })
                    : "pt" === c.Unit &&
                      (a.SignRule.XYZRule = {
                        Left: c.Left,
                        Top: c.Top,
                        Right: c.Left + 0.45 * h,
                        Bottom: c.Top - 0.45 * m,
                        Pageno: c.Pageno,
                        Unit: c.Unit,
                      })),
                b(e.cid, CALLBACK_TYPE_COMMENTSIGN, d))
              : b(e.cid, CALLBACK_TYPE_DIALOG_CANCEL, null),
            clear_canvas(),
            // document.getElementById("dialog").style.display = "none",
            setIsAnysignInputDlgShown(!1));
        });
        new anysignCommentUI().onload_commentSignCanvas(e, q);
        setIsAnysignInputDlgShown(!0);
        return RESULT_OK;
      }
      return EC_TEMPLATE_NOT_SET;
    }
    return EC_API_NOT_INITED;
  };
  this._setIdentifyCallBack = function(a) {
    q = a;
  };
  this._startOCR = function(a) {
    new OCRObj().setOCRCapture(a);
  };
  this._takePicture = function(a) {
    return !1;
  };
  this._picturePreview = function(a) {
    return !1;
  };
  this._startMediaRecording = function(a) {
    return !1;
  };
  this._audioPreview = function(a) {
    return !1;
  };
  this._mediaPreview = function(a) {
    return !1;
  };
  this._startMediaRecording = function(a) {
    return !1;
  };
  this._finishMediaRecording = function(a) {
    return !1;
  };
  this._isReadyToUpload = function() {
    if (!c || !d) return !1;
    var a = !1,
      b;
    for (b in l) {
      var e = l[b],
        f = k[e.cid];
      if (e.nessesary) {
        if (null == f) return !1;
        if (isSignOrCom(f.Cid)) {
          if (
            null == f.Points ||
            null == f.Points.CertOID ||
            null == f.Points.CertOID.BioFeature ||
            null == f.Points.CertOID.BioFeature.Script
          )
            return !1;
        } else if (null == f.Image) return !1;
      }
      isSignOrCom(f.Cid) && null != f.Points && null != f.Image && (a = !0);
      if (!a) return !1;
    }
    for (b in w)
      if (
        ((e = w[b]),
        (a = p[e.cid]),
        (null == a || null == a.Data) && e.nessesary)
      )
        return !1;
    return !0;
  };
  this._saveBusinessSession = function(a) {
    a = md5Digest("424A4341" + a) + "";
    a = a.substring(0, 24);
    var c = new SaveFormInfo();
    c.WONo = f;
    c.WOHash = e;
    c.Channel = h;
    var b, d;
    for (d in l) (b = l[d]), c.USignConfigs.push(b), c.USignObjs.push(k[b.cid]);
    for (d in w) (b = w[d]), c.DataConfigs.push(b), c.DataObjs.push(p[b.cid]);
    c.CachetArray = r;
    c.EncAlg = EncAlgType.EncAlg;
    c = anysign.json.stringify(c);
    return tripleDesEncrypt(c, a) + "";
  };
  this._restoreBusinessSession = function(a, b) {
    b = md5Digest("424A4341" + b) + "";
    b = b.substring(0, 24);
    var g = tripleDesDecrypt(a, b) + "",
      g = anysign.hex.hexStrToUint8Str(g),
      g = anysign.json.stringToObj(g);
    f = g.WONo;
    e = g.WOHash;
    h = g.Channel;
    EncAlgType.EncAlg = g.EncAlg;
    var m, q, B;
    for (B in g.USignConfigs) {
      m = g.USignConfigs[B].cid;
      for (var F in g.USignObjs)
        (q = g.USignObjs[F].Cid),
          m == q && ((l[m] = g.USignConfigs[B]), (k[q] = g.USignObjs[F]));
    }
    for (B in g.DataConfigs)
      for (F in ((m = g.DataConfigs[B].cid), g.DataObjs))
        (q = g.DataObjs[F].Cid),
          m == q && ((w[m] = g.DataConfigs[B]), (p[q] = g.DataObjs[F]));
    r = g.CachetArray;
    return (d = c = !0);
  };
  this._getUploadDataGram = function() {
    if (c && this._isReadyToUpload() && d) {
      var a = new AnySignRoot(),
        b = new FormInfo(),
        u = new Uint8Array(24);
      void 0 != window.crypto
        ? window.crypto.getRandomValues(u)
        : void 0 != window.msCrypto
        ? window.msCrypto.getRandomValues(u)
        : capabal.crypto.getRandomValues(u);
      a.EncKey = rsaPubkeyUint8EncByDefault(u);
      a.EncCertSN = encCertSN;
      var q = [],
        E,
        B;
      for (B in l)
        (E = l[B]),
          (E instanceof SignatureConfig || E instanceof CommentConfig) &&
            "" != k[E.cid].Image &&
            null != k[E.cid].Image &&
            q.push(k[E.cid]);
      var F = [];
      for (B in w) (E = w[B]), E instanceof DataConfig && F.push(p[E.cid]);
      b.WONo = f;
      b.WOHash = e;
      b.Channel = h;
      null != r && 0 < r.length && (b.IsUnit = !0);
      if (null == q || 0 == q.length) return null;
      b.USignArray = q;
      b.DataArray = F;
      b.CachetArray = r;
      b.ExtInfo = new ExtInfo();
      b.EncAlg = EncAlgType.EncAlg;
      b = anysign.json.stringify(b);
      a.EncData = tripleDesEncrypt(b, anysign.hex.uint8ArrayToHexStr(u)) + "";
      a.Digest = new Digest();
      a.Digest.Alg = "CRC32";
      a.Digest.Value = anysign.digest
        .crc32(a.EncData)
        .toString(16)
        .toUpperCase();
      return anysign.json.stringify(a);
    }
    return null;
  };
  this._getOSInfo = function() {
    if (isMobile.Android()) {
      var a = navigator.userAgent.toLowerCase();
      alert(a);
      var c = a.indexOf("android"),
        b = a.indexOf(";", c),
        a = a.substring(c + 8, b);
      return "android##" + a;
    }
    return isMobile.iOS() &&
      ((a = navigator.userAgent),
      -1 != (c = a.indexOf("OS")) && -1 != (b = a.indexOf("like Mac OS")))
      ? ((a = a.substring(c + 3, b - 1)),
        (a = a.replace(/_/g, ".")),
        "ios##" + a)
      : "unknown";
  };
}
var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i) ? !0 : !1;
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i) ? !0 : !1;
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? !0 : !1;
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i) ? !0 : !1;
  },
  any: function() {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Windows()
    );
  },
};
function onBridgeReady() {
  WeixinJSBridge.call("hideOptionMenu");
}
"undefined" == typeof WeixinJSBridge
  ? document.addEventListener
    ? document.addEventListener("WeixinJSBridgeReady", onBridgeReady, !1)
    : document.attachEvent &&
      (document.attachEvent("WeixinJSBridgeReady", onBridgeReady),
      document.attachEvent("onWeixinJSBridgeReady", onBridgeReady))
  : onBridgeReady();
var points = [],
  firstPointTime = 0,
  signTrack = "",
  signTrachPointCount = 0,
  calculatedSigWidth = 0,
  calculatedSigHeight = 0,
  minX = 9999,
  minY = 9999,
  maxX = 0,
  maxY = 0,
  curX = 0,
  curY = 0,
  lastX = 0,
  lastY = 0,
  paste_padding = 10,
  imageDataTmp,
  isDown = !1,
  isDrawn = !1,
  isAnysignInputDlgShown = !1,
  isCopyingImg = !1,
  base_stroke_width = 480 <= window.innerWidth ? 7.5 : 5,
  canvas,
  ctx,
  signResCallback,
  signObjTmp,
  bh_temp = getWindowHeight(),
  bw_temp = getWindowWidth(),
  isSign,
  sbuilder = [],
  identify_callback,
  fresh = function() {
    if (isSign) {
      var a = ismobile(1);
      if (1 == a) {
        var b = document.getElementById("anysignCanvas"),
          c = b.getContext("2d"),
          d,
          f,
          e,
          h,
          k;
        if (isDrawn) {
          d = document.createElement("canvas");
          f = d.getContext("2d");
          var l = paste_padding,
            p = (h = e = l),
            w = l,
            r,
            q;
          0 > (k = minX - l) && ((e = minX), (k = 0));
          0 > (r = minY - l) && ((h = minY), (r = 0));
          (q = maxX + l) > b.width && ((p = 0), (q = b.width));
          (l = maxY + l) > b.height && ((w = 0), (l = b.height));
          e = maxX - minX + e + p;
          h = maxY - minY + h + w;
          k = c.getImageData(k, r, q - k, l - r);
          d.width = e;
          d.height = h;
        }
        var a = getWindowHeight(),
          g = getWindowWidth();
        r = document.getElementById("dialog");
        r.style.height = a + "px";
        r.style.width = g + "px";
        10 > b.width && (b.width *= g);
        b.width < g && (b.width = g);
        b.height = 0.65 * a;
        g = document.getElementById("container");
        g.style.overflowX = "scroll";
        g.style.overflowY = "hidden";
        g.style.height = 0.65 * a + "px";
        g = document.getElementById("anysign_title");
        g.style.height = 0.1 * a + "px";
        document.getElementById("single_scrollbar").style.height =
          0.1 * a + "px";
        g = document.getElementById("btnContainerOuter");
        g.style.height = 0.1 * a + "px";
      } else
        0 == a &&
          (0 == window.orientation || 180 == window.orientation
            ? ((a = 0.9 * getWindowHeight()), (g = getWindowWidth()))
            : ((c =
                569 > getWindowWidth()
                  ? 0.75 * getWindowHeight()
                  : getWindowHeight()),
              (b = getWindowWidth()),
              (a = c),
              (g = b)),
          (b = document.getElementById("anysignCanvas")),
          (c = b.getContext("2d")),
          isDrawn &&
            ((d = document.createElement("canvas")),
            (f = d.getContext("2d")),
            (w = p = h = e = l = paste_padding),
            0 > (k = minX - l) && ((e = minX), (k = 0)),
            0 > (r = minY - l) && ((h = minY), (r = 0)),
            (q = maxX + l) > b.width && ((p = 0), (q = b.width)),
            (l = maxY + l) > b.height && ((w = 0), (l = b.height)),
            (e = maxX - minX + e + p),
            (h = maxY - minY + h + w),
            (k = c.getImageData(k, r, q - k, l - r)),
            (d.width = e),
            (d.height = h)),
          (r = document.getElementById("dialog")),
          (r.style.height = a + "px"),
          (r.style.width = g + "px"),
          (b.height = a),
          10 > b.width && (b.width *= g),
          b.width < g && (b.width = g),
          0 == window.orientation || 180 == window.orientation
            ? ((b.height *= 0.7),
              (g = document.getElementById("container")),
              (g.style.overflowX = "scroll"),
              (g.style.overflowY = "hidden"),
              (g.style.height = 0.7 * a + "px"),
              (g = document.getElementById("anysign_title")),
              (g.style.height = 0.1 * a + "px"),
              (g = document.getElementById("btnContainerOuter")),
              (g.style.height = 0.2 * a + "px"),
              (a = document.getElementById("btnContainerInner")),
              (a.style.marginBottom = 0))
            : ((b.height *= 0.6),
              (g = document.getElementById("container")),
              (g.style.overflowX = "scroll"),
              (g.style.overflowY = "hidden"),
              (g.style.height = 0.6 * a + "px"),
              (g = document.getElementById("anysign_title")),
              (g.style.height = 0.1 * a + "px"),
              (g = document.getElementById("btnContainerOuter")),
              (g.style.height = 0.3 * a + "px"),
              (a = document.getElementById("btnContainerInner")),
              (a.style.marginBottom = g.style.height)));
      null != tmp_canvas &&
        ((tmp_canvas.width = b.width), (tmp_canvas.height = b.height));
      c.strokeStyle = signObjTmp ? signObjTmp.penColor : "black";
      c.lineWidth = base_stroke_width;
      c.lineCap = "round";
      c.lineJoin = "round";
      c.shadowBlur = 5;
      tmp_ctx.strokeStyle = signObjTmp ? signObjTmp.penColor : "black";
      tmp_ctx.lineWidth = base_stroke_width;
      tmp_ctx.lineCap = "round";
      tmp_ctx.lineJoin = "round";
      tmp_ctx.shadowBlur = 5;
      isDrawn &&
        ((a =
          b.width > e
            ? b.height >= h
              ? 1
              : b.height / h
            : b.width / b.height > e / h
            ? b.height / h
            : b.width / e),
        f.putImageData(k, 0, 0),
        (f = document.createElement("canvas")),
        (g = f.getContext("2d")),
        (f.width = e * a),
        (f.height = h * a),
        g.scale(a, a),
        g.drawImage(d, 0, 0),
        c.clearRect(0, 0, b.width, b.height),
        c.drawImage(f, 0, 0),
        (minY = minX = 0),
        (maxX *= a),
        (maxY *= a));
      tmp_canvas.getContext("2d").clearRect(0, 0, b.width, b.height);
    }
  };
window.addEventListener("orientationchange", fresh);
window.addEventListener("resize", fresh);
function onloadAnysignView(a, b) {
  this.isSign = a;
  this.identify_callback = b;
  onload_singleSignCanvas();
  onload_singleSingScrollAction();
}
function onload_singleSignCanvas() {
  if (document.getElementById("anysignCanvas")) {
    canvas = document.getElementById("anysignCanvas");
    ctx = canvas.getContext("2d");
    var a = getWindowHeight(),
      b = getWindowWidth();
    10 > canvas.width && (canvas.width = b * canvas.width * 0.99);
    canvas.width < b && (canvas.width = 0.99 * b);
    b = document.getElementById("container");
    b.style.overflowX = "scroll";
    b.style.overflowY = "hidden";
    canvas.height = 0.7 * a;
    document.getElementById("anysign_title").style.height = 0.1 * a + "px";
    document.getElementById("single_scrollbar").style.height = 0.1 * a + "px";
    document.getElementById("btnContainerOuter").style.height = 0.1 * a + "px";
    "ontouchstart" in document.documentElement
      ? ((canvas.ontouchstart = function(a) {
          if (isCopyingImg) return !1;
          isDown = !0;
          ctx.strokeStyle = signObjTmp ? signObjTmp.penColor : "black";
          ctx.lineWidth = base_stroke_width;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.shadowBlur = 5;
        }),
        (canvas.ontouchmove = function(a) {
          if (isDown && !isCopyingImg) {
            var c = JQuery_Capable.offset(a.target);
            "undefined" !== typeof a.targetTouches
              ? ((curX = Math.floor(a.targetTouches[0].pageX - c.left)),
                (curY = Math.floor(a.targetTouches[0].pageY - c.top)))
              : ((curX = Math.floor(a.pageX - c.left)),
                (curY = Math.floor(a.pageY - c.top)));
            c = a.timeStamp;
            0 !== signTrachPointCount || isNaN(c) || (firstPointTime = c);
            0 < curX &&
              curY <= canvas.height &&
              ((signTrack = isNaN(c)
                ? signTrack +
                  (curX + "," + curY + "," + base_stroke_width + ",0\n")
                : signTrack +
                  (curX +
                    "," +
                    curY +
                    "," +
                    base_stroke_width +
                    "," +
                    (c - firstPointTime) +
                    "\n")),
              (signTrachPointCount += 1),
              curX > maxX && (maxX = curX),
              curX < minX && (minX = curX),
              curY > maxY && (maxY = curY),
              curY < minY && (minY = curY),
              points.push({
                x: curX,
                y: curY,
              }),
              onPaint(),
              0 < curX && 0 < curY && sbuilder.push(curX, curY),
              (lastX = curX),
              (lastY = curY));
            preventDefault(a);
          }
        }),
        (canvas.ontouchend = function(a) {
          a = a.timeStamp;
          signTrack = isNaN(a)
            ? signTrack + "0,0,-1,0\n"
            : signTrack + ("0,0,-1," + (a - firstPointTime) + "\n");
          signTrachPointCount += 1;
          sbuilder.push("-1", "0");
          isCopyingImg = !0;
          isDown = !1;
          canvas = document.getElementById("anysignCanvas");
          ctx = canvas.getContext("2d");
          ctx.drawImage(canvas, 0, 0);
          points = [];
          isCopyingImg = !1;
        }),
        (canvas.ontouchcancel = canvas.ontouchend))
      : ((canvas.onmousedown = function(a) {
          isDown = !0;
          ctx.strokeStyle = signObjTmp ? signObjTmp.penColor : "black";
          ctx.lineWidth = base_stroke_width;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.shadowBlur = 5;
        }),
        (canvas.onmousemove = function(a) {
          if (isDown) {
            var b = JQuery_Capable.offset(a.target),
              c = document.body.scrollTop | document.documentElement.scrollTop,
              e =
                document.body.scrollLeft | document.documentElement.scrollLeft;
            "undefined" !== typeof a.targetTouches
              ? ((curX = Math.floor(a.targetTouches[0].clientX - b.left)),
                (curY = Math.floor(a.targetTouches[0].clientY - b.top)))
              : ((curX = Math.floor(a.clientX - b.left)),
                (curY = Math.floor(a.clientY - b.top)));
            b = a.timeStamp;
            0 !== signTrachPointCount || isNaN(b) || (firstPointTime = b);
            0 < curX &&
              ((signTrack = isNaN(b)
                ? signTrack +
                  (curX + "," + curY + "," + base_stroke_width + ",0\n")
                : signTrack +
                  (curX +
                    "," +
                    curY +
                    "," +
                    base_stroke_width +
                    "," +
                    (b - firstPointTime) +
                    "\n")),
              (signTrachPointCount += 1),
              (curY += c),
              (curX += e),
              curX > maxX && (maxX = curX),
              curX < minX && (minX = curX),
              curY > maxY && (maxY = curY),
              curY < minY && (minY = curY),
              points.push({
                x: curX,
                y: curY,
              }),
              onPaint(),
              0 < curX && 0 < curY && sbuilder.push(curX, curY),
              (lastX = curX),
              (lastY = curY));
            preventDefault(a);
          }
        }),
        (canvas.onmouseup = function(a) {
          var b = JQuery_Capable.offset(a.target);
          "undefined" !== typeof a.targetTouches
            ? ((curX = Math.floor(a.targetTouches[0].clientX - b.left)),
              (curY = Math.floor(a.targetTouches[0].clientY - b.top)))
            : ((curX = Math.floor(a.clientX - b.left)),
              (curY = Math.floor(a.clientY - b.top)));
          a = a.timeStamp;
          signTrack = isNaN(a)
            ? signTrack + "0,0,-1,0\n"
            : signTrack + ("0,0,-1," + (a - firstPointTime) + "\n");
          signTrachPointCount += 1;
          isDown && sbuilder.push("-1", "0");
          isDown = !1;
          a = document.getElementById("anysignCanvas");
          a.getContext("2d").drawImage(a, 0, 0);
          points = [];
        }),
        (canvas.onmouseout = canvas.onmouseup));
    ctx.strokeStyle = signObjTmp ? signObjTmp.penColor : "black";
    ctx.lineWidth = base_stroke_width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.shadowBlur = 5;
  } else
    alert(
      "\u83b7\u53d6\u7b7e\u540d\u63a7\u4ef6\u5931\u8d25,\u8bf7\u4f7f\u7528safari\u548cchrome\u6d4f\u89c8\u5668\u8fdb\u884c\u7b7e\u540d\u3002\n\n\u5f53\u524d\u6d4f\u89c8\u5668\u8be6\u60c5\u5982\u4e0b\uff1a" +
        navigator.userAgent
    );
}
function onload_singleSingScrollAction() {
  function a() {
    d -= k;
    d > f ? setTimeout(a, h) : (d = f);
    e.scrollLeft = d;
    0 >= d &&
      ((e.style.borderColor = "#FF0000"),
      setTimeout(function() {
        e.style.borderColor = "gray";
      }, 1e3));
  }

  function b() {
    d += k;
    d < f
      ? ((e.scrollLeft = d), setTimeout(b, h))
      : ((d = f), (e.scrollLeft = d));
    d >= e.scrollWidth - e.clientWidth &&
      ((e.style.borderColor = "#FF0000"),
      setTimeout(function() {
        e.style.borderColor = "gray";
      }, 1e3));
  }

  var c = 0,
    d = 0,
    f = 0,
    e = document.getElementById("container");
  e.addEventListener("scroll", function() {
    d = e.scrollLeft;
  });
  document
    .getElementById("single_scrollbar_up")
    .addEventListener("click", function() {
      c = Math.ceil((1 * e.clientWidth) / 3);
      f = 0 <= d - c ? d - c : 0;
      a();
    });
  document
    .getElementById("single_scrollbar_down")
    .addEventListener("click", function() {
      var a = e.clientWidth,
        h = e.scrollWidth;
      c = Math.ceil((1 * a) / 3);
      f = d + c >= h - a ? h - a : d + c;
      b();
    });
  var h = 50,
    k = 20;
}
var onPaint = function() {
  if (3 > points.length) {
    var a = points[0];
    ctx.beginPath();
    ctx.strokeStyle = signObjTmp.penColor;
    ctx.fillStyle = signObjTmp.penColor;
    ctx.arc(a.x, a.y, ctx.lineWidth / 2, 0, 2 * Math.PI, !0);
    ctx.fill();
    ctx.closePath();
  } else {
    ctx.beginPath();
    ctx.strokeStyle = signObjTmp.penColor;
    ctx.fillStyle = signObjTmp.penColor;
    ctx.moveTo(points[0].x, points[0].y);
    for (a = 1; a < points.length - 1; a++)
      ctx.quadraticCurveTo(
        points[a].x,
        points[a].y,
        (points[a].x + points[a + 1].x) / 2,
        (points[a].y + points[a + 1].y) / 2
      );
    ctx.stroke();
    ctx.closePath();
    isDrawn = !0;
  }
};
function clear_canvas() {
  var a = document.getElementById("anysignCanvas"),
    b = a.getContext("2d");
  b.clearRect(0, 0, a.width, a.height);
  b.closePath();
  var b = a.width,
    c = a.height;
  a.width = a.height = 0;
  a.width = b;
  a.height = c;
  calculatedSigHeight = calculatedSigWidth = 0;
  signTrack = "";
  firstPointTime = signTrachPointCount = 0;
  points = [];
  sbuilder = [];
  minY = minX = 9999;
  maxY = maxX = 0;
  imageDataTmp = null;
  isDrawn = !1;
}
function sign_confirm() {
  if (isDrawn)
    if (signObjTmp.isdistinguish) {
      sbuilder.push("-1", "-1");
      showProgress(
        "\u6b63\u5728\u8bc6\u522b\uff0c\u8bf7\u7a0d\u5019\u3002\u3002\u3002"
      );
      for (
        var a = "",
          b = signObjTmp.signer.UName.replace(/(.)(?=[^$])/g, "$1,").split(","),
          c = 0;
        c < b.length;
        c++
      )
        checkText(b[c]) || (a += b[c]);
      new OCRObj(signObjTmp.ocrCapture).recognition(sbuilder, a, function(
        a,
        b
      ) {
        closeWindow();
        if (0 == a) {
          var c = document.getElementById("anysignCanvas");
          imageDataTmp = c
            .getContext("2d")
            .getImageData(
              minX - paste_padding,
              minY - paste_padding,
              maxX - minX + paste_padding + paste_padding + paste_padding,
              maxY - minY + paste_padding + paste_padding + paste_padding
            );
          if (signResCallback) {
            var d = getSignData().substr(22, getSignData().length),
              c = document.getElementById("anysignCanvas");
            signResCallback(
              signObjTmp.cid,
              d,
              d,
              signTrack,
              signTrachPointCount,
              c.width,
              c.height
            );
          }
          document.body.parentNode.style.overflow = "scroll";
          isSign = !1;
        } else
          "\u8bf7\u6c42\u8d85\u65f6" == a
            ? closeWindow()
            : null == identify_callback
            ? console.log("the identify callback is not definition")
            : identify_callback(a),
            clear_canvas();
      });
      sbuilder = [];
    } else
      (a = document.getElementById("anysignCanvas")),
        (imageDataTmp = a
          .getContext("2d")
          .getImageData(
            minX - paste_padding,
            minY - paste_padding,
            maxX - minX + paste_padding + paste_padding + paste_padding,
            maxY - minY + paste_padding + paste_padding + paste_padding
          )),
        signResCallback &&
          ((b = getSignData().substr(22, getSignData().length)),
          (a = document.getElementById("anysignCanvas")),
          signResCallback(
            signObjTmp.cid,
            b,
            b,
            signTrack,
            signTrachPointCount,
            a.width,
            a.height
          )),
        (document.body.parentNode.style.overflow = "scroll"),
        (isSign = !1);
  else custom_alert("\u8bf7\u624b\u5199\u7b7e\u540d", "\u786e\u8ba4");
}
function setSignResCallback(a, b) {
  if (isSignOrCom(a.cid)) {
    signObjTmp = a;
    signResCallback = b;
    var c = document.getElementById("anysignCanvas"),
      c = c.getContext("2d");
    c.strokeStyle = signObjTmp ? signObjTmp.penColor : "black";
  } else
    (commentObjTmp = a),
      (signResCallback = b),
      (c = document.getElementById("comment_canvas")),
      (c = c.getContext("2d")),
      (c.strokeStyle = commentObjTmp ? commentObjTmp.penColor : "black"),
      (comment_canvas.strokeStyle = commentObjTmp
        ? commentObjTmp.penColor
        : "black");
}
function setCanvasHeight(a) {
  var b = document.getElementById("anysignCanvas");
  0 < a && ((b.height = a), b && (b.height = a));
}
function getSignData() {
  if (imageDataTmp) {
    var a = document.createElement("canvas"),
      b = a.getContext("2d"),
      c = window.devicePixelRatio ? window.devicePixelRatio : 1;
    a.width = imageDataTmp.width / c;
    a.height = imageDataTmp.height / c;
    c = 1;
    signObjTmp.singleWidth / signObjTmp.singleHeight <= a.width / a.height
      ? signObjTmp.singleWidth <= a.width &&
        (c = signObjTmp.singleWidth / a.width)
      : signObjTmp.singleHeight <= a.height &&
        (c = signObjTmp.singleHeight / a.height);
    a.width *= c;
    a.height *= c;
    calculatedSigWidth = a.width;
    calculatedSigHeight = a.height;
    c = document.createElement("canvas");
    c.width = imageDataTmp.width;
    c.height = imageDataTmp.height;
    c.getContext("2d").putImageData(imageDataTmp, 0, 0);
    b.drawImage(c, 0, 0, calculatedSigWidth, calculatedSigHeight);
    return a.toDataURL();
  }
  return null;
}
function getRawSigHeight() {
  return imageDataTmp
    ? void 0 !== window.devicePixelRatio
      ? imageDataTmp.height / window.devicePixelRatio
      : imageDataTmp.height
    : 0;
}
function getRawSigWidth() {
  return imageDataTmp
    ? void 0 !== window.devicePixelRatio
      ? imageDataTmp.width / window.devicePixelRatio
      : imageDataTmp.width
    : 0;
}
function cancelSign() {
  clear_canvas();
  // document.getElementById("dialog").style.display = "none";
  document.body.scroll = "yes";
  isSign = !1;
  signResCallback && signResCallback(signObjTmp.cid, null, null, 0);
}
function setIsAnysignInputDlgShown(a) {
  isAnysignInputDlgShown = a;
}
function testGetImageData() {}
function testEnc() {
  var a = tripleDesEncrypt("abcdefg", "000102030405060708090a0b0c0d0e0f");
  document.getElementById("result").value = a;
}
function testEncAndDec() {
  var a =
      tripleDesEncrypt(
        "abdfdsafdasfcdef132432432432g\u4f60\u597d\u5417,,,fdafdas",
        "133434"
      ) + "",
    b = tripleDesDecrypt(a, "133434") + "",
    b = anysign.hex.hexStrToUint8Str(b),
    a =
      "abdfdsafdasfcdef132432432432g\u4f60\u597d\u5417,,,fdafdas\n" +
      (a + "\n") +
      (b + "\n");
  anysign.json.stringToObj('{"Alg":"111","Value":"2222"}');
  document.getElementById("result").value = a;
}
function custom_alert(a, b) {
  showMsgDialog(a);
}
function preventDefault(a) {
  a = a || window.event;
  a.preventDefault && a.preventDefault();
  a.returnValue = !1;
}
var JQuery_Capable = {
    offset: function(a) {
      var b,
        c = { top: 0, left: 0 },
        d = a && a.ownerDocument;
      if (d)
        return (
          (b = d.documentElement),
          "undefined" !== typeof a.getBoundingClientRect &&
            (c = a.getBoundingClientRect()),
          (a = JQuery_Capable.getWindow(d)),
          {
            top: c.top + (a.pageYOffset || b.scrollTop) - (b.clientTop || 0),
            left:
              c.left + (a.pageXOffset || b.scrollLeft) - (b.clientLeft || 0),
          }
        );
    },
    getWindow: function(a) {
      return JQuery_Capable.isWindow(a)
        ? a
        : 9 === a.nodeType
        ? a.defaultView || a.parentWindow
        : !1;
    },
    isWindow: function(a) {
      return null != a && a == a.window;
    },
  },
  isIe = document.all ? !0 : !1,
  messContent;
function setSelectState(a) {
  for (
    var b = document.getElementsByTagName("select"), c = 0;
    c < b.length;
    c++
  )
    b[c].style.visibility = a;
}
function showMessageBox2(a, b, c, d) {
  closeWindow();
  c = getWindowHeight();
  d = getWindowWidth();
  isIe && setSelectState("hidden");
  a = document.createElement("div");
  a.id = "back";
  a.style.cssText =
    "font-size:15pt; text-align:center; z-index:7;top:0px;left:0px;position:fixed;background:#666;width:" +
    d +
    "px;height:" +
    c +
    "px;" +
    (isIe ? "filter:alpha(opacity\x3d0);" : "opacity:0;");
  c = document.createElement("div");
  c.id = "mesWindow";
  c.innerHTML =
    "\x3cdiv id\x3d'mesWindowContent'\x3e" +
    b +
    "\x3c/div\x3e\x3cdiv id\x3d'mesWindowBottom'\x3e\x3cinput id\x3d'mesWindowBtnOk' type\x3d'button' onclick\x3d'closeWindow();'value\x3d'\u786e\u8ba4' /\x3e\x3c/div\x3e";
  a.appendChild(c);
  document.body.appendChild(a);
  showBackground(a, 80);
  "ontouchstart" in document.documentElement
    ? ((a.ontouchstart = function(a) {
        return "mesWindowBtnOk" !== a.target.id ? (preventDefault(a), !1) : !0;
      }),
      (a.ontouchmove = function(a) {
        preventDefault(a);
      }))
    : ((a.onmousedown = function(a) {
        "mesWindowBtnOk" !== a.target.id && preventDefault(a);
      }),
      (a.onmousemove = function(a) {
        preventDefault(a);
      }));
}
function showBackground(a, b) {
  if (isIe)
    (a.filters.alpha.opacity += 1),
      a.filters.alpha.opacity < b &&
        setTimeout(function() {
          showBackground(a, b);
        }, 5);
  else {
    var c = parseFloat(a.style.opacity),
      c = c + 0.01;
    a.style.opacity = c;
    c < b / 100 &&
      setTimeout(function() {
        showBackground(a, b);
      }, 5);
  }
}
function closeWindow() {
  null != document.getElementById("back") &&
    document
      .getElementById("back")
      .parentNode.removeChild(document.getElementById("back"));
  null != document.getElementById("mesWindow") &&
    document
      .getElementById("mesWindow")
      .parentNode.removeChild(document.getElementById("mesWindow"));
  isIe && setSelectState("");
}
function showMsgDialog(a) {
  showMessageBox2("\u4fee\u6539\u5c0f\u7ed3\u5185\u5bb9", a, null, 350);
}
function showProgress(a) {
  showMsgProgress("\u4fee\u6539\u5c0f\u7ed3\u5185\u5bb9", a, null, 350);
}
function showMsgProgress(a, b, c, d) {
  closeWindow();
  c = getWindowHeight() / 0.99;
  d = getWindowWidth() / 0.99;
  isIe && setSelectState("hidden");
  a = document.createElement("div");
  a.id = "back";
  a.style.cssText =
    "font-size:15pt; text-align:center; z-index:7;top:0px;left:0px;position:fixed;background:#666;width:" +
    d +
    "px;height:" +
    c +
    "px;" +
    (isIe ? "filter:alpha(opacity\x3d0);" : "opacity:0;");
  c = document.createElement("div");
  c.id = "mesWindow";
  c.innerHTML = "\x3cdiv id\x3d'mesWindowContent'\x3e" + b + "\x3c/div\x3e";
  a.appendChild(c);
  document.body.appendChild(a);
  showBackground(a, 80);
}
(function() {
  function a(a, b) {
    return this.slice(a, b);
  }

  function b(a, b) {
    2 > arguments.length && (b = 0);
    for (var c = 0, d = a.length; c < d; ++c, ++b) this[b] = a[c] & 255;
  }

  function c(c) {
    var d;
    if ("number" === typeof c) {
      d = Array(c);
      for (var e = 0; e < c; ++e) d[e] = 0;
    } else d = c.slice(0);
    d.subarray = a;
    d.buffer = d;
    d.byteLength = d.length;
    d.set = b;
    "object" === typeof c && c.buffer && (d.buffer = c.buffer);
    return d;
  }

  try {
    new Uint8Array(1);
    return;
  } catch (d) {}
  window.Uint8Array = c;
  window.Uint32Array = c;
  window.Int32Array = c;
})();
(function() {
  "response" in XMLHttpRequest.prototype ||
    "mozResponseArrayBuffer" in XMLHttpRequest.prototype ||
    "mozResponse" in XMLHttpRequest.prototype ||
    "responseArrayBuffer" in XMLHttpRequest.prototype ||
    Object.defineProperty(XMLHttpRequest.prototype, "response", {
      get: function() {
        return new Uint8Array(new VBArray(this.responseBody).toArray());
      },
    });
})();
(function() {
  "btoa" in window ||
    (window.btoa = function(a) {
      var b = "",
        c,
        d;
      c = 0;
      for (d = a.length; c < d; c += 3)
        var f = a.charCodeAt(c) & 255,
          e = a.charCodeAt(c + 1) & 255,
          h = a.charCodeAt(c + 2) & 255,
          k = ((f & 3) << 4) | (e >> 4),
          e = c + 1 < d ? ((e & 15) << 2) | (h >> 6) : 64,
          h = c + 2 < d ? h & 63 : 64,
          b =
            b +
            ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(
              f >> 2
            ) +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(
                k
              ) +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(
                e
              ) +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(
                h
              ));
      return b;
    });
})();
var capabal = capabal || {
  crypto: {
    getRandomValues: function(a) {
      var b,
        c,
        d = a.length;
      if (d)
        for (; --d; )
          (c = Math.floor(Math.random() * (d + 1))),
            (b = a[c]),
            (a[c] = a[d]),
            (a[d] = b);
      return a;
    },
  },
};
function toUInt(a) {
  return 0 > a ? a + 4294967296 : a;
}
function bytes32(a) {
  return [(a >>> 24) & 255, (a >>> 16) & 255, (a >>> 8) & 255, a & 255];
}
function bytes16sw(a) {
  return [a & 255, (a >>> 8) & 255];
}
function adler32(a, b, c) {
  switch (arguments.length) {
    case 1:
      b = 0;
    case 2:
      c = a.length - b;
  }
  for (var d = 1, f = 0, e = 0; e < c; e++)
    (d = (d + a[b + e]) % 65521), (f = (f + d) % 65521);
  return toUInt((f << 16) | d);
}
function crc32(a, b, c) {
  switch (arguments.length) {
    case 1:
      b = 0;
    case 2:
      c = a.length - b;
  }
  var d = arguments.callee.crctable;
  if (!d) {
    for (var d = [], f, e = 0; 256 > e; e++) {
      f = e;
      for (var h = 0; 8 > h; h++) f = f & 1 ? 3988292384 ^ (f >>> 1) : f >>> 1;
      d[e] = toUInt(f);
    }
    arguments.callee.crctable = d;
  }
  f = 4294967295;
  for (e = 0; e < c; e++) f = d[(f ^ a[b + e]) & 255] ^ (f >>> 8);
  return toUInt(f ^ 4294967295);
}
(function() {
  var a = function() {
      var a = Array.prototype.slice.call(
          this.getContext("2d").getImageData(0, 0, this.width, this.height).data
        ),
        b = this.width,
        f = this.height,
        e = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82];
      Array.prototype.push.apply(e, bytes32(b));
      Array.prototype.push.apply(e, bytes32(f));
      e.push(8, 6, 0, 0, 0);
      Array.prototype.push.apply(e, bytes32(crc32(e, 12, 17)));
      for (var h = f * (4 * b + 1), k = 0; k < f; k++)
        a.splice(k * (4 * b + 1), 0, 0);
      b = Math.ceil(h / 32768);
      Array.prototype.push.apply(e, bytes32(h + 5 * b + 6));
      f = e.length;
      k = h + 5 * b + 6 + 4;
      e.push(73, 68, 65, 84, 120, 1);
      for (var l = 0; l < b; l++) {
        var p = Math.min(32768, h - 32768 * l);
        e.push(l == b - 1 ? 1 : 0);
        Array.prototype.push.apply(e, bytes16sw(p));
        Array.prototype.push.apply(e, bytes16sw(~p));
        p = a.slice(32768 * l, 32768 * l + p);
        Array.prototype.push.apply(e, p);
      }
      Array.prototype.push.apply(e, bytes32(adler32(a)));
      Array.prototype.push.apply(e, bytes32(crc32(e, f, k)));
      e.push(0, 0, 0, 0, 73, 69, 78, 68);
      Array.prototype.push.apply(e, bytes32(crc32(e, e.length - 4, 4)));
      return (
        "data:image/png;base64," +
        btoa(
          e
            .map(function(a) {
              return String.fromCharCode(a);
            })
            .join("")
        )
      );
    },
    b = HTMLCanvasElement.prototype.toDataURL;
  HTMLCanvasElement.prototype.toDataURL = function(c) {
    var d = b.apply(this, arguments);
    if ("data:," == d)
      return (HTMLCanvasElement.prototype.toDataURL = a), this.toDataURL();
    HTMLCanvasElement.prototype.toDataURL = b;
    return d;
  };
})();
function OCRObj(a) {
  var b,
    c,
    d,
    f,
    e = !1;
  b = null == a ? new OCRCapture() : a;
  c = new HWRRoot();
  d = new HWRInfo();
  c.version = "1.0";
  c.transID = UUID();
  c.encKey = "encKey";
  null == b.appID || "" == b.appID || void 0 == b.appID
    ? console.log("ocrCapture.appID is null")
    : ((c.userID = b.appID),
      null == b.serviceID || "" == b.serviceID || void 0 == b.serviceID
        ? console.log("ocrCapture.serviceID is null")
        : ((c.serviceID = b.serviceID),
          (d.type = 1),
          b.language == Language.CHS
            ? (d.lang = "1")
            : b.language == Language.CHT && (d.lang = "2"),
          (d.similar = b.resolution),
          (d.text = b.text),
          (d.hwrNum = b.count),
          (c.hwrInfo = d),
          (this.recognition = function(a, k, l) {
            if (null == a || "" == a || void 0 == a)
              return "Identification parameter is empty";
            if (10 > a.length) return "too few coordinates";
            f = l;
            OCRObj();
            null != d &&
              ((d.strokes = a), (d.hwrNum = b.count), (c.hwrInfo = d));
            null == b.IPAdress || "" == b.IPAdress || void 0 == b.IPAdress
              ? f("\u670d\u52a1\u5668\u5730\u5740\u4e3a\u7a7a\uff01", e)
              : jQuery.ajax({
                  type: "POST",
                  data: JSON.stringify(c),
                  dataType: "text",
                  timeout: 5e3,
                  url: b.IPAdress,
                  success: function(a) {
                    if (null == a || "undefined" == a || "" == a)
                      f(
                        "\u94fe\u63a5\u670d\u52a1\u5668\u5f02\u5e38,\u8bf7\u68c0\u67e5\u7f51\u7edc\uff01",
                        e
                      );
                    else {
                      a = JSON.parse(a);
                      if (null == a || "undefined" == typeof a)
                        alert(
                          "\u670d\u52a1\u5668\u8fde\u63a5\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u6b21\u5c1d\u8bd5"
                        );
                      else if ("0" == a.errCode)
                        for (var b = a.result, c = "", d = 0; d < b.length; d++)
                          if ("0" == b[d]) {
                            if (k == c) {
                              e = !0;
                              break;
                            }
                            c = "";
                          } else
                            var g = String.fromCharCode(b[d]),
                              c = c + g;
                      0 != a.errCode || e ? f(a.errCode, e) : f("-1", e);
                    }
                  },
                  error: function(a, b, c) {
                    f("\u8bf7\u6c42\u8d85\u65f6", e);
                    if ("timeout" == b)
                      alert(
                        "\u8bf7\u6c42\u8d85\u65f6,\u8bf7\u7a0d\u540e\u518d\u6b21\u5c1d\u8bd5"
                      );
                    else
                      return (
                        alert(
                          "\u8fde\u63a5\u670d\u52a1\u7aef\u5f02\u5e38: " +
                            b +
                            "\uff1bstatus code\uff1a" +
                            a.status +
                            "\uff1bstate\uff1a" +
                            a.readyState
                        ),
                        (a = document.getElementById("comment_canvas")),
                        a.getContext("2d").clearRect(0, 0, a.width, a.height),
                        !1
                      );
                  },
                });
          })));
}
function UUID() {
  for (var a = [], b = 0; 36 > b; b++)
    a[b] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
  a[14] = "4";
  a[19] = "0123456789abcdef".substr((a[19] & 3) | 8, 1);
  a[8] = a[13] = a[18] = a[23] = "-";
  return a.join("");
}
function stringToBytes(a) {
  for (var b, c, d = [], f = 0; f < a.length; f++) {
    b = a.charCodeAt(f);
    c = [];
    do c.push(b & 255), (b >>= 8);
    while (b);
    d = d.concat(c.reverse());
  }
  return d;
}
