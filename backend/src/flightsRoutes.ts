import { Router } from "express";
import { createFlightItem, deleteList, getList } from "./flightControllers";

const router = Router();

router.get('/', getList);
router.post('/', createFlightItem);
router.delete('/', deleteList);
// router.delete('/:id', deleteItem);

export default router;