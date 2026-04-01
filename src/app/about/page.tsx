import { redirect } from "next/navigation";

// /about is just an anchor on the homepage — redirect cleanly
export default function AboutPage() {
  redirect("/#about");
}
