import Link from "next/link";

export default function Home() {
  let name = 'ToyCon';
  return (
    <div>
      <h4 className="title">애플후레시</h4>
      <p className="title-sub">dev by {name}</p>
    </div>
  )
}
