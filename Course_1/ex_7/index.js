/**
 * @param {String} date
 * @returns {Object}
 */

 module.exports = function (date) {
    var datetime = new Date(date +' UTC'); 

    return {
        add:function(n,what){
            datetime=todate(datetime,n,what,1);
            //this.value=tostr(datetime); //OR1
            return this;
        },
        subtract:function(n,what){
            datetime=todate(datetime,n,what,-1);
            //this.value=tostr(datetime) //OR1
            return this;
        }
        ,get value(){return tostr(datetime);} //OR2 
    };
}
function err(){
    throw new TypeError();
}

function tostr(datetime){
    return datetime.toISOString().match(/....\-..\-..T..\:../g)[0].replace('T',' ');
}

function todate (dt,n,what,direction){
    var datetime=dt;
    if (n<0) err();
    switch(what){
        case 'years':
            datetime=new Date(datetime.setFullYear(datetime.getFullYear()+n*direction));
            break;
        case 'months':
            datetime=new Date(datetime.setMonth(datetime.getMonth()+n*direction));
            break;
        case 'days':
            datetime=new Date(datetime.setDate(datetime.getDate()+n*direction));
            break;
        case 'hours':
            datetime=new Date(datetime.setHours(datetime.getHours()+n*direction));
            break;
        case 'minutes':
            datetime=new Date(datetime.setMinutes(datetime.getMinutes()+n*direction));
            break;
        default: err();
    }
    return datetime;
}






    
