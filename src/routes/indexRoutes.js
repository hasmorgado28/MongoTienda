import { Router } from "express";
import { createProductos, deleteProductos, renderEditProducto, renderProductos, statusProductos, updateProductos } from "../controllers/productoController";
import Productos from "../models/Productos";
import {
    mostrarProveedores,
    agregarProveedor,
    eliminarProveedor,
    mostrarEditarProveedor,
    actualizarProveedor,
    statusProveedor
} from "../controllers/proveedorController";


const router = Router();

router.get("/", renderProductos);

router.post("/productos/agregar", createProductos);

router.get("/productos/:id/update", renderEditProducto);

router.post("/productos/:id/update", updateProductos);

router.get("/productos/:id/delete", deleteProductos);

router.get("/productos/:id/status", statusProductos);

// Rutas de proveedores
router.get("/proveedores", mostrarProveedores);

router.post("/proveedores/agregar", agregarProveedor);

router.get("/proveedores/:id/editar", mostrarEditarProveedor);

router.post("/proveedores/:id/editar", actualizarProveedor);

router.get("/proveedores/:id/eliminar", eliminarProveedor);

router.get("/proveedores/:id/status", statusProveedor);

export default router;