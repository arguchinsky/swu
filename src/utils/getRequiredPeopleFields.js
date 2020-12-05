/* eslint-disable camelcase */

export const getRequiredPeopleFields = ({ name, birth_year, gender, hair_color, height }) => ({
  name,
  gender,
  height,
  hairColor: hair_color,
  birthYear: birth_year,
});
