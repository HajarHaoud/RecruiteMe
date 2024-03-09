function applyStyle(style) {
    var textarea = document.getElementById('editor');
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var selectedText = textarea.value.substring(start, end);

    var newText = '';

    switch (style) {
        case 'bold':
            newText = '<b>' + selectedText + '</b>';
            break;
        case 'italic':
            newText = '<i>' + selectedText + '</i>';
            break;
        case 'underline':
            newText = '<u>' + selectedText + '</u>';
            break;
        case 'strikethrough':
            newText = '<s>' + selectedText + '</s>';
            break;
        default:
            break;
    }

    var textBefore = textarea.value.substring(0, start);
    var textAfter = textarea.value.substring(end);
    textarea.value = textBefore + newText + textAfter;
}
