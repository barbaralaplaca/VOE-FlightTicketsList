import { Router } from "express";
import { createFlightItem, deleteItem, getList } from "./flightControllers";

const router = Router();

router.get('/', getList);
router.post('/', createFlightItem);
router.delete('/:id', deleteItem);

export default router;