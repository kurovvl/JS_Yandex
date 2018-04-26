
var ss=[];

module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        var s = 
        {   
            name:'',
            subscriber:Object,
            handler:Object,
        }
        // handler.call(subscriber);
        s.name=event;
        s.subscriber=subscriber;
        s.handler=handler;
        // var filtred = ss.filter(function(x){return x.subscriber==subscriber;});
        //if (filtred.length<1) 
            ss.push(s);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        ss = ss.filter(function(x){
                return !((x.name==event)&&(x.subscriber==subscriber));
            });
               
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        var filtered = ss.filter(function(x){return x.name==event;});
        filtered.forEach(function(x){
            var keys = Object.keys(x);
            var subs = x.subscriber;
            var hand = x.handler;
            hand.call(subs);
        })
    return this;
    }
};
