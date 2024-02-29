export function domInjector(seletor) {
    return function (target, propertyKey) {
        let element = null;
        const getter = function () {
            if (!element) {
                element = document.querySelector(seletor);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map