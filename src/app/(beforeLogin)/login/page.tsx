"use client";

import { useRouter } from "next/navigation";
import Main from "../_components/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

/* Redirect 방법 2
  1. ServerComponent : 
    import { redirect } from "next/navigation";
    redirect("/i/flow/login");

  2. ClientComponent
    import { useRouter } from "next/navigation";
    const router = useRouter();
    router.replace("/i/flow/login");
    return null;
*/

// router.push
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
// 뒤로가기 : localhost:3000/login

// router.replace
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
// 뒤로가기 : localhost:3000
