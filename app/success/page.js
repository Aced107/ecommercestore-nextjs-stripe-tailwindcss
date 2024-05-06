import Link from "next/link";

export default function SuccessPage() {
  return (
    <div>
      Nice! Your (test) purchase was successful
      <Link href={"/"}>
        <br />
        Back home
      </Link>
    </div>
  );
}
