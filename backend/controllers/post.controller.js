import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";

//posts
export const getPosts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const query = {};

        const { cat, search, sort } = req.query;

        if (cat) {
            query.category = cat;
        }

        if (search) {
            query.title = { $regex: search, $options: "i" };
        }

        let sortObj = { createdAt: -1 };

        if (sort) {
            switch (sort) {
                case "newest":
                    sortObj = { createdAt: -1 };
                    break;
                case "oldest":
                    sortObj = { createdAt: 1 };
                    break;
                default:
                    break;
            }
        }

        // query pasado a Post.find() — antes era Post.find() sin filtros
        const posts = await Post.find(query)
            .populate("user", "username img")
            .sort(sortObj)
            .limit(limit)
            .skip((page - 1) * limit);

        // countDocuments(query) — cuenta solo los posts filtrados
        // antes contaba TODOS los posts ignorando el filtro
        const totalPost = await Post.countDocuments(query);
        const hasMore = page * limit < totalPost;

        res.status(200).json({ posts, hasMore });

    } catch (error) {
        console.error("Error en getPosts:", error.message);
        res.status(500).json({ message: error.message });
    }
};
//only one post
export const getPost = async (req, res) => {
    const post = await Post.findOne({ slug: req.params.slug })
        .populate("user", "username img linkedIn email profile");

    res.status(200).json(post);
};
//creating post
export const createPost = async (req, res) => {
    try {
        const { userId: clerkUserId, sessionClaims } = req.auth();
        //encontrar el usuario
        const user = await User.findOne({ clerkUserId });
        //consultar el rol si viene en { "role": "admin" }
        const role = sessionClaims?.metadata?.role;
        //si tiene el parametro de admin puede hacer el post
        if (role !== "admin") {
            return res.status(401).json("Solo usuarios administradores pueden hacer publicaciones.");
        }
        else {
            console.log("administrador", role)
        }
        //toLowerCase correctowww.linkedin.com/in/jhsabogalto

        let slug = req.body.title.replace(/ /g, "-").toLowerCase();
        //verificamos que el slug del post exista si existe creamos el final del slug con un numero que lo genera el contador
        let existingPost = await Post.findOne({ slug });

        let counter = 2;

        while (existingPost) {
            slug = `${slug}-${counter}`;
            existingPost = await Post.findOne({ slug });
            counter++;
        }
        //creamos el post y enviaos una respuesta con el slug, body y el user id
        const newPost = new Post({ user: user._id, slug, ...req.body });
        const post = await newPost.save();
        //si es correcto enviamos un codigo 200
        res.status(200).json(post);

    } catch (error) {
        //respues del error
        console.error("Error en createPost:", error.message);
        res.status(500).json({ message: error.message });
    }
};

export const uploadAuth = async (req, res) => {
    const imagekit = new ImageKit({
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    });
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
};
