import React from "react";

function RegisterPage() {
  return (
    <div>
      <h2>
        Thanks for your interest and willingness to protect the nature on our
        planet.
      </h2>
      <p>
        Here you can register for receiving either a newsletter, contacts of
        nearby sellers from origin countries or networks, where you can purchase
        together witch others a bigger amount for a smaller price. And of course
        you also join this community and can exchange with other users about
      </p>
    </div>
  );
}

export default RegisterPage;

// from instrumentation.js

// import connect from "@/lib/db";

// export async function register() {
//   await connect();
// }

// You just need to export the register function and call the dbConnect function inside it.

// If the connection is successful, you will see the message Db connected in the console even before you access any page or api route.
