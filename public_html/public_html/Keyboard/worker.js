onmessage = function (e) {
    var Text = [];
    var contents = e.data[0];
    var pos = -1;
    var start = 0;
    var end = contents.indexOf("\n", pos + 1);
    var str = contents.substring(start, end - 1) + '¶';
    Text.push(str);
    while ((pos = end) !== -1) {
        start = end + 1;
        end = contents.indexOf("\n", start);
        str = contents.substring(start, end - 1) + '¶';

        Text.push(str);
    }
    postMessage(Text);
}


