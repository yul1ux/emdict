const { getDefService } = require("../../services/index.js")
const { Api400Error, Api404Error } = require("../../utils/ApiError")

const getDef = async (req, res, next) => {
  const word = req.query.w

  try {
    if (!word) {
      throw new Api400Error("Please fill a word")
    }
    const def = await getDefService(word)
    if (def[0] === undefined) {
      throw new Api404Error("No definition found!")
    }
    res.status(200).json(def)
  } catch (error) {
    next(error)
  }
}

module.exports = { getDef }
