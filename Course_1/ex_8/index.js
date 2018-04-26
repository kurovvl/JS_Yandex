/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

function query(collection) {
    var gFriends=JSON.parse(JSON.stringify(collection));
    var fns = [].slice.call(arguments);
  //  fns.shift();
    fns.sort();
    fns.forEach(function(elm) {
        switch (elm[0]){
            case 'filter': 
                gFriends= gFriends.filter(
                    function(x){
                        var cmp = false;
                        elm[1].field.forEach(function (e){
                            if (x[elm[1].filter]==e) cmp=true;
                    });
                    return cmp;
                });
            break;

            case 'select': 
                gFriends = gFriends.map(function(el){
                    var keys = Object.keys(el);
                    keys.forEach(function(key){
                        if(elm[1].indexOf(key)<0) delete el[key];
                    });
                    return el;
                });
            break;
        }
    });
    return gFriends;}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);
    return ['select',fields];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filter',{filter:property,field:values}];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
