import connect from "./app/lib/db";

export async function register() {
  await connect();
}

// You just need to export the register function and call the dbConnect function inside it.

// If the connection is successful, you will see the message Db connected in the console even before you access any page or api route.
