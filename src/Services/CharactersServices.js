import instance from "../Axios/Config";

export async function getByIndex(index) {
  return instance.get("/" + index);
}
