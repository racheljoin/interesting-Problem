const TYPE = {
    ADD: 'ADD',
    EDIT: 'EDIT',
    DELETE: 'DELETE'
}
function _DeepDiff(rhs, lhs, changes = [], path = []) {
    let rKeys = Object.keys(rhs);
    let lKeys = Object.keys(lhs);
    let allKeys = new Set([...rKeys, ...lKeys]);
    for(let key of allKeys) {
        path.push(key);
        if(rhs[key] === undefined) {
            changes.push(diff(TYPE.ADD, path, null, lhs[key])); // 增
        } else if(lhs[key] === undefined) {
            changes.push(diff(TYPE.DELETE, path, rhs[key], null)); // 删
        }else if(typeof rhs[key] !== 'object' && lhs[key] !== rhs[key]) {
            changes.push(diff(TYPE.EDIT, path, rhs[key], lhs[key])); // 改
        } else if(typeof rhs[key] === 'object') {
            _DeepDiff(rhs[key], lhs[key], changes, path);
        }
        path.pop(key);
    }
    return changes;
}
function diff(type, path, rhs, lhs) {
    let obj = {
        type,
        path: [...path]
    };
    switch(type) {
        case TYPE.ADD: 
            obj.lhs = lhs;
            break;
        case TYPE.DELETE: 
            obj.rhs = rhs;
            break;
        case TYPE.EDIT: 
            obj.lhs = lhs;
            obj.rhs = rhs;
            break;
    }
    return obj;
}

window._DeepDiff = _DeepDiff;