"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@dnd-kit/core");
var button_1 = require("@/components/ui/button");
var PagePreview = function () {
    var _a = react_1.useState([]), components = _a[0], setComponents = _a[1];
    var _b = core_1.useDroppable({
        id: 'drop-area'
    }), isOver = _b.isOver, setNodeRef = _b.setNodeRef;
    var displayCodePreview = function () {
        var generatedHtml = components.map(function (component, index) {
            switch (component) {
                case 'Paragraph':
                    return "<p key=" + index + ">This is a paragraph</p>";
                case 'Link':
                    return "<a href=\"#\" key=" + index + ">This is a link</a>";
                case 'Nav':
                    return "<nav key=" + index + ">This is a nav</nav>";
                default:
                    return null;
            }
        }).join('');
        console.log(generatedHtml);
    };
    return (React.createElement("div", { className: "flex w-full h-full" },
        React.createElement("div", { className: "float-right" },
            React.createElement(button_1.Button, { onClick: displayCodePreview, variant: "ghost" }, "Code preview")),
        React.createElement("div", { className: "p-4 mt-10 w-full flex justify-center align-top" }, "DROP HERE")));
};
exports["default"] = PagePreview;
