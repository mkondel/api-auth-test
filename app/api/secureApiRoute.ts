import { getSession, BlitzApiHandler, NotFoundError, AuthenticationError } from "blitz"
import db from "db"

const secureApiRoute: BlitzApiHandler = async (req, res) => {
  try {
    const session = await getSession(req, res)

    console.log("session:", Object.keys(session))

    console.log("secureApiRoute() SUCCESS")

    res.end("secureApiRoute() SUCCESS")
  } catch (e) {
    console.log("secureApiRoute() AUTH ERROR")

    res.status(403).end("secureApiRoute() AUTH ERROR")
  }
}

export default secureApiRoute
