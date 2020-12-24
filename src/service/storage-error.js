//Custom storage error to handle storage errors.
class StorageError extends Error {
  constructor(message) {
    super(message);
    this.name = "StorageError";

    // Maintains proper stack trace and available only in v8
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, StorageError)
      }
  }
}

export default StorageError;
