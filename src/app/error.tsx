"use client";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4">
      <h3 className="text-2xl font-semibold text-red-600">
        Something went wrong
      </h3>
      <p className="text-sm text-gray-600">
        {error.message || "An unexpected error occurred."}
      </p>

      {error.digest && (
        <p className="text-xs text-primary">Error ID: {error.digest}</p>
      )}
      <button
        className="px-4 py-2 rounded lg:py-3 lg:px-6 bg-primary text-secondary"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
