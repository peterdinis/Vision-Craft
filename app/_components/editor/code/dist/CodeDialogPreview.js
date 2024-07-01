'use strict';
exports.__esModule = true;
var dialog_1 = require('@/components/ui/dialog');
var Header_1 = require('../../shared/Header');
var react_codemirror_1 = require('@uiw/react-codemirror');
var codemirror_theme_vscode_1 = require('@uiw/codemirror-theme-vscode');
var codemirror_extensions_color_1 = require('@uiw/codemirror-extensions-color');
var codemirror_extensions_zebra_stripes_1 = require('@uiw/codemirror-extensions-zebra-stripes');
var CodeDialogPreview = function () {
    var code = "console.log('Code Mirror!');";
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            dialog_1.Dialog,
            null,
            React.createElement(dialog_1.DialogTrigger, null, 'Code Preview'),
            React.createElement(
                dialog_1.DialogContent,
                null,
                React.createElement(
                    dialog_1.DialogHeader,
                    null,
                    React.createElement(
                        dialog_1.DialogTitle,
                        null,
                        React.createElement(Header_1['default'], {
                            text: 'Code Preview',
                        }),
                    ),
                    React.createElement(
                        dialog_1.DialogDescription,
                        null,
                        React.createElement(react_codemirror_1['default'], {
                            className: 'mt-5',
                            value: code,
                            height: '100px',
                            autoFocus: true,
                            basicSetup: {
                                foldGutter: true,
                                dropCursor: true,
                                allowMultipleSelections: true,
                                indentOnInput: true,
                                autocompletion: true,
                                searchKeymap: true,
                                bracketMatching: true,
                                closeBrackets: true,
                                highlightActiveLine: true,
                            },
                            autoSave: 'true',
                            theme: codemirror_theme_vscode_1.vscodeDark,
                            editable: true,
                            extensions: [
                                codemirror_extensions_color_1.colorView(true),
                                codemirror_extensions_color_1.colorTheme,
                                codemirror_extensions_zebra_stripes_1.zebraStripes(
                                    { step: 2 },
                                ),
                            ],
                        }),
                    ),
                ),
            ),
        ),
    );
};
exports['default'] = CodeDialogPreview;
