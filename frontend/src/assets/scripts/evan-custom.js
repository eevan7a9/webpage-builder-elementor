// get latest/highest/largest of objects id from array of objects
export const getLatestId = array =>
  Math.max.apply(
    Math,
    array.map(item => item.id)
  );

export const toTimestamp = strDate => {
  var datum = Date.parse(strDate);
  return datum / 1000;
};
