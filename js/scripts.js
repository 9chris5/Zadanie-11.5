function button(text) {
    this.text = text || 'Hello';
}
button.prototype = {
    create: function() {
        this.$element = $('<button>');
        this.$element.text(this.text);
        var self = this;
        this.$element.click(function() {
            alert(self.text);
        });
        this.$element.appendTo($('body'));
    }
}

var btn1 = new button('Hello!');
var btn2 = new button('Hi!');

btn1.create();
btn2.create();