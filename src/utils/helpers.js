export const getLocations = () => {
  try {
    const locations = localStorage.getItem("locations")
    if (locations) {
      return JSON.parse(locations)
    }
    return []
  } catch (error) {
    console.error("Error retrieving locations from local storage:", error)
    return { error: error.message }
  }
}

export const addLocation = (location) => {
  try {
    if (
      !location ||
      typeof location?.loc !== "string" ||
      typeof location?.fav !== "boolean"
    ) {
      throw new Error("Invalid location object")
    }
    const locations = getLocations()
    if (locations.some((el) => el.loc === location.loc)) {
      // This one was for you Joe!
      throw new Error("Location already exists in local storage")
    }
    const updatedLocations = [...locations, location]
    const storageLocations = updatedLocations.map((el) => ({
      loc: el.loc,
      fav: el.fav,
    }))
    localStorage.setItem("locations", JSON.stringify(storageLocations))
    return location
  } catch (error) {
    console.error("Error adding location to local storage:", error)
    return { error: error.message }
  }
}
