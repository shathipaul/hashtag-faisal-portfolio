import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-4">
      <p className="text-xl italic font-medium">Lost your way?</p>
      <Link href={"/"}>
        <button className="px-4 py-2 rounded lg:py-3 lg:px-6 bg-primary text-secondary">
          Go back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
