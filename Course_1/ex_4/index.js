/**
 * @param {String} tweet
 * @returns {String[]}
 */

module.exports = function (tweet) {

    var retval = tweet.match(/#\w+/g);
    if (retval!=null) retval= retval.map(function(x) {return x.slice(1)});
    else retval=[];

    return retval;
    

    
    
    
};
