import Link from "next/link";

export default function () {
  return (
    <div>
      <h1>Hello World from Next.js</h1>
      <ul>
        <li>
          <Link href="/api/test">
            <a>API GET Test</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Form</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
