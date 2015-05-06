Weilao Deferred
=============
Just like jQuery.deferred() but smaller.

[DEMO](http://weilao.github.io/weilao-deferred/demo.html)

How to use
```js
(function () {

    // Define an async function using Deferred()
    function getResponseTextAsync() {
        var defer = Deferred();
        setTimeout(function () {
            if (Math.random() > 0.5) {
                defer.resolve('Response Text');
            } else {
                defer.reject('Fail Response!');
            }
        }, 1000);
        return defer;
    }

    // Usage
    getResponseTextAsync()
            .done(alert)
            .fail(alert)
            .always(function () {
                alert('Always~');
            });

})();
```

## Compatibility
IE9+
With [ieBetter](https://github.com/zhangxinxu/ieBetter.js) it would work in IE8-

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/weilao/weilao-deferred/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

