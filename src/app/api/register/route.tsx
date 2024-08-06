import { auth } from "@/config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get("email");
  //...we send email and password to firebase....

  createUserWithEmailAndPassword(auth, email!, "123456")
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user in the server>>>>", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  console.log("email", email);
  console.log("getting user from Firebase");
  const data = { message: "login succesfull" };
  return Response.json({ data });
}
