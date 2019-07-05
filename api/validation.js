module.exports = app => {
    function existsOrError(value, msg) {
        if(!value) throw msg //message error
        if(Array.isArray(value) && value.length === 0) throw msg //[]
        if(typeof value === 'string' && !value.trim()) throw msg // string ''
    }
    
    function notExistsOrError(value, msg){
        try {
            existsOrError(value, msg) //error
        } catch(msg) {
            return
        }
        throw msg
    }
    
    function equalsOrError(valueA, valueB, msg){
        if(valueA !== valueB) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}
