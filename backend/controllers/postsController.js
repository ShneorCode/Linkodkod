import getPostFromJson from '../services/postsServices'

export async function getAllPostsController(req, res) {
    try {
        const allPosts = await getPostFromJson();
        req.send(allPosts)
    } catch (error) {
        console.error("Failed to pull posts.")
    }
}