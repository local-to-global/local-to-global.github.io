(()=>{
    "use strict";
    var e = {
        460: ()=>{
            var e = document.getElementById("rbw")
              , t = 0
              , n = (document.getElementsByTagName("html")[0],
            "ontouchstart"in window ? "touchend" : "click")
              , o = ["remove", "add"]
              , r = ["Add more contrast", "Remove additional contrast", "Inverted mode", "Normal mode"];
            function d(e, t, r) {
                var d = document.getElementsByTagName("html")[0]
                  , a = document.getElementById(e)
                  , c = a.firstChild
                  , i = !1;
                a.addEventListener(n, (function() {
                    var e = Number(i = !i);
                    c.data = t[e],
                    d.classList[o[e]](r)
                }
                ), !1)
            }
            !function() {
                var e = document.createElement("button");
                e.id = "contrast",
                e.classList.add("cont-inv"),
                e.innerText = r[0],
                e.tabIndex = 1;
                var t = document.createElement("button");
                t.id = "invmode",
                t.classList.add("cont-inv"),
                t.innerText = r[2],
                t.tabIndex = 2,
                document.body.appendChild(e),
                document.body.appendChild(t)
            }(),
            function n() {
                var o = "hsl(" + t + ", 80%, 60%)"
                  , r = t + 5;
                t = r > 360 ? 0 : r,
                e.style.color = o,
                setTimeout(n, 40)
            }(),
            d("contrast", [r[0], r[1]], "contrast"),
            d("invmode", [r[2], r[3]], "inverted")
        }
    }
      , t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var r = t[o] = {
            exports: {}
        };
        return e[o](r, r.exports, n),
        r.exports
    }
    n.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e,t)=>{
        for (var o in t)
            n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
    }
    ,
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    n(460)
}
)();
