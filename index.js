import express from 'express';
import cors from 'cors';
import YAML from 'yamljs';
import swaggerUiExpress from 'swagger-ui-express';
import path from 'path'; // Import path dari Node.js untuk manipulasi path

import { sekolahController } from './controller/sekolahController.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const swaggerPath = path.join('config.yml');

const swaggerDocument = YAML.load(swaggerPath);

app.use('/api', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));

// Routes untuk kontroler sekolah
app.get('/sekolah', sekolahController.getAllSekolah);
app.get('/sekolah/:id', sekolahController.getSekolahById);
app.post('/sekolah', sekolahController.createSekolah);
app.put('/sekolah/:id', sekolahController.updateSekolahById);
app.delete('/sekolah/:id', sekolahController.deleteSekolahById);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
