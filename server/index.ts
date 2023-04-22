import path from 'path'

import dotenv from 'dotenv'
import express from 'express'
import { Response } from 'express'
dotenv.config({ path: __dirname + '/../.env' })

const { SERVER_PORT } = process.env

const app = express()

app.use(express.json())

app.use(express.static(__dirname + '/../build'))
app.get('*', (_req: express.Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`)
})
