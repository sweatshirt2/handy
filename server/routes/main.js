import { Router } from 'express';
const router = Router();

router.get('/', (rq, rs) => {
  rs.render('index');
});

router.get('/services', (rq, rs) => {
  rs.render('services');
});

router.get('/record', (rq, rs) => {
  rs.render('record');
});

export default router;