import { NextResponse } from "next/server";

interface RequestData {
  name: string;
  email: string;
  msg: string;
}

export async function POST(request: Request) {
  try {
    const bodyData: RequestData = await request.json();
    const apiUrl = `${process.env.MAIL_URL}`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    };

    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data." },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error.", error_msg: error, status: "failed" },
      { status: 500 }
    );
  }
}
