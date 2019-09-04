(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
        typeof define === 'function' && define.amd ? define(['react'], factory) :
        (global = global || self, global.reusable = factory(global.React));
}(this, function (React) { 'use strict';

        var React__default = 'default' in React ? React['default'] : React;

        var Header = React.memo(function (props) {
          return React__default.createElement("h1", null, "Hello World!");
        });

        return Header;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW99IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEhlYWRlciA9IG1lbW8oKHByb3BzKSA9PiAoXHJcbiAgICAgICAgPGgxPkhlbGxvIFdvcmxkITwvaDE+XHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwibWVtbyIsInByb3BzIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBRUEsSUFBTUEsTUFBTSxHQUFHQyxVQUFJLENBQUMsVUFBQ0MsS0FBRDtRQUFBLFNBQ1pDLHdEQURZO1FBQUEsQ0FBRCxDQUFuQjs7Ozs7Ozs7In0=
