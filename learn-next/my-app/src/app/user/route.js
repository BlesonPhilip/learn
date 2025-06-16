// app/api/users/route.js
import { NextResponse } from "next/server";

export let users = [
  { id: 1, name: "John Doe", email: "john@gmail.com" },
  { id: 2, name: "Jane Smith", email: "janes@gmail.com" },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req) {
  const body = await req.json();
  const newUser = {
    id: users.length + 1,
    ...body,
  };
  users.push(newUser);
  return NextResponse.json(newUser);
}
