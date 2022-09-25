import Image from "next/image";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Image
        src="/images/profile.jpeg"
        width={240}
        height={240}
        alt="Carlos Felipe" />
      <h1>
        First Post!
      </h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}