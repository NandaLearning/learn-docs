import express from "express"
import cors from "cors"
import { sekolahController } from "./controller/sekolahController.js"
import  YAML from "yamljs"
import swaggerUiExpress from "swagger-ui-express"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const swagger = YAML.load("./controller/swagger.yml")
app.use("/api",swaggerUiExpress.serve,swaggerUiExpress.setup(swagger))

app.get("/sekolah", sekolahController.getAllSekolah)
app.get("/sekolah/:id", sekolahController.getSekolahById)
app.post("/sekolah", sekolahController.createSekolah)
app.put("/sekolah/:id", sekolahController.updateSekolahById)
app.delete("/sekolah/:id", sekolahController.deleteSekolahById)


app.listen(port, () => {
    console.log(`Server running on http://localhost:3000/`)
})