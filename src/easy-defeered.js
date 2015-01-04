;(function (_window) {

    _window.Deferred = function () {
        var self, successCbs, failCbs, alwaysCbs, status,
            result, createDeferredFn, createInvokeFn;

        self = this;
        successCbs = [];
        failCbs = [];
        alwaysCbs = [];
        status = 'waiting';
        result = [];

        createDeferredFn = function (invokeStatus, cbs) {
            return function (fn) {
                if (invokeStatus.indexOf(status) > -1) {
                    fn.apply(self, result);
                } else {
                    cbs.push(fn);
                }
                return this;
            };
        };

        createInvokeFn = function (newStatus, cbs) {
            return function () {
                var args = arguments;
                status = newStatus;
                var allCb = alwaysCbs.apply(alwaysCbs, cbs);
                allCb.forEach(function (cb) {
                    cb.apply(self, args);
                    result = args;
                });
            };
        };

        return {
            done: createDeferredFn(['resolved'], successCbs),
            fail: createDeferredFn(['rejected'], failCbs),
            always: createDeferredFn(['resolved', 'rejected'], alwaysCbs),
            resolve: createInvokeFn('resolved', successCbs),
            reject: createInvokeFn('rejected', failCbs)
        };
    };

})(window);