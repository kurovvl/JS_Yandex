/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var h = [];
    hashtags.forEach(function(element) {
        element=element.toLowerCase();
        if (h.indexOf(element)<0) h.push (element);
    });
    //console.log(h.join(', '));
    return h.join(', ');
};
