import { NextRequest } from "next/server"

export async function POST(request:NextRequest) {
    const body =await request.json()
  
    console.log("POST request", body)
    // return NextResponse.json({ message: "Hello World" })
    return new Response(JSON.stringify({ message: "Hello World" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
    
  }
  