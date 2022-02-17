import { isArray, reduce } from "lodash";

const processError = (err) => {
  if (err && isArray(err.errors)) {
    const errMessages = reduce(
      err.errors,
      (arr, error) => (error.message ? [...arr, error.message] : [...arr]),
      []
    );
    return errMessages.join("\n");
  }
  return null;
};

export default processError;
