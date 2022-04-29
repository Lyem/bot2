import Client from './Client'
import MongoServer from './database/db'

MongoServer()
new Client().init()
