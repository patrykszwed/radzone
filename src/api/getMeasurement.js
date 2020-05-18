import "isomorphic-fetch";

/**
 * Function for fetching measurements at given point from Safecast API
 * @param {float} latitude - point latitude
 * @param {float} longitude - point longitude
 * @param {float} distance - accepted range around point (100 is default)
 * @returns Array of measurements objects with: measured value, unit and timestamp
 **/
export default async function (latitude, longitude, distance = 10000) {
  console.log(
    `https://api.safecast.org/measurements.json?distance=${distance}&latitude=${latitude}&longitude=${longitude}`
  );
  try {
    return fetch(
      `https://api.safecast.org/measurements.json?distance=${distance}&latitude=${latitude}&longitude=${longitude}`
    )
      .then((response) => response.json())
      .then((json) => {
        let result = [];
        for (let item of Object.entries(json)) {
          result.push({
            value: item[1].value,
            unit: item[1].unit,
            timestamp: item[1].captured_at,
          });
        }
        return result;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log(error);
  }
}
