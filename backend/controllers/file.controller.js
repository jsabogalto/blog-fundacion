import File from "../models/file.model.js";

// Retorna TODOS los donadores
export const getFiles = async (req, res) => {
  try {
    // Más recientes primero; quita el sort si prefieres el orden natural
    const files = await File.find().sort({ createdAt: -1 });
    console.log("hola desde files")
    res.status(200).json(files);
  } catch (error) {
    console.error("Error en Files:", error.message);
    res.status(500).json({ message: error.message });
  }
};