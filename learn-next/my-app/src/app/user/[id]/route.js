// app/api/users/[id]/route.js
import { NextResponse } from "next/server";
import { users } from "../route"; // ✅ correctly importing users

export async function GET(req, { params }) {
  const { id } = params;
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
