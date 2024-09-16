var myNameSpace;
(function (myNameSpace) {
    // export class{}
    // export interface {}
    function show(msg) {
        return msg;
    }
    myNameSpace.show = show;
})(myNameSpace || (myNameSpace = {}));
// namespace.function()
// MyNameSpace.show('Hello namespace')
