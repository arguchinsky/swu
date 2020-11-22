/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */

export const convertPeople = ({ name, birth_year, gender, hair_color, height }) => ({
  name,
  gender,
  height,
  hairColor: hair_color,
  birthYear: birth_year,
});
