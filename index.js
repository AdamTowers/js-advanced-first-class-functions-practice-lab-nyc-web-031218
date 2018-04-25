// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach( function (driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function (drivers, location) {
  drivers.forEach( function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  });
}

const driversByRevenue = function (drivers) {
  newArr = drivers.slice()
  newArr.sort(function(a,b) {
    return a.revenue - b.revenue
  })
  return newArr
}

const driversByName = function (drivers) {
  newArr = drivers.slice()
  newArr.sort(function(a,b) {
    return a.name.localeCompare(b.name)
  })
  return newArr
}

const totalRevenue = function (drivers) {
  counter = 0
  for (let driver of drivers) {
    counter += driver.revenue
  }
  return counter
}

const averageRevenue = function (drivers) {
  counter = 0
  for (let driver of drivers) {
    counter += driver.revenue
  }
  return counter / drivers.length
}
