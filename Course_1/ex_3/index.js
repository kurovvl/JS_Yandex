
/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */


module.exports = function (hours, minutes, interval) {

    minutes=minutes+interval;
    if (minutes>59){
        var hInterval=Math.floor(minutes/60);
        hours=hours+hInterval
        minutes=minutes-hInterval*60;

    }
    if (hours>23){
        var dInterval= Math.floor(hours/24);
        hours= hours-dInterval*24;
    }
    var vTimeHour=hours>9?hours.toString():'0'+hours;
    var vTimeMin=minutes>9?minutes.toString():'0'+minutes;

    return vTimeHour+':'+vTimeMin;
};
