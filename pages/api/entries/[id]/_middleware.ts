import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware (req: NextRequest, ev: NextFetchEvent) {
  const { id } = req.page.params as { id: string }
  // eslint-disable-next-line prefer-regex-literals
  const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$')
  if (!checkMongoIDRegExp.test(id)) {
    return new Response(JSON.stringify({ message: 'El id no es valido' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  return NextResponse.next()
}
