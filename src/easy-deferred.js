;
(function (_window) {

    _window.Deferred = function () {
        var self, successCbs, failCbs, alwaysCbs, status,
            result, createDeferredFn, createInvokeFn;

        self = this;
        successCbs = [];
        failCbs = [];
        alwaysCbs = [];
        result = [];
        status = 'waiting';

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
                var result, allCb;
                result = arguments;
                allCb = [];
                status = newStatus;
                allCb.push.apply(allCb, cbs);
                allCb.push.apply(allCb, alwaysCbs);
                allCb.forEach(function (cb) {
                    cb.apply(self, result);
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