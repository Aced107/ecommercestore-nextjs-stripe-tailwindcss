import Link from "next/link";

export default function CancelPage() {
  return (
    <div>
      Your Purchase Was Canceled
      <Link href={"/"}>
        <br />
        Back home
      </Link>
    </div>
  );
}
