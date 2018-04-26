// Телефонная книга
var phoneBook = {};
var rc={cmd:"", name:"",phone:[]};
/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var sp = command.split(' ');
    rc.cmd=sp[0];
    switch (rc.cmd){
        case 'ADD': 
            rc.name=sp[1];
            rc.phone=sp[2].split(',');
            if (phoneBook[rc.name]==null) phoneBook[rc.name]=[];
            rc.phone.forEach(function(phone) {
                if (phoneBook[rc.name].filter(function(p){return p==phone;}).length==0)
                    phoneBook[rc.name].push(phone);
            });
            
        break;
        case 'REMOVE_PHONE':
            var retval = false;
            var keys = Object.keys(phoneBook);
            keys.forEach(function(key){
                var i = phoneBook[key].indexOf(sp[1]);
                if (i>=0) {
                    phoneBook[key].splice(i,1);
                    retval = true;
                }
                    
            });   
        break;
        case 'SHOW':
            var retval=[];
            var keys = Object.keys(phoneBook).sort();
            keys.forEach(function(key){
                if (phoneBook[key].length!=0)
                    retval.push(key+': '+phoneBook[key].join(', '));
                
            });

        
        break;    
    }
    console.log(Object.getOwnPropertyDescriptor(phoneBook,'Ivan'));
    return retval;
};
