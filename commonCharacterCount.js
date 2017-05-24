function commonCharacterCount(s1, s2) {
  var count = 0 

  var visited = s1.split("").reduce( (acc, char) => {
    if( acc.hasOwnProperty( char ) ) {
       acc[char] += 1
       return acc
    } else {
       acc[char] = 1
       return acc
    }
  }, {})
  
  s2.split("").forEach( char => {
    if( visited.hasOwnProperty( char ) && visited[ char ]) {
      count++
      visited[ char ] -= 1
    }
  })
  return count
}
