import Client from './Client'
import mongoServer from './database/db'

mongoServer()
new Client().init()
