// get latest/highest/largest of objects id from array of objects
export const getLatestId = array =>
  Math.max.apply(
    Math,
    array.map(item => item.id)
  );
