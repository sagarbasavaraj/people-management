class StorageError extends Error {
  constructor(message) {
    super(message);
    this.name = "StorageError";

    // Maintains proper stack trace
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, StorageError)
      }
  }
}

export default StorageError;
