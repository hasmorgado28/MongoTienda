import Proveedores from "../models/Proveedores";

// MOSTRAR PROVEEDORES
export const mostrarProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedores.find().lean();

        res.render("proveedores", {
            proveedores: proveedores
        });
    } catch (error) {
        console.log(error);
    }
};

// AGREGAR PROVEEDOR
export const agregarProveedor = async (req, res) => {
    try {
        const proveedor = new Proveedores(req.body);

        await proveedor.save();

        res.redirect("/proveedores");
    } catch (error) {
        console.log(error);
    }
};

// ELIMINAR PROVEEDOR
export const eliminarProveedor = async (req, res) => {
    try {
        await Proveedores.findByIdAndDelete(req.params.id);

        res.redirect("/proveedores");
    } catch (error) {
        console.log(error);
    }
};

// MOSTRAR PROVEEDOR PARA EDITAR
export const mostrarEditarProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedores.findById(req.params.id).lean();

        res.render("editarProveedor", {
            proveedor: proveedor
        });
    } catch (error) {
        console.log(error);
    }
};

// ACTUALIZAR PROVEEDOR
export const actualizarProveedor = async (req, res) => {
    try {
        await Proveedores.findByIdAndUpdate(req.params.id, req.body);

        res.redirect("/proveedores");
    } catch (error) {
        console.log(error);
    }
};

// ACTIVAR O DESACTIVAR PROVEEDOR
export const statusProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedores.findById(req.params.id);

        proveedor.opcion = !proveedor.opcion;

        await proveedor.save();

        res.redirect("/proveedores");
    } catch (error) {
        console.log(error);
    }
};
