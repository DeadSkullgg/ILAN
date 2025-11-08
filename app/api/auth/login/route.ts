import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { username, password } = body || {}

    // Mock validation: aceptar cualquier credencial no vacía
    if (!username || !password) {
      return NextResponse.json({ ok: false, message: "Usuario o contraseña faltante" }, { status: 400 })
    }

    // En un sistema real aquí validarías contra una base de datos
    // Podemos devolver un pequeño objeto con información de demo
    return NextResponse.json({ ok: true, user: { username } }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Payload inválido" }, { status: 400 })
  }
}
