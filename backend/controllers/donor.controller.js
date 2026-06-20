import Donor from "../models/donor.model.js";

// Retorna TODOS los donadores
export const getDonors = async (req, res) => {
  try {
    // Más recientes primero; quita el sort si prefieres el orden natural
    const donors = await Donor.find().sort({ createdAt: -1 });

    res.status(200).json(donors);
  } catch (error) {
    console.error("Error en getDonors:", error.message);
    res.status(500).json({ message: error.message });
  }
};