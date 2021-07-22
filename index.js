
function findMatching(drivers, name){
    return drivers.filter(el => el.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(el => el.startsWith(letters))
}

function matchName(drivers, match){
    return drivers.filter(el => el.name === match)
}