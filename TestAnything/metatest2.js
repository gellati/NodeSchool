module.exports = function(str, allcaps, char){
    if(allcaps) str = str.toString().toUpperCase()
    char = char || '*'
    console.log( '~' + char + '~' + str.toString() + '~' + char + '~')
    return '~' + char + '~' + str.toString() + '~' + char + '~'
}
