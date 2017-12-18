export function getMidArray(lat,long){
  const pi = Math.PI

  const radianLat = lat * pi/180
  const radianLong  = long * pi/180

  const calcX = Math.cos(radianLat) * Math.cos(radianLong)
  const calcY = Math.cos(radianLat) * Math.sin(radianLong)
  const calcZ = Math.sin(radianLat)

  return {x:calcX, y:calcY, z:calcZ}

}

export function getLatLong(array){

  const avg = array.map(function(pair){
    return getMidArray(pair.lat, pair.lng)
  })
  const count = avg.length
  let x = 0
  let y = 0
  let z = 0
   avg.forEach(function(cord){
     x += cord.x
     y += cord.y
     z += cord.z
   })

   let totalArray = [x,y,z]

   // console.log(totalArray)

  const avgArray = totalArray.map(function(coord){
    return coord/count
  })

  const longitude = Math.atan2(avgArray[1],avgArray[0])

  const hyp = Math.sqrt(avgArray[0] * avgArray[0] + avgArray[1] * avgArray[1])

  const latitude = Math.atan2(avgArray[2], hyp)


  const longitude_degrees = longitude * 180/Math.PI
  const latitude_degrees = latitude * 180/Math.PI

  return {lat: latitude_degrees, lng: longitude_degrees }


}
