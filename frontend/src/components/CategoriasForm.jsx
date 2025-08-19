import { useForm } from "react-hook-form";
import { categoriaService } from "../services/categorias.service";

function CategoriasForm() {
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(categoria) {
    await categoriaService.postCategorias(categoria);
    reset(); // Limpiar formulario una vez que se crea la categoria
  }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 border rounded bg-light shadow"
          style={{ minWidth: "500px" }}
        >
          <h4 className="mb-4 text-center">Crear Categoría</h4>
          <div className="mb-3">
            <input
              {...register("nombre")}
              className="form-control"
              placeholder="Nombre de la categoría"
            />
          </div>
          <div className="mb-3">
            <input
              {...register("descripcion")}
              className="form-control"
              placeholder="Descripción"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Crear
          </button>
        </form>
      </div>
    </>
  );
}

export default CategoriasForm;
