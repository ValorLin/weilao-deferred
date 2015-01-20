Easy Deferred
=============
Using Deferred() without jQuery.

[DEMO](http://weilao.github.io/easy-deferred/demo.html)

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